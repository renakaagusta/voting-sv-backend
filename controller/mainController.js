Setting = require("../model/settingModel");
Participant = require("../model/participantModel");
Candidate = require("../model/candidateModel");
Session = require("../model/sessionModel");

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

// Handle login actions
exports.login = function (req, res) {
  
  Setting.find(
    {
      "authentication.username": req.body.username,
      "authentication.password": req.body.password,
    },
    function (err, authentication) {
      if (err) throw err;
      if (authentication.length != 0) {
        res.json({
          message: "success",
          data: authentication,
        });
      } else {
        res.json({
          message: "failed",
        });
      }
    }
  );
};

// Handle announcement actions
exports.announcement = function (req, res) {
  Setting.find({}, function (err, announcement) {
    if (err) throw err;
    res.json({
      data: announcement[0].announcement,
    });
  });
};

// Handle resume actions
exports.outline = function (req, res) {
  var outline = {
    participant: 0,
    participantVoted: 0,
    candidate: 0,
    session: 0,
  };

  Participant.find({}, function (err, participants) {
    if (participants.length != 0) {
      outline.participant = participants.length;
      participants.forEach(function (participant) {
        if (participant.voting.time != null) outline.participantVoted++;
      });
      Candidate.find({}, function (err, candidates) {
        if (candidates.length != 0) outline.candidate = candidates.length;
        Session.find({}, function (err, sessions) {
          if (sessions.length != 0) outline.session = sessions.length;

          res.json({
            data: outline,
          });
        });
      });
    }
  });
};
