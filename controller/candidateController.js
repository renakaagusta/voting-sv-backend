// Import Candidate model
Candidate = require("../model/candidateModel");

var multer = require("multer");
var path = require("path");

var id = "";

var ip = [
  "36.81.8.10",
  "36.81.8.106",
  "103.23.224.177",
  "114.125.125.183",
  "125.166.133.76",
  "139.194.193.99",
  "198.16.66.155",
  "139.194.193.99",
  "139.194.193.99",
  "120.188.86.33",
  "36.68.14.146"
];

const storage = multer.diskStorage({
  destination: path.join(__dirname + "./../../"),
  filename: function (req, file, cb) {
    if (path.extname(file.originalname) != ".pdf") {
      cb(null, id + ".jpg");
    } else {
      cb(null, id + ".pdf");
    }
  },
});

const upload = multer({
  storage: storage,
}).single("file");

// Handle index actions
exports.index = function (req, res) {
   
  Candidate.get(function (err, candidates) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }
    return res.json({
      status: "success",
      message: "Candidate Added Successfully",
      data: candidates,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  var candidate = new Candidate();
  candidate.type = req.body.type;
  candidate.name = req.body.name;
  candidate.number = req.body.number;
  candidate.jurusan = req.body.jurusan;
  candidate.image = "avatar.jpg";
  candidate.cv = " ";
  candidate.description.short = req.body.shortDescription;
  candidate.description.mission = req.body.missionDescription;
  candidate.description.vision = req.body.visionDescription;

  // Save and validate
  candidate.save(function (err) {
    if (err) return res.json(err);
    return res.json({
      message: "New Candidate Created!",
      data: candidate,
    });
  });
};

// Handle view actions
exports.view = function (req, res) {
  Candidate.findById(req.params.id, function (err, candidate) {
    if (err) return res.send(err);
    return res.json({
      message: "candidates Detail Loading...",
      data: candidate,
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  id = req.params.id;
  Candidate.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        number: req.body.number,
        "description.short": req.body.shortDescription,
        "description.vision": req.body.visionDescription,
        "description.mission": req.body.missionDescription,
      },
    }
  )
    .then((candidate) => {
      if (candidate) {
        return res.json({
          message: "candidate updated",
          data: candidate,
        });
      } else {
        return res.json({
          message: "candidates not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle upload actions
exports.upload = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  type = req.body.type;
  id = req.params.id;
  upload(req, res, (err) => {
    if (err) throw err;

    Candidate.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          image: id + ".jpg",
          cv: id + ".pdf",
        },
      },
      function (err, candidate) {
        if (err) throw err;

        return res.json({
          message: "success upload",
        });
      }
    );
  });
};

// Handle count actions
exports.count = function (req, res) {
  
  Candidate.findById(req.body.id, function (err, candidate) {
    if (err) throw err;
    candidate.total_vote++;
    Candidate.findOneAndUpdate(
      { _id: candidate._id },
      { $set: candidate }
    ).then((candidate) => {
      if (candidate) {
        return res.json({
          message: "candidate voted",
          data: candidate,
        });
      } else {
        return res.json({
          message: "candidate not found",
          data: {},
        });
      }
    });
  });
};

// Handle delete actions
exports.delete = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  Candidate.remove(
    {
      _id: req.params.id,
    },
    function (err, candidate) {
      if (err) return res.send(err);
      return res.json({
        status: "success",
        message: "Candidate Deleted!",
      });
    }
  );
};
