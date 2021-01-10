var nodemailer = require("nodemailer");
Setting = require("../model/settingModel");
Participant = require("../model/participantModel");

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
exports.send = function (req, res) {
  Setting.get(function (err, settings) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    const setting = settings[0];

    var votingCardImage = new Buffer(
      req.body.image.split("base64,")[1],
      "base64"
    );

    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: setting.email.email,
        pass: setting.email.password,
      },
    });

    var mailOptions = {
      from: setting.email.email,
      to: req.body.to,
      subject: "PEMIRA SV UNS 2021",
      html:
        "<h1>Halo " +
        req.body.name +
        "</h1><p>Kami mengundang anda untuk mengikuti PEMIRA SV UNS 2021. Berikut kami lampirkan kartu pemilihan anda beserta dengan tata cara pemilihan.</p>",
      attachments: [
        {
          filename:
            "Kartu Pemilihan_" + req.body.name + "_" + req.body.nim + ".png",
          content: votingCardImage,
        },
        {
          filename: "Tata Cara Pemilihan PEMIRA SV UNS 2021.pdf",
          contentType: "application/pdf",
          path: "http://pemira.svuns.com/procedure.pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      console.log("setting: " + JSON.stringify(setting));
      console.log("error: " + JSON.stringify(err));
      console.log("info: " + JSON.stringify(info));
      if (err) return res.status(500).json(err);

      Participant.findOneAndUpdate(
        {
          _id: req.body.participantId,
        },
        {
          $set: {
            email_at: new Date(),
          },
        },
        function (err, participant) {
          if (err) return res.status(500).send(err);

          return res.json({
            message: "New Email sent!",
          });
        }
      );
    });
  });
};
