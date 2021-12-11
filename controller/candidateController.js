// Import Candidate model
Candidate = require("../model/candidateModel");
Ip = require("../model/ipModel");
var multer = require("multer");
var path = require("path");

var id = "";

const storage = multer.diskStorage({
    destination: path.join(__dirname + "./../public"),
    filename: function(req, file, cb) {
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
exports.index = function(req, res) {
    Candidate.get(function(err, candidates) {
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
exports.new = function(req, res) {
    const clientIP = 
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;

    
    var candidate = new Candidate();
    candidate.type = req.body.type;
    candidate.name = req.body.name;
    candidate.number = req.body.number;
    candidate.image = "avatar.jpg";
    candidate.cv = " ";
    candidate.subject = req.body.subject ? req.body.subject : "1";
    candidate.description.short = req.body.shortDescription;
    candidate.description.mission = req.body.missionDescription;
    candidate.description.vision = req.body.visionDescription;

    // Save and validate
    candidate.save(function(err) {
        if (err) return res.json(err);
        return res.json({
            message: "New Candidate Created!",
            data: candidate,
        });
    });
};

// Handle view actions
exports.view = function(req, res) {
    const clientIP = 
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
    console.log(clientIP)
    Candidate.findById(req.params.id, function(err, candidate) {
        if (err) return res.send(err);
        return res.json({
            message: "candidates Detail Loading...",
            data: candidate,
        });
    });
};

// Handle update actions
exports.update = function(req, res) {

    id = req.params.id;
    Candidate.findOneAndUpdate({ _id: id }, {
            $set: {
                name: req.body.name,
                number: req.body.number,
                subject: req.body.subject ? req.body.subject : "1",
                "description.short": req.body.shortDescription,
                "description.vision": req.body.visionDescription,
                "description.mission": req.body.missionDescription,
            },
        })
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
exports.upload = function(req, res) {

    type = req.body.type;
    id = req.params.id;

    upload(req, res, (err) => {
        if (err) throw err;

        Candidate.findOneAndUpdate({
                _id: id,
            }, {
                $set: {
                    image: id + ".jpg",
                    cv: id + ".pdf",
                },
            },
            function(err, candidate) {
                if (err) throw err;

                return res.json({
                    message: "success upload",
                });
            }
        );
    });
};

// Handle count actions
exports.count = function(req, res) {

    Candidate.findById(req.body.id, function(err, candidate) {
        if (err) throw err;
        candidate.total_vote++;
        Candidate.findOneAndUpdate({ _id: candidate._id }, { $set: candidate }).then((candidate) => {
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
exports.delete = function(req, res) {

    Candidate.remove({
            _id: req.params.id,
        },
        function(err, candidate) {
            if (err) return res.send(err);
            return res.json({
                status: "success",
                message: "Candidate Deleted!",
            });
        }
    );
};