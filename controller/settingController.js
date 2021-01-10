// Import Setting model
Setting = require("../model/settingModel");

var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname + "./../../"),
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, "procedure.pdf");
  },
});

const upload = multer({
  storage: storage,
}).single("file");

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
  "36.68.14.146",
  "114.142.169.43",
  "114.125.125.183",
  "103.23.224.177",
  "198.16.70.29",
  "103.23.224.177",
  "114.142.170.22",
  "120.188.86.33",
  "36.81.15.60",
  "114.124.246.51"
];

// Handle index actions
exports.index = function (req, res) {
  
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }

  console.log("ip: " + JSON.stringify(ip));
  Setting.get(function (err, settings) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Setting Added Successfully",
      data: settings,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  

  var setting = new Setting();
  setting.email.email = req.body.emailEmail;
  setting.email.password = req.body.emailPassword;
  setting.authentication.username = req.body.authenticationUsername;
  setting.authentication.password = req.body.authenticationPassword;
  setting.announcement = req.body.announcement;

  // Save and validate
  setting.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New Setting Created!",
      data: setting,
    });
  });
};

// Handle view actions
exports.view = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  
  Setting.findById(req.params.id, function (err, setting) {
    if (err) res.send(err);
    res.json({
      message: "settings Detail Loading...",
      data: setting,
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  
  Setting.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        "email.email": req.body.emailEmail,
        "email.password": req.body.emailPassword,
        "authentication.username": req.body.authenticationUsername,
        "authentication.password": req.body.authenticationPassword,
        announcement: new Date(req.body.announcement),
      },
    }
  )
    .then((setting) => {
      if (setting) {
        res.json({
          message: "setting updated",
          data: setting,
        });
      } else {
        res.json({
          message: "setting not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
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
  upload(req, res, (err) => {
    if (err) throw err;

    res.json({
      message: "success upload",
    });
  });
};

// Handle delete actions
exports.delete = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  
  Setting.remove(
    {
      _id: req.params.id,
    },
    function (err, setting) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Setting Deleted!",
      });
    }
  );
};
