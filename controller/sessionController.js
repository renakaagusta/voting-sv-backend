// Import Session model
Session = require("../model/sessionModel");
Participant = require("../model/participantModel");

var ip = [
  "103.23.224.177",
  "114.125.125.183",
  "125.166.133.76",
  "139.194.193.99",
  "198.16.66.155",
  "139.194.193.99",
  "139.194.193.99",
];

// Handle index actions
exports.index = function (req, res) {
  Session.get(function (err, sessions) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Session Added Successfully",
      data: sessions,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  var session = new Session();
  session.number = req.body.number;
  session.start = new Date(req.body.start);
  session.end = new Date(req.body.end);

  // Save and validate
  session.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New Session Created!",
      data: session,
    });
  });
};

// Handle view actions
exports.view = function (req, res) {
  Session.findById(req.params.id, function (err, session) {
    if (err) res.send(err);
    res.json({
      message: "sessions Detail Loading...",
      data: session,
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  Session.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        start: new Date(req.body.start),
        end: new Date(req.body.end),
      },
    }
  )
    .then((session) => {
      if (session) {
        Participant.updateMany(
          {
            "session.number": session.number,
          },
          {
            $set: {
              "session.min": new Date(req.body.start),
              "session.max": new Date(req.body.end),
            },
          },
          function (err, participants) {
            if (err) throw err;

            console.log(JSON.stringify(participants));

            res.json({
              message: "session updated",
              data: session,
            });
          }
        );
      } else {
        res.json({
          message: "session not found",
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

// Handle delete actions
exports.delete = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  
  Session.remove(
    {
      _id: req.params.id,
    },
    function (err, session) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Session Deleted!",
      });
    }
  );
};
