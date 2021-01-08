// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

var ip = [
  "103.23.224.177",
"114.125.125.183",
"125.166.133.76",
"139.194.193.99",
"198.16.66.155",
 "139.194.193.99",
 "139.194.193.99"
];

// Handle index actions
exports.index = function (req, res) {
  Participant.get(function (err, participants) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle search actions
exports.search = function (req, res) {
  Participant.find(
    {
      name: {
        $regex: req.params.name,
      },
    },
    function (err, participants) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }

      participants = [].concat(participants).reverse();

      return res.json({
        status: "success",
        message: "Participant Added Successfully",
        data: participants,
      });
    }
  );
};

// Handle index actions
exports.indexByPage = async function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  var page = req.params.page;
  try {
    var totalParticipant = await Participant.count();
    var participants = await Participant.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: {
        participants: participants,
        totalPage: Math.ceil(totalParticipant / 10),
      },
    });
  } catch (err) {
    return res.send(err);
  }
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    return res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }

  var participants = [
    {
      "name": "Adisty Vinka Adelia",
      "nim": "I8319002",
      "jurusan": "D-3 Teknik Kimia",
      "email": "adistyvinkaadelia@student.uns.ac.id"
    },
    {
      "name": "ALISYA ZAHNA FADILA",
      "nim": "V2620003",
      "jurusan": "D-3 Teknik Kimia",
      "email": "alisyazahna@student.uns.ac.id"
    },
    {
      "name": "Allma Velia Vidya Dana",
      "nim": "I8318001",
      "jurusan": "D-3 Teknik Kimia",
      "email": "allmavelia23@student.uns.ac.id"
    },
    {
      "name": "Anggi Putri Kusumawati",
      "nim": "V2620005",
      "jurusan": "D-3 Teknik Kimia",
      "email": "anggiputrik02@student.uns.ac.id"
    },
    {
      "name": "Beatrix Angel S.A.A.",
      "nim": "V2620010",
      "jurusan": "D-3 Teknik Kimia",
      "email": "beatrixangel.saa@student.uns.ac.id"
    },
    {
      "name": "Bintari Astika",
      "nim": "V2620011",
      "jurusan": "D-3 Teknik Kimia",
      "email": "bintariastika5@gmail.com"
    },
    {
      "name": "DENDI SRI SULISTYANTORO",
      "nim": "V2620013",
      "jurusan": "D-3 Teknik Kimia",
      "email": "dendisri@student.uns.ac.id"
    },
    {
      "name": "DONA KURNIAWATI DEWI",
      "nim": "V2620015",
      "jurusan": "D-3 Teknik Kimia",
      "email": "donakurniawati@student.uns.ac.id"
    },
    {
      "name": "Erica Puspita Sari",
      "nim": "V2620016",
      "jurusan": "D-3 Teknik Kimia",
      "email": "ericapuspita@student.uns.id"
    },
    {
      "name": "Fisafillah Al Mumtahinah",
      "nim": "V2620019",
      "jurusan": "D-3 Teknik Kimia",
      "email": "fisafillah@student.uns.ac.id"
    },
    {
      "name": "Fransisca Poppy Amelia",
      "nim": "V2620020",
      "jurusan": "D-3 Teknik Kimia",
      "email": "Fransiscaaap77@student.uns.ac.id"
    },
    {
      "name": "Hafiz Norman",
      "nim": "V2620021",
      "jurusan": "D-3 Teknik Kimia",
      "email": "hafiznorman@student.uns.ac.id"
    },
    {
      "name": "Khairunnisa Mazaya Kurnia Fajar",
      "nim": "I8319010",
      "jurusan": "D-3 Teknik Kimia",
      "email": "mazayakurnia@student.uns.ac.id"
    },
    {
      "name": "Laila Silvy Fatmawati",
      "nim": "V2620022",
      "jurusan": "D-3 Teknik Kimia",
      "email": "lailasilvy@student.uns.ac.id"
    },
    {
      "name": "Lu'lu' Fadlila 'Aziz",
      "nim": "I8319012",
      "jurusan": "D-3 Teknik Kimia",
      "email": "lulufadlilaa@student.uns.ac.id"
    },
    {
      "name": "Lutvi Aniek Setiyo Putri",
      "nim": "I8318014",
      "jurusan": "D-3 Teknik Kimia",
      "email": "Lutvi.putri22@student.uns.ac.id"
    },
    {
      "name": "Miftakhul Hakam",
      "nim": "I8319013",
      "jurusan": "D-3 Teknik Kimia",
      "email": "miftakhulhakam17@student.uns.ac.id"
    },
    {
      "name": "Muhammad Adi Firmansyah",
      "nim": "V2620025",
      "jurusan": "D-3 Teknik Kimia",
      "email": "adifirmansyah@student.uns.ac.id"
    },
    {
      "name": "Natasya Dian Andini",
      "nim": "V2620028",
      "jurusan": "D-3 Teknik Kimia",
      "email": "natasyad30@student.uns.ac.id"
    },
    {
      "name": "Niken Nurmalitasari Susanto",
      "nim": "I8319016",
      "jurusan": "D-3 Teknik Kimia",
      "email": "nikenhao19@student.uns.ac.id"
    },
    {
      "name": "Octavia Dwi Nugrahaeni",
      "nim": "V2620031",
      "jurusan": "D-3 Teknik Kimia",
      "email": "octaviadn@student.uns.ac.id"
    },
    {
      "name": "Prias Nur Aprilia",
      "nim": "I8319018",
      "jurusan": "D-3 Teknik Kimia",
      "email": "priasnuraprillia@student.uns.ac.id"
    },
    {
      "name": "Risma Nur Amelia Sari",
      "nim": "I8319019",
      "jurusan": "D-3 Teknik Kimia",
      "email": "rismanur_906@student.uns.ac.id"
    },
    {
      "name": "Safira Parama Santati",
      "nim": "I8318027",
      "jurusan": "D-3 Teknik Kimia",
      "email": "safiraparama27@student.uns.ac.id"
    },
    {
      "name": "Scela Dara Yolanda",
      "nim": "I8319021",
      "jurusan": "D-3 Teknik Kimia",
      "email": "sceladara.14@student.uns.ac.id"
    },
    {
      "name": "Siti Aiman Rumaisha",
      "nim": "V2620040",
      "jurusan": "D-3 Teknik Kimia",
      "email": "sitiaimanr@student.uns.ac.id"
    },
    {
      "name": "Supreh Setiawati",
      "nim": "I8319022",
      "jurusan": "D-3 Teknik Kimia",
      "email": "suprehsetiawati@student.uns.ac.id"
    },
    {
      "name": "Vira Mawardha Putri",
      "nim": "V2620042",
      "jurusan": "D-3 Teknik Kimia",
      "email": "viramawardha@student.uns.ac.id"
    },
    {
      "name": "Wina Rahma Fitriana",
      "nim": "V2620043",
      "jurusan": "D-3 Teknik Kimia",
      "email": "Winarahmaf1901@student.uns.ac.id"
    },
    {
      "name": "Yuliana Prasetiyani",
      "nim": "V2620045",
      "jurusan": "D-3 Teknik Kimia",
      "email": "yulianaprasetiyani@student.uns.ac.id"
    },
    {
      "name": "Ade Dita Nonik Pratiwi",
      "nim": "V1020001",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "aad_24@student.uns.ac.id"
    },
    {
      "name": "Adzhar Rachmat Ramadhan",
      "nim": "V1020002",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "adzharrachmat@student.uns.ac.id"
    },
    {
      "name": "Afani syafanah kurniadi",
      "nim": "V1020003",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "afanisyf.kurniadi@student.uns.ac.id"
    },
    {
      "name": "Aimee Mayza Aulia",
      "nim": "V1020005",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "aimeemayza@student.uns.ac.id"
    },
    {
      "name": "Aldo himawan",
      "nim": "D1819006",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "himawan4567@student.uns.ac.id"
    },
    {
      "name": "Alifa Ichsanti Putri",
      "nim": "V1020008",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "alifaichsanti@student.uns.ac.id"
    },
    {
      "name": "Angelina Tyas Mawarni",
      "nim": "V1020011",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "angelinatyas4@student.uns.ac.id"
    },
    {
      "name": "Anisa Dwi Saputri",
      "nim": "D1819010",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "anisadwisa@student.uns.ac.id"
    },
    {
      "name": "Anita Dwi Saputri",
      "nim": "V1020013",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "anitadwisaputri@student.uns.ac.id"
    },
    {
      "name": "Annisa Indah F",
      "nim": "D1819012",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "annisaindahh@student.uns.ac.id"
    },
    {
      "name": "Annisa Miftachurrohmah",
      "nim": "D1819013",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "miftaannisa13@student.uns.ac.id"
    },
    {
      "name": "Antin Fanmidyahningrum",
      "nim": "D1818021",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "antinfanmidyahningrum@student.uns.ac.id"
    },
    {
      "name": "Aulya Azki Fikriya Luthfi",
      "nim": "V1020015",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "aulyaazki@student.uns.ac.id"
    },
    {
      "name": "Azima Zariah",
      "nim": "D1819016",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "azimazrh.23@student.uns.ac.id"
    },
    {
      "name": "Bagas wajariyanto",
      "nim": "V1020017",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "aryobagas01@gmail.com"
    },
    {
      "name": "Carolin Megita Sari",
      "nim": "D1819019",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "carolinmegita055@student.uns.ac.id"
    },
    {
      "name": "Dilabella Larosa Ramadhani Setijadi",
      "nim": "D1819024",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "dilabellalarosa@student.uns.ac.id"
    },
    {
      "name": "Dinar saputri",
      "nim": "D1819027",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "dinars.putri@student.uns.ac.id"
    },
    {
      "name": "Dwi Yeni Nurlitayanti",
      "nim": "D1819031",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "dwiyeni01@student.uns.ac.id"
    },
    {
      "name": "Dyah Chrisna Ayu Puspita Sari",
      "nim": "D1819032",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "chrisnadyah17@student.uns.ac.id"
    },
    {
      "name": "Eka Diah Kinanthi",
      "nim": "V1020020",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "ekadiahkinanti@student.uns.ac.is"
    },
    {
      "name": "Erlita Widhi Astuti",
      "nim": "D1819034",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "erlitawidhia@student.uns.ac.id"
    },
    {
      "name": "Evimardani Pramelia",
      "nim": "D1819035",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "evimardanipramelia@student.uns.ac.id"
    },
    {
      "name": "Fajar Ayu Pratiwi",
      "nim": "V1020023",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "fajarayupratiwi@student.uns.ac.id"
    },
    {
      "name": "Fala Thifal Widyadhari",
      "nim": "V1020024",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "falathifalwd@student.uns.ac.id"
    },
    {
      "name": "Farida Nurul Hidayah",
      "nim": "D1819037",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "faridanurul309@student.uns.ac.id"
    },
    {
      "name": "Faridah",
      "nim": "V1020025",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "fafafaridah91@gmail.com"
    },
    {
      "name": "Fariz Suryo Saputro",
      "nim": "D1819038",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "Frzsyh27@student.uns.ac.id"
    },
    {
      "name": "Febryana Setyaningrum",
      "nim": "V1020026",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "febryanasetyaningrum@student.uns.ac.id"
    },
    {
      "name": "Feni Winda Rahmasari",
      "nim": "D1819039",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "fenirahma13@student.uns.ac.id"
    },
    {
      "name": "Feronika Amania Nastiti",
      "nim": "D1819040",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "feronikaamania@student.uns.ac"
    },
    {
      "name": "Fradania Aprilianti",
      "nim": "V1020027",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "fradania_aprilianti3@student.uns.ac.id"
    },
    {
      "name": "Gayuh Malik Istikhomah",
      "nim": "V1020028",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "gayuhmalik06@student.uns.ac.id"
    },
    {
      "name": "Ghani Zharfanhadi",
      "nim": "V1020029",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "ganboyjunior_777@student.uns.ac.id"
    },
    {
      "name": "Hani Amalia Larasati",
      "nim": "D1819043",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "hanilarasatiamalia@student.uns.ac.id"
    },
    {
      "name": "Iin Setyo Ningsih",
      "nim": "D1819046",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "iinsetyoningsih27@student.uns.ac.id"
    },
    {
      "name": "Indah Octaviani Syahfitri",
      "nim": "V1020035",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "indahoctavi18@student.uns.ac.id"
    },
    {
      "name": "Indiana Widyarini",
      "nim": "D1819047",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "indianawidya@student.uns.ac.id"
    },
    {
      "name": "Inna Daru Wardhani",
      "nim": "V1020036",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "innadaruw@student.uns.ac.id"
    },
    {
      "name": "Isna Nur Aqidatul",
      "nim": "D1819048",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "isnazizah@student.uns.ac.id"
    },
    {
      "name": "Jauhar Nafis Hilmy",
      "nim": "V1020037",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "jauharnafishilmy2001@student.uns.ac.id"
    },
    {
      "name": "jihan febrina",
      "nim": "v1020038",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "jihanfebrina1002@student.uns.ac.id"
    },
    {
      "name": "Kevin Ardian Zefanya",
      "nim": "V1020039",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "kevinzefanya25@student.uns.ac.id"
    },
    {
      "name": "Kharis Sukmo Adi",
      "nim": "V1020041",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "kharissukmoadi@student.uns.ac.id"
    },
    {
      "name": "Khomsatun Fadhilah Asmail Husna",
      "nim": "V1020042",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "khomsatunfadhilah354@student.uns.ac.id"
    },
    {
      "name": "Lina Widi Astuti",
      "nim": "V1020045",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "linawidiastuti2405@student.uns.ac.id"
    },
    {
      "name": "Mada Yurika",
      "nim": "V1020046",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "madayurika@student.uns.ac.id"
    },
    {
      "name": "Maharani Yoga Saputri",
      "nim": "V1020047",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "maharaniyogasaputri@student.uns.ac.id"
    },
    {
      "name": "Meyta Nur Pratidina",
      "nim": "V1020050",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "meytanurpratidina@student.uns.ac.id"
    },
    {
      "name": "Mita Ananda Sulistyowati",
      "nim": "D1819058",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "mita.ananda13@student.uns.ac.id"
    },
    {
      "name": "Muhammad yoga adhi nugraha",
      "nim": "V1020054",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "yogaadhi@student.uns.ac.id"
    },
    {
      "name": "NADILA RACHMA PERMATASARI",
      "nim": "V1020055",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "nadilarchm08@student.uns.ac.id"
    },
    {
      "name": "Nevyanti Nugraha Sari",
      "nim": "D1819064",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "nvyansari@student.uns.ac.id"
    },
    {
      "name": "Niken Dwi Martha",
      "nim": "V1020056",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "nikenndm9@student.uns.ac.id"
    },
    {
      "name": "Niken Kusuma Wardhani",
      "nim": "D1819065",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "nikenkusuma88@student.uns.ac.id"
    },
    {
      "name": "Nuriyana Kusumaningrum",
      "nim": "D1819068",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "nuriyana.kusumaningrum26@student.uns.ac.id"
    },
    {
      "name": "Putri Nugraheni",
      "nim": "V1020095",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "Putrinugraheni610@student.uns.ac.id"
    },
    {
      "name": "Rara Ajeng Oktora Listyasari",
      "nim": "D1819073",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "raraajengoktoralistyasari19@student.uns.ac.id"
    },
    {
      "name": "Retno Wijayanti",
      "nim": "V1020065",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "retnowijayanti12@student.uns.ac.id"
    },
    {
      "name": "Rinda Arum Febriananati",
      "nim": "V1020068",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "rindaarum21@student.ac.id"
    },
    {
      "name": "Rizki Amalia",
      "nim": "D1819076",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "amalliaar03@student.uns.ac.id"
    },
    {
      "name": "Rosinta luthfiana",
      "nim": "D1819079",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "Rosintaluthfiana2001@student.uns.ac.id"
    },
    {
      "name": "Rudi Junaedi",
      "nim": "V1020069",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "rudijunior128@student.ac.id"
    },
    {
      "name": "Salma Anindya Dhenastri",
      "nim": "D1819081",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "salmaadhe26@student.uns.ac.id"
    },
    {
      "name": "Sara Novita Anggraeni",
      "nim": "V1020074",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "anggraenisaranovita@student.uns.ac.id"
    },
    {
      "name": "Sekar Sinto Rahni",
      "nim": "V1020077",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "sekarapril123@gmail.com"
    },
    {
      "name": "singgih bimantoro",
      "nim": "V1020079",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "singgihbima03@student.uns.ac.id"
    },
    {
      "name": "Sisca Agnesfasia Rahmawati",
      "nim": "D1819086",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "siscaagnes22@student.uns.ac.id"
    },
    {
      "name": "Sundari Sutrasno",
      "nim": "V1020082",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "sundarisutrasno@student.uns.ac.id"
    },
    {
      "name": "Taca Yulisca",
      "nim": "D1819090",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "yulisca.taca@student.uns.ac.id"
    },
    {
      "name": "Tazkya Depha Yus Ghina",
      "nim": "D1819091",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "takyadepha@student.uns.ac.id"
    },
    {
      "name": "Truly Maharani Zahra",
      "nim": "V1020087",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "trulymaharanizahra@student.uns.ac.id"
    },
    {
      "name": "Uhti Rizka Sifai Nur'Aini",
      "nim": "D1819092",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "Ukhti.rizka@student.uns.ac.id"
    },
    {
      "name": "Viona Putri Veronika",
      "nim": "V1020089",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "vionaptr23@student.uns.ac.id"
    },
    {
      "name": "Wiji Lestari",
      "nim": "D1819095",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "Wijilestari0241@student.uns.ac.id"
    },
    {
      "name": "Yuanita Damayanti",
      "nim": "D1819097",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "yuanita24@student.uns.ac.id"
    },
    {
      "name": "Yunita Kusuma Dewi",
      "nim": "D1819103",
      "jurusan": "D-3 Ilmu Perpustakaan",
      "email": "yunitadewi0318@student.uns.ac.id"
    },
    {
      "name": "Andar Rizka Muriastuti",
      "nim": "V1220009",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "andarrizka@student.uns.ac.id"
    },
    {
      "name": "Anindya Mahardika Hutami",
      "nim": "V1220011",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "anindyamh@student.uns.ac.id"
    },
    {
      "name": "Arita Puji Lestari",
      "nim": "V1220015",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "aritapules2503@student.uns.ac.id"
    },
    {
      "name": "Awanisa Almas Adlina",
      "nim": "V1220016",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "awanisaalmasadlina@student.uns.ac.id"
    },
    {
      "name": "Azzahra Nabilla Aprivia",
      "nim": "F3118005",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "azzahranabillaaprivia@student.uns.ac.id"
    },
    {
      "name": "Evin ayu mutiasari",
      "nim": "F3118017",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "Evinayumutias@student.uns.ac id"
    },
    {
      "name": "Fitriana Putri Nuraini",
      "nim": "V1220030",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "fitrianaputri21@student.uns.ac.id"
    },
    {
      "name": "Frista Adelya Dwi Yunita",
      "nim": "V1220034",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "fristaadelya@student.uns.ac.id"
    },
    {
      "name": "Gradeletta Prima Gandes",
      "nim": "V1220035",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "gradelettaprima@student.uns.ac.id"
    },
    {
      "name": "Hilda zulvia karim",
      "nim": "V1220036",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "hildazulviakarim@student.uns.ac.id"
    },
    {
      "name": "Iffah Sulistiyowati",
      "nim": "V1220038",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "iffahsulistiyowati@student.uns.ac.id"
    },
    {
      "name": "Ikhsanudin Pramudiyo Putro",
      "nim": "V1220040",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "ikhsan_ipp17@student.uns.ac.id"
    },
    {
      "name": "Indifani Artha Kharisma Martatinaya",
      "nim": "V1220041",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "indifani@student.ac.id"
    },
    {
      "name": "Indri Berliani Novita",
      "nim": "F3119027",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "indribrln2000@student.uns.ac.id"
    },
    {
      "name": "Muhamad Firdaus",
      "nim": "V1220049",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "worthyhero@student.uns.ac.id"
    },
    {
      "name": "Nilam Nur Annisa",
      "nim": "V1220057",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "nilamnurannisa1909@student.uns.ac.id"
    },
    {
      "name": "Noval Rizky Ramadhan",
      "nim": "V1220058",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "novalrr18@student.uns.ac.id"
    },
    {
      "name": "Pandu Alam Rahutama",
      "nim": "F3118049",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "pandurahutama@student.uns.ac.id"
    },
    {
      "name": "Pramesthi Endah Cahyani",
      "nim": "V1220060",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "pramesthiec@student.uns.ac.id"
    },
    {
      "name": "Rachma Kusuma Ramadhan",
      "nim": "F3119001",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "ramadhan.6@student.uns.ac.id"
    },
    {
      "name": "Regita Adhika Putri Wijayanto",
      "nim": "V1220064",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "regitaadhikaputriwij@student.uns.ac.id"
    },
    {
      "name": "Resti Saputri",
      "nim": "V1220066",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "restisaputri12@student.uns.ac.id"
    },
    {
      "name": "retno wulandari",
      "nim": "v1220067",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "retnowln@student.uns.ac.id"
    },
    {
      "name": "Rizky Karish Ramadhani",
      "nim": "V1220073",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "rizkykarishramadhani@student.uns.ac.id"
    },
    {
      "name": "Sanda Dwiyani",
      "nim": "V1220077",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "sandadwiyani@student.uns.ac.id"
    },
    {
      "name": "Sekar wilujeng suryaningrum",
      "nim": "V1220087",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "sekarwilujeng23@student.uns.ac.id"
    },
    {
      "name": "Syafa haya faranitama",
      "nim": "F3118064",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "Fsyafa.haya21@student.uns.ac.id"
    },
    {
      "name": "Wiken Rukmaningtias",
      "nim": "V1220083",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "wikenrukma_2301@student.uns.ac.id"
    },
    {
      "name": "Zulfikar Nur Amri",
      "nim": "V1220086",
      "jurusan": "D-3 Manajemen Perdagangan",
      "email": "zulfikarnuramri09@student.uns.ac.id"
    },
    {
      "name": "Aghna Sabina Fatahillah",
      "nim": "V1620004",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "aghnasabina2801@student.uns.ac.id"
    },
    {
      "name": "Aisya Nur Fadia",
      "nim": "V1620005",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "aisyafadia1@student.uns.ac.id"
    },
    {
      "name": "Alfi Rana Lawahizh",
      "nim": "V1620007",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "alfiranaa@student.com"
    },
    {
      "name": "Alfin Bagas Romadanna",
      "nim": "F3518004",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "bagasganteng27@student.uns.ac.id"
    },
    {
      "name": "Aqila Afifah Octafriyana",
      "nim": "V1620011",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "aqila.afifa59@student.uns.ac.id"
    },
    {
      "name": "Arrayasi Atria Danesti",
      "nim": "V1620014",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "arrayasiad@student.uns.ac.id"
    },
    {
      "name": "Aurora Nanda avprita",
      "nim": "V1620016",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "aurorananda13@student.uns.ac.id"
    },
    {
      "name": "Bagus Aldi Saryono",
      "nim": "F3518010",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Bagusaldisaryono@student.uns.ac.id"
    },
    {
      "name": "Billy Abigail Mulyana",
      "nim": "F3518011",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "billyabigail25@student.ac.id"
    },
    {
      "name": "Bima Aji Maulana",
      "nim": "V1620021",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "ajib2125@student.ac.id"
    },
    {
      "name": "Brenda Yuastina Fitria",
      "nim": "F3518012",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Brenda@student.uns.ac.id"
    },
    {
      "name": "Chusaini Septianto Nugroho",
      "nim": "F3519012",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "chusainisn14.com@student.uns.ac.id"
    },
    {
      "name": "Erick Yusuf Ardiyanto",
      "nim": "F3519019",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "erickyusufar.21@student.uns.ac.id"
    },
    {
      "name": "Exsakti Mayasari",
      "nim": "F3519020",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "exsakti220900@student.uns.ac.id"
    },
    {
      "name": "Fadila Kurnia Hapsari",
      "nim": "V1620039",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "fadila.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Faustina Rahmasarita",
      "nim": "V1620042",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "ninafaustina16@student.uns.ac.id"
    },
    {
      "name": "Feliks Fernando Ernandya",
      "nim": "V1620044",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "feliksfrnnd28@student.ac.id"
    },
    {
      "name": "Feny Dewanti Kusumaningrum",
      "nim": "F3518021",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Fenydewanti@student.uns.ac.id"
    },
    {
      "name": "Gabrela Sabatini",
      "nim": "V1620050",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "gabrelasabatini@student.ac.id"
    },
    {
      "name": "Gabriel Chrisna Putra",
      "nim": "F3518023",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "gabrielchrisnap@student.uns.ac.id"
    },
    {
      "name": "Ganang Akhmad Zaki",
      "nim": "F3518024",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "ganangzaki@student.uns.ac.id"
    },
    {
      "name": "Gus Fahmi Sarif",
      "nim": "F3519026",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "gusfahmi@student.uns.ac.id"
    },
    {
      "name": "Haggi Rayhan Pahlevi",
      "nim": "V1620052",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "haggi.rayhan@student.uns.ac.id"
    },
    {
      "name": "Ira Setyaningrum",
      "nim": "F3518030",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "irasetyaningrum10@student.uns.ac.id"
    },
    {
      "name": "Islanova Selvia Rahmadianti",
      "nim": "F3518032",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "islanovaselvia@student.uns.ac.id"
    },
    {
      "name": "Izzat Tahbis Muhammad",
      "nim": "F3519030",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "izzat.tahbis17@student.uns.ac.id"
    },
    {
      "name": "Laurentia Natalia Fortuna",
      "nim": "F3518034",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "laurentia.fortuna@student.ac.id"
    },
    {
      "name": "Lisa Rismayanti",
      "nim": "V1620060",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "lisarisma@student.uns.co.id"
    },
    {
      "name": "Lismawati",
      "nim": "V1620061",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "lismawati01"
    },
    {
      "name": "Lu'lu' Nisa' Almunawaroh",
      "nim": "F3518035",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "lulunisaalm@student.uns.ac.id"
    },
    {
      "name": "Lulus derwita permatasari",
      "nim": "F3518037",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Dherwita28@student.uns.ac.id"
    },
    {
      "name": "muhammad ashaad habibie",
      "nim": "V1620067",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "ashaadhabibie@students.ac.id"
    },
    {
      "name": "Muhammad Wahyu Nugroho",
      "nim": "V1620072",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "muhammadwnugroho@student.uns.ac.id"
    },
    {
      "name": "NARARIA HERNA ANINDITA",
      "nim": "V1620074",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "narariaherna12@student.uns.ac.id"
    },
    {
      "name": "Nastiti Putri Utami",
      "nim": "F3518042",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "nastiti.putri2012@student.uns.ac.id"
    },
    {
      "name": "Naufal Arfananda Azril",
      "nim": "F3518043",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Nflazril23@student.uns.ac.id"
    },
    {
      "name": "Rahulla Candra Surya Pradipa",
      "nim": "V1620082",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "rahullacandra72@student.uns.ac.id"
    },
    {
      "name": "Rais Nur Ikhsan",
      "nim": "V1620083",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "nurikhsanrais2@gmail.com"
    },
    {
      "name": "Shafira Fitri Wirawati",
      "nim": "V1620091",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "shavir@student.ac.id"
    },
    {
      "name": "Sulis rahmawati",
      "nim": "V1620095",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "sulisrahma@student.uns.ac.id"
    },
    {
      "name": "Trivena Ghina Sahar",
      "nim": "V1620096",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "venaghina22@student.uns.ac.id"
    },
    {
      "name": "Wahyu Prasetio Wibowo",
      "nim": "V1620098",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "wahyutyo@student.uns.ac.id"
    },
    {
      "name": "Yuan Rizky Wahyudi",
      "nim": "V1620100",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "Yuanrizky@student.uns.ac.id"
    },
    {
      "name": "Zulfa Nur'aini Pratikasari",
      "nim": "V1620102",
      "jurusan": "D-3 Manajemen Bisnis",
      "email": "zulfanurainip02@student.uns.ac.id"
    },
    {
      "name": "Adiel Ceasar Karyanta",
      "nim": "V1720002",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "adielckckck@student.uns.ac.id"
    },
    {
      "name": "Alsyanissa Ajeng P",
      "nim": "V1720004",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "ajengp13.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Amidah Nur Adzani",
      "nim": "V1720006",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "amidahadzani@student.uns.ac.id"
    },
    {
      "name": "Anasti Cahya Adisti",
      "nim": "V1720007",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "anasticahya0396@student.uns.ac.id"
    },
    {
      "name": "Anggerheta Biocahyo Suci Maharani",
      "nim": "V1720008",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "anggerheta@student.uns.ac.id"
    },
    {
      "name": "Anisa cahyani",
      "nim": "V1720009",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Anisacahyani_04@student.uns"
    },
    {
      "name": "Anisa Dinda Ni'mah Imtikhani",
      "nim": "F3618012",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "anisadinda@student.uns.ac.id"
    },
    {
      "name": "Aprilina Nikem Lestari",
      "nim": "V1720010",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Aprilinankn_34@student.uns.ac.id"
    },
    {
      "name": "ARFIAN NUR JUNIYANTO",
      "nim": "V1720011",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "arfiannj28@student.uns.ac.id"
    },
    {
      "name": "ARIFAH AYU DEVY SAFITRI",
      "nim": "V1720012",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "arifahayudevysafitri@student.uns.ac.id"
    },
    {
      "name": "Ariyanti Komala Putri",
      "nim": "V1720013",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "ariyantikomalaputri@student.uns.ac.id"
    },
    {
      "name": "Augneta Ayu Hendrawati",
      "nim": "V1720015",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "augnetaayu7@student.uns.ac.id"
    },
    {
      "name": "Aulia Raihan Permana",
      "nim": "V1720016",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "raihanpermana255@student.uns.ac.id"
    },
    {
      "name": "Aureliagasha Grandy Satriani",
      "nim": "V1720017",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "aureliagashagrandys1@student.uns.ac.id"
    },
    {
      "name": "della seviana",
      "nim": "V1720021",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "dellaseviana@student.uns.ac.id"
    },
    {
      "name": "Deva Putri Yulianti",
      "nim": "V1720023",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "devputri05@student.uns.ac.id"
    },
    {
      "name": "Dewi Larasati Widiastuti",
      "nim": "F3619020",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "dewilarasati@student.uns.ac.id"
    },
    {
      "name": "Dewi Nur Hayati",
      "nim": "V1720024",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "dewinurhayati_dnh@studentuns.ac.id"
    },
    {
      "name": "Dheanda Yultanza Rizky Putri",
      "nim": "V1720025",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "dheandayultanza@student.uns.ac.id"
    },
    {
      "name": "Diar Luthviasari Gaenib",
      "nim": "F3618021",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Luthvialv187@student.uns.ac.id"
    },
    {
      "name": "Difa Putra Pradana",
      "nim": "V1720026",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "difapradanaa@student.uns.ac.id"
    },
    {
      "name": "DIVA WIGA WANDINI",
      "nim": "V1720027",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "diva10092002@student.uns.ac.id"
    },
    {
      "name": "Eka Meryana",
      "nim": "V1720028",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "ekameryana@student.uns.ac.id"
    },
    {
      "name": "Emawati",
      "nim": "F3619027",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "emawati2908@student.uns.ac.id"
    },
    {
      "name": "Erida Gris Rinadi",
      "nim": "V1720029",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "eridaaagris@student.uns.ac.id"
    },
    {
      "name": "Fahreza Eka Dani Ardityansyah",
      "nim": "V1720031",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fahrezaard12@student.uns.ac.id"
    },
    {
      "name": "Fairuz Hasna Qanita",
      "nim": "V1720032",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fairuzhq@student.uns.ac.id"
    },
    {
      "name": "Farrel Indra Pratama Putra",
      "nim": "V1720035",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "farrelpratama@student.uns.ac.id"
    },
    {
      "name": "Fatrika Putri Oktasya",
      "nim": "V1720036",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fatrika.05@student.uns.ac.id"
    },
    {
      "name": "Faturahman Ady Pramono",
      "nim": "V1720037",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fathurfr.346@student.uns.ac.id"
    },
    {
      "name": "Febby Jaya Isharyati",
      "nim": "V1720038",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "febbyji226@student.uns.ac.id"
    },
    {
      "name": "Feni Ardelinta",
      "nim": "F3618029",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "feniardeilinta@student.uns.ac.id"
    },
    {
      "name": "Filzah Hasnaa Hanifah",
      "nim": "V1720039",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "filzahasnaa@student.uns.ac.id"
    },
    {
      "name": "Finka Ayu Lestari",
      "nim": "V1720040",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "finkaayulestari20@student.uns.ac.id"
    },
    {
      "name": "Fitria Ayu Windarti",
      "nim": "V1720041",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fitriaayu1910@student.uns.ac.id"
    },
    {
      "name": "Frans Immanuel",
      "nim": "V1720042",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fransim@student.uns.ac.id"
    },
    {
      "name": "GANESHA MUTIARA JANNAH",
      "nim": "V1720043",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "ganeshamutiara@student.ac.id"
    },
    {
      "name": "Greinata Dewi Chandni Huni Wuragil",
      "nim": "V1720044",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "wuragilgreinata18@student.uns.ac.id"
    },
    {
      "name": "KANAYA NUR WIJAYA",
      "nim": "V1720048",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "kanayan006@student.uns.ac.id"
    },
    {
      "name": "Karima Ahlakun Nisa",
      "nim": "V1720049",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "ahlakunnisa@student.uns.ac.id"
    },
    {
      "name": "Laylatul Cahyaning Tiastuty",
      "nim": "F3618039",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "laylatulcahh@student.uns.ac.id"
    },
    {
      "name": "Lucky Wicaksana",
      "nim": "F3619042",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Wicaksanalucky@student.uns.ac.id"
    },
    {
      "name": "Margareta Okta Alamanda",
      "nim": "F3618041",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "mandamargareta@student.uns.ac.id"
    },
    {
      "name": "Maulida Alya Sabhira",
      "nim": "F3619044",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "maulidaalyasabhira@student.uns.ac.id"
    },
    {
      "name": "Melinda Intan Prameswary",
      "nim": "V1720055",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "melindaintan2323@student.uns.ac.id"
    },
    {
      "name": "Moch Faizhal Dzaky",
      "nim": "V1720056",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "faizhal10@student.uns.ac.id"
    },
    {
      "name": "Muhammad Fahrian Alfan Rahmandha",
      "nim": "V1720058",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "fahrianalfan@student.uns.ac.id"
    },
    {
      "name": "Muhammad Farid Hakim",
      "nim": "V1720059",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "faridhakim1708@student.uns.ac.id"
    },
    {
      "name": "Nabila Citra Maharani",
      "nim": "V1720061",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "nabilacitram@student.uns.ac.id"
    },
    {
      "name": "Najwa Salsabila",
      "nim": "V1720063",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "najwasalsabila@student.uns.ac.id"
    },
    {
      "name": "Nisa Sefty Haryanti",
      "nim": "F3619050",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "nisaseftyh@student.uns.ac.id"
    },
    {
      "name": "Nova Puspitasari",
      "nim": "V1720064",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "novapuspitasari2001@student.uns.ac.id"
    },
    {
      "name": "Nova Widi Setyo Nugroho",
      "nim": "V1720065",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "novawidisn@student.uns.ac.id"
    },
    {
      "name": "Novalinda Dindha Risma Qur'aini",
      "nim": "V1720066",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "novalindadindha@student.uns.ac.id"
    },
    {
      "name": "Nuvisya Amelia",
      "nim": "V1720067",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "nuvisyaamelia7@student.uns.ac.id"
    },
    {
      "name": "Patricia Pebriana Dian Kristiyanti",
      "nim": "V1720068",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "patriciapebriana@student.uns.ac.id"
    },
    {
      "name": "Putri Aulia Maharani",
      "nim": "V1720071",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "putriamahrani@student.uns.ac.id"
    },
    {
      "name": "Rahma Noor Azizah",
      "nim": "F3618055",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "rahmaazizah17@student.uns.ac.id"
    },
    {
      "name": "Riesta Banu Hardika",
      "nim": "F3618056",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "riesta_banu@student.uns.ac.id"
    },
    {
      "name": "Rifky Zulfikar Fauzy Ramadhani",
      "nim": "V1720073",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Zulfikarfauzy30@student.uns.ac.id"
    },
    {
      "name": "Rizka Azalea Nurul Mahardika",
      "nim": "V1720077",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "azalearizka@student.uns.ac.id"
    },
    {
      "name": "Rydle Sianturi",
      "nim": "V1720078",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "rydlesianturi@student.uns.ac.id"
    },
    {
      "name": "S.Solikhah Mahmudah",
      "nim": "V1720079",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "solikhahmahmudah11@student.uns.ac.id"
    },
    {
      "name": "Sabetta Widhi Rahayu",
      "nim": "V1720080",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "sabettawr@student.uns.ac"
    },
    {
      "name": "Salsabilla Vanya Ade Heksa",
      "nim": "V1720094",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "salsabillavanya27@student.uns.ac.id"
    },
    {
      "name": "SEKAR ANANDYA WAHYUNINGTYAS AKITA",
      "nim": "F3619061",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Sekaranandya@student.uns.ac.id"
    },
    {
      "name": "Septia Nur Hayati",
      "nim": "F3619062",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "Septiahayati4@student.uns.ac.id"
    },
    {
      "name": "Sheila Salma Septitantia",
      "nim": "F3619063",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "sheila.septitantia@student.uns.ac.id"
    },
    {
      "name": "Sonia Anita Ramadhan",
      "nim": "V1720085",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "sonianita@student.uns.ac.id"
    },
    {
      "name": "Tiara Monita Sitorus",
      "nim": "V1720087",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "tiaramonita@student.uns.ac.id"
    },
    {
      "name": "Triastika Mega Aulia",
      "nim": "V1720088",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "triastikamega@student.ac.id"
    },
    {
      "name": "Yanaski Adiyola",
      "nim": "V1720091",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "yanaskiadiy@student.uns.ac.id"
    },
    {
      "name": "Yonathan Dawang Jati",
      "nim": "V1720092",
      "jurusan": "D-3 Keuangan Perbankan",
      "email": "yonathandawang1@student.ac.id"
    },
    {
      "name": "Adella Chandra N",
      "nim": "F3319002",
      "jurusan": "D-3 Akuntansi",
      "email": "adellachandran02@student.uns.ac.id"
    },
    {
      "name": "Ajeng Kharisma Ayu Ajitama",
      "nim": "V1420008",
      "jurusan": "D-3 Akuntansi",
      "email": "ajengkharismayu@student.uns.ac.id"
    },
    {
      "name": "Aninda Rahma Azzahra",
      "nim": "V1420011",
      "jurusan": "D-3 Akuntansi",
      "email": "anindarahma14@student.uns.ac.id"
    },
    {
      "name": "Azzahra Putri Dewanto",
      "nim": "V1420015",
      "jurusan": "D-3 Akuntansi",
      "email": "azzkyadewanto@student.uns.ac"
    },
    {
      "name": "Chiara Chatlina Amelinda",
      "nim": "V1420020",
      "jurusan": "D-3 Akuntansi",
      "email": "chiara.chatlina01@student.uns.ac.id"
    },
    {
      "name": "Cindy Rena Puspitaningrum",
      "nim": "F3318021",
      "jurusan": "D-3 Akuntansi",
      "email": "cindyrena12@student.uns.ac.id"
    },
    {
      "name": "Daniel Fernando Kurniawan",
      "nim": "V1420022",
      "jurusan": "D-3 Akuntansi",
      "email": "danielfernando@student.uns.ac.id"
    },
    {
      "name": "Dieni Alifia Pramesti",
      "nim": "F3319025",
      "jurusan": "D-3 Akuntansi",
      "email": "dienialifiap@student.uns.ac.id"
    },
    {
      "name": "Dimas Indra Setiawan",
      "nim": "F3318026",
      "jurusan": "D-3 Akuntansi",
      "email": "dimasindra1310@student.uns.ac.id"
    },
    {
      "name": "Dyah Rosa Mulyaningsih",
      "nim": "F3318034",
      "jurusan": "D-3 Akuntansi",
      "email": "dyahrosa154@student.uns.ac.id"
    },
    {
      "name": "Ervina Widyasari",
      "nim": "F3319027",
      "jurusan": "D-3 Akuntansi",
      "email": "ervinawidya@student.uns.ac.id"
    },
    {
      "name": "Eva Wasis Utami Hidayati",
      "nim": "F3319028",
      "jurusan": "D-3 Akuntansi",
      "email": "evawasishidayati@student.und.ac.id"
    },
    {
      "name": "Evita Hari Nurdiati",
      "nim": "F3318048",
      "jurusan": "D-3 Akuntansi",
      "email": "Evitahari20@student.uns.ac.id"
    },
    {
      "name": "Ghibtiya Ghani Muflihatul Maghfiroh",
      "nim": "V1420029",
      "jurusan": "D-3 Akuntansi",
      "email": "ghibtiyaghani168@student.uns.ac.id"
    },
    {
      "name": "Gita Artia Damayanti",
      "nim": "F3318042",
      "jurusan": "D-3 Akuntansi",
      "email": "gitaartia@student.uns.ac.id"
    },
    {
      "name": "Julia Marcella Setyawati",
      "nim": "V1420041",
      "jurusan": "D-3 Akuntansi",
      "email": "juliamarcellas37@student.uns.ac.id"
    },
    {
      "name": "Lutfiana Nisza Rahmawati",
      "nim": "F3318052",
      "jurusan": "D-3 Akuntansi",
      "email": "lutfiananisza@student.uns.ac.id"
    },
    {
      "name": "Muhammad Wildan Alauddin",
      "nim": "F3318061",
      "jurusan": "D-3 Akuntansi",
      "email": "Muhammadwildanalauddin@student.uns.ac.id"
    },
    {
      "name": "Nabila Naufi Marwa",
      "nim": "F3319057",
      "jurusan": "D-3 Akuntansi",
      "email": "nabilanaufi@student.uns.ac.id"
    },
    {
      "name": "Noviani Agustina",
      "nim": "V1420064",
      "jurusan": "D-3 Akuntansi",
      "email": "novianiagustina23@student.uns.ac.id"
    },
    {
      "name": "Riska Bety Wahyuningsih",
      "nim": "F3318070",
      "jurusan": "D-3 Akuntansi",
      "email": "riskabety16@student.uns.ac.id"
    },
    {
      "name": "Risma Agustina",
      "nim": "F3318071",
      "jurusan": "D-3 Akuntansi",
      "email": "Ragustina0899@student.uns.ac.id"
    },
    {
      "name": "Rosalina Deviyanti",
      "nim": "F3318073",
      "jurusan": "D-3 Akuntansi",
      "email": "rosalinadeviyanti@student.uns.ac.id"
    },
    {
      "name": "Sekar Pertiwi Arumsari",
      "nim": "V1420077",
      "jurusan": "D-3 Akuntansi",
      "email": "sekarpertiwiarumsari@student.uns.ac.id"
    },
    {
      "name": "Vania Nungky Chrisanti",
      "nim": "F3318085",
      "jurusan": "D-3 Akuntansi",
      "email": "vanianungkyc@student.uns.ac.id"
    },
    {
      "name": "YUSRIZHA DAFA RIZKY",
      "nim": "F3318087",
      "jurusan": "D-3 Akuntansi",
      "email": "rizkyyusrizha@student.uns.ac.id"
    },
    {
      "name": "Ade Irfan Oktavian",
      "nim": "V4220001",
      "jurusan": "D-3 Teknik Sipil",
      "email": "adeirfanokt01@student.uns.ac.id"
    },
    {
      "name": "Adhitya",
      "nim": "I8718001",
      "jurusan": "D-3 Teknik Sipil",
      "email": "adhityad3infra@student.uns.ac.id"
    },
    {
      "name": "Ageng Buwana",
      "nim": "V4220003",
      "jurusan": "D-3 Teknik Sipil",
      "email": "agengbwn@student.uns.ac.id"
    },
    {
      "name": "AGUS SAPUTRO",
      "nim": "I8518001",
      "jurusan": "D-3 Teknik Sipil",
      "email": "agussaputro@student.uns.ac.id"
    },
    {
      "name": "Ahmad Sulthon Abror",
      "nim": "V4220004",
      "jurusan": "D-3 Teknik Sipil",
      "email": "ahmadabror@student.uns.ac.id"
    },
    {
      "name": "Alfian Farikhah Rizqi Hardiansyah",
      "nim": "V4220006",
      "jurusan": "D-3 Teknik Sipil",
      "email": "alfianrizqi@student.uns.ac.id"
    },
    {
      "name": "Alya Silvianti",
      "nim": "I8519003",
      "jurusan": "D-3 Teknik Sipil",
      "email": "alyasilvianti22@student.uns.ac.id"
    },
    {
      "name": "Amos Agung Nugroho",
      "nim": "I8519004",
      "jurusan": "D-3 Teknik Sipil",
      "email": "amosnugroho20@student.uns.ac.id"
    },
    {
      "name": "Anang Kusuma Wijaya",
      "nim": "V4220010",
      "jurusan": "D-3 Teknik Sipil",
      "email": "anangkusuma_18@student.uns.ac.id"
    },
    {
      "name": "Anggito Lungit",
      "nim": "I8718005",
      "jurusan": "D-3 Teknik Sipil",
      "email": "anggitol@student.uns.ac.id"
    },
    {
      "name": "Anjas Nur Ramadhan",
      "nim": "I8518004",
      "jurusan": "D-3 Teknik Sipil",
      "email": "anjasnurramadhan@student.uns.ac.id"
    },
    {
      "name": "Annisya Andaru Anindhita",
      "nim": "I8719003",
      "jurusan": "D-3 Teknik Sipil",
      "email": "aannisya6@student.uns.ac.id"
    },
    {
      "name": "Arfie Anansyah Prakoso",
      "nim": "V4220011",
      "jurusan": "D-3 Teknik Sipil",
      "email": "arfie13@student.uns.ac.id"
    },
    {
      "name": "Ari syaifudin",
      "nim": "v4220012",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Arisyaifudin626@studnet.uns.ac.id"
    },
    {
      "name": "Aryandhika Putra Samudra",
      "nim": "V4220013",
      "jurusan": "D-3 Teknik Sipil",
      "email": "aryandhika_s4m@student.uns.ac.id"
    },
    {
      "name": "Bagus Purnomo Jati",
      "nim": "I8719004",
      "jurusan": "D-3 Teknik Sipil",
      "email": "bagus19.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Cundamani Ariba Prasetya",
      "nim": "I8218008",
      "jurusan": "D-3 Teknik Sipil",
      "email": "cundaariba@student.uns.ac.id"
    },
    {
      "name": "Danindra Purwa Aji Satria",
      "nim": "V4220016",
      "jurusan": "D-3 Teknik Sipil",
      "email": "danindrasatria82@student.uns.ac.id"
    },
    {
      "name": "Dian Metri Arianti",
      "nim": "V4220018",
      "jurusan": "D-3 Teknik Sipil",
      "email": "dianmetri@student.uns.ac.id"
    },
    {
      "name": "Dicky Dwi Prasetyo",
      "nim": "V4220019",
      "jurusan": "D-3 Teknik Sipil",
      "email": "dickydwip84@student.uns.ac.id"
    },
    {
      "name": "Dimas Afif Prasdianto",
      "nim": "I8219005",
      "jurusan": "D-3 Teknik Sipil",
      "email": "dimasafif8@student.uns.ac.id"
    },
    {
      "name": "ENTIKA SALSABILA",
      "nim": "V4220021",
      "jurusan": "D-3 Teknik Sipil",
      "email": "entikasalsa@student.uns.ac.id"
    },
    {
      "name": "Erik Lintang Wardani",
      "nim": "I8719010",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Eriklintangwardani@student.uns.ac.id"
    },
    {
      "name": "Fachrizal Wisnu Wisuda",
      "nim": "V4220022",
      "jurusan": "D-3 Teknik Sipil",
      "email": "wisnufachrizal26@student.uns.ac.id"
    },
    {
      "name": "Fadhil Amanullah",
      "nim": "V4220023",
      "jurusan": "D-3 Teknik Sipil",
      "email": "fadhil_amanullah15@student.uns.ac.id"
    },
    {
      "name": "Faqih Faisal Arian",
      "nim": "V4220024",
      "jurusan": "D-3 Teknik Sipil",
      "email": "faqiharian@student.uns.ac.id"
    },
    {
      "name": "Fiana Aditya Dwi Putra",
      "nim": "I8219009",
      "jurusan": "D-3 Teknik Sipil",
      "email": "fianaaditya@student.uns.ac.id"
    },
    {
      "name": "Fifin Amalia Ghinannafsi",
      "nim": "V4220025",
      "jurusan": "D-3 Teknik Sipil",
      "email": "fifinamalia@student.uns.ac.id"
    },
    {
      "name": "Haidar Putra Firdaus",
      "nim": "V4220033",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Haidarputraf7879@student.uns.ac.id"
    },
    {
      "name": "Hariarti Hersiati",
      "nim": "I8219011",
      "jurusan": "D-3 Teknik Sipil",
      "email": "hariartihersiati2309@student.uns.ac.id"
    },
    {
      "name": "Hasan Tri Ashari",
      "nim": "V4220034",
      "jurusan": "D-3 Teknik Sipil",
      "email": "hasantri071@student.uns.ac.id"
    },
    {
      "name": "Hative Dzunur Romadhoni",
      "nim": "V4220035",
      "jurusan": "D-3 Teknik Sipil",
      "email": "hative.dz@student.uns.ac.id"
    },
    {
      "name": "Herlambang Shandhi Satriawan",
      "nim": "I8719014",
      "jurusan": "D-3 Teknik Sipil",
      "email": "shandhi.satriawan@student.uns.ac.id"
    },
    {
      "name": "Intan Cahyani",
      "nim": "I8719016",
      "jurusan": "D-3 Teknik Sipil",
      "email": "intancahyani@student.uns.ac.id"
    },
    {
      "name": "Isnaini Suryaning Santosa",
      "nim": "I8719017",
      "jurusan": "D-3 Teknik Sipil",
      "email": "isna.nana00@student.uns.ac.id"
    },
    {
      "name": "Jenu Madu Retno Mandandari",
      "nim": "I8219012",
      "jurusan": "D-3 Teknik Sipil",
      "email": "jenumdrm.10@student.uns.ac.id"
    },
    {
      "name": "Kartika Anggonowati",
      "nim": "I8219014",
      "jurusan": "D-3 Teknik Sipil",
      "email": "kartikaanggonowati08@student.uns.ac.id"
    },
    {
      "name": "Khofifah Zenari",
      "nim": "V4220038",
      "jurusan": "D-3 Teknik Sipil",
      "email": "khofifahzenari@student.uns.ac.id"
    },
    {
      "name": "Khoiron Azis Kurniawan",
      "nim": "I8518015",
      "jurusan": "D-3 Teknik Sipil",
      "email": "ironarifudin01@student.uns.ac.id"
    },
    {
      "name": "Lusia Anggi Paramita",
      "nim": "V4220039",
      "jurusan": "D-3 Teknik Sipil",
      "email": "lusiaanggi123@student.uns.ac.id"
    },
    {
      "name": "Mardianti Olivia Maharani",
      "nim": "V4220041",
      "jurusan": "D-3 Teknik Sipil",
      "email": "mardiantiolivia@student.uns.ac.id"
    },
    {
      "name": "Mayang Putri",
      "nim": "I8719018",
      "jurusan": "D-3 Teknik Sipil",
      "email": "mayangputri755@student.uns.ac.id"
    },
    {
      "name": "Meilia Rahmawati",
      "nim": "I8219016",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Meiliarahma227@student.uns.ac.id"
    },
    {
      "name": "Melisa Nur Aristyawati",
      "nim": "I8218018",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Aristyawatimelisa24@student.uns.ac.id"
    },
    {
      "name": "MELISSA MELIN BANJARNAHOR",
      "nim": "V4220043",
      "jurusan": "D-3 Teknik Sipil",
      "email": "melissamelin2003@student.uns.ac.id"
    },
    {
      "name": "Mohamad Avif Fatoni",
      "nim": "I8218021",
      "jurusan": "D-3 Teknik Sipil",
      "email": "mavif23101@student.uns.ac.id"
    },
    {
      "name": "Mohamad Firman Bagus Ardiansyah",
      "nim": "V4220044",
      "jurusan": "D-3 Teknik Sipil",
      "email": "mfirman220@atudent.uns.ac.id"
    },
    {
      "name": "Monica Rosilawati",
      "nim": "I8719019",
      "jurusan": "D-3 Teknik Sipil",
      "email": "monicarosila@student.uns.ac.id"
    },
    {
      "name": "Muhammad Yasir Sulthon Nashrulloh",
      "nim": "V4220051",
      "jurusan": "D-3 Teknik Sipil",
      "email": "sulthonn111@student.uns.ac.id"
    },
    {
      "name": "Nadhifa Aqilatul Hafshoh",
      "nim": "V4220053",
      "jurusan": "D-3 Teknik Sipil",
      "email": "nadhifaah@student.uns.ac.id"
    },
    {
      "name": "Natasia ayu oktaviana",
      "nim": "I8219018",
      "jurusan": "D-3 Teknik Sipil",
      "email": "natasiaayuoktaviana_17@student.uns.ac.id"
    },
    {
      "name": "Naufal Firdaus Prastomo",
      "nim": "V4220056",
      "jurusan": "D-3 Teknik Sipil",
      "email": "naufalfirdaus13@student.uns.ac.id"
    },
    {
      "name": "Niken Saputri",
      "nim": "I8219019",
      "jurusan": "D-3 Teknik Sipil",
      "email": "nikeen_saputri@student.uns.ac.id"
    },
    {
      "name": "Noveita Anisa Putri",
      "nim": "V4220059",
      "jurusan": "D-3 Teknik Sipil",
      "email": "noveitaanisaputri@student.uns.ac.id"
    },
    {
      "name": "Putra Anitapa",
      "nim": "V4220061",
      "jurusan": "D-3 Teknik Sipil",
      "email": "putraanitapa@student.uns.ac.id"
    },
    {
      "name": "Rafika Hasni Perdana",
      "nim": "I8719023",
      "jurusan": "D-3 Teknik Sipil",
      "email": "rafikahasni@student.uns.ac"
    },
    {
      "name": "Rafita Azzahra",
      "nim": "V4220062",
      "jurusan": "D-3 Teknik Sipil",
      "email": "rafitaazzahra@student.uns.ac.id"
    },
    {
      "name": "Rafly Hafizh Irsyad Syah Putra",
      "nim": "I8219022",
      "jurusan": "D-3 Teknik Sipil",
      "email": "raflyhafizh1@student.uns.ac.id"
    },
    {
      "name": "Raihan Avrilla Fathi Zidan",
      "nim": "V4220063",
      "jurusan": "D-3 Teknik Sipil",
      "email": "raihanafz29@student.uns.ac.id"
    },
    {
      "name": "Rainy Shinta Nur Halimah",
      "nim": "V4220064",
      "jurusan": "D-3 Teknik Sipil",
      "email": "rainyshinta@student.uns.ac.id"
    },
    {
      "name": "Ratna Maysaroh",
      "nim": "I8219023",
      "jurusan": "D-3 Teknik Sipil",
      "email": "ratnamaysaroh08@student.uns.ac.id"
    },
    {
      "name": "Rizaq Faidhul Hisan",
      "nim": "V4220071",
      "jurusan": "D-3 Teknik Sipil",
      "email": "Rizaqhisan21@student.uns.ac.id"
    },
    {
      "name": "Rizky Ade Firmansyah",
      "nim": "I8518024",
      "jurusan": "D-3 Teknik Sipil",
      "email": "rizkyade6690@student.uns.ac.id"
    },
    {
      "name": "Rosyihan Caesar Nurrohman",
      "nim": "V4220073",
      "jurusan": "D-3 Teknik Sipil",
      "email": "rosyihancn@student.uns.ac.id"
    },
    {
      "name": "Siswanti Handayani",
      "nim": "I8219026",
      "jurusan": "D-3 Teknik Sipil",
      "email": "siswantihandayani18@student.uns.ac.id"
    },
    {
      "name": "SITI MAR'ATUS SHOLIKHAH",
      "nim": "V4220076",
      "jurusan": "D-3 Teknik Sipil",
      "email": "sitims_likhah433@student.uns.ac.id"
    },
    {
      "name": "Sri Dharma Agung Pradana",
      "nim": "I8719026",
      "jurusan": "D-3 Teknik Sipil",
      "email": "sridharma_2304@student.uns.ac.id"
    },
    {
      "name": "Sunu Pandya Wicaksana",
      "nim": "I8718027",
      "jurusan": "D-3 Teknik Sipil",
      "email": "sunupandya@student.uns.ac.id"
    },
    {
      "name": "Tegar Dwi Prakoso",
      "nim": "V4220080",
      "jurusan": "D-3 Teknik Sipil",
      "email": "tegar.dwi.prakoso033@student.uns.ac.id"
    },
    {
      "name": "Timor Fathahila",
      "nim": "I8718029",
      "jurusan": "D-3 Teknik Sipil",
      "email": "timorfathahila@student.uns.ac.id"
    },
    {
      "name": "Winda Meta Octabviani",
      "nim": "V4220092",
      "jurusan": "D-3 Teknik Sipil",
      "email": "windametaoctavia@student.uns.ac.id"
    },
    {
      "name": "Yosefina Cinta Radityaningtyas",
      "nim": "V4220094",
      "jurusan": "D-3 Teknik Sipil",
      "email": "yosefinacinta@student.uns.ac.id"
    },
    {
      "name": "Yufinka Sepviarani",
      "nim": "V4220088",
      "jurusan": "D-3 Teknik Sipil",
      "email": "yufinkasepviarani@student.uns.ac.id"
    },
    {
      "name": "Fery Budi Satria",
      "nim": "I8618016",
      "jurusan": "D-3 Teknik Mesin",
      "email": "Ferybudisatria9@gmail.com"
    },
    {
      "name": "Alfadin Mahbub Gian Alzura",
      "nim": "I8519002",
      "jurusan": "D3 Teknik Sipil Bangunan Gedung",
      "email": "Alfadin17@student.uns.ac.id"
    },
    {
      "name": "Agustina Nur Hapsari",
      "nim": "D1319002",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "agtnh123@student.uns.ac.id"
    },
    {
      "name": "Beatrix Ecyntia Bella Putri",
      "nim": "D1619004",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "ecyntiabella28_07@student.uns.ac.id"
    },
    {
      "name": "Diffa Dyah Ayu Anggraini",
      "nim": "D1619006",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "diffadyah@student.uns.ac.id"
    },
    {
      "name": "EKA TIYAS ASTUTI",
      "nim": "D1418015",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "ekatiyas49@student.uns.ac.id"
    },
    {
      "name": "Fani Anugerah Bhayangkara",
      "nim": "D1319018",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "fanianugerahb277@student.uns.ac.id"
    },
    {
      "name": "Hafiza Alifa A",
      "nim": "D1619010",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "hfzalifa@student.uns.ac.id"
    },
    {
      "name": "Kayla Ari Sophie Kencana",
      "nim": "D1619015",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "Kaylakcn@student.uns.ac.id"
    },
    {
      "name": "Khoerunnisak",
      "nim": "D1418023",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "nisakhoerun_fimil@student.uns.ac.id"
    },
    {
      "name": "Radisti Nur Amalia",
      "nim": "D1319039",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "radistiamalia_02@student.uns.ac.id"
    },
    {
      "name": "Raka Aditya putra tama",
      "nim": "D1418031",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "Rakafr.37@student.uns.ac.id"
    },
    {
      "name": "Rima anggi pratiwi",
      "nim": "D1418034",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "rimaanggi24@student.uns.ac.id"
    },
    {
      "name": "Safira Binti Adib Baraba",
      "nim": "D1618036",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "safieaadib@student.uns.ac.id"
    },
    {
      "name": "Shavanissa Azam Avazani",
      "nim": "D1319043",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "Shavanissa78@student.ac.id"
    },
    {
      "name": "Sofia Khairunnisa Majid",
      "nim": "D1418036",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "sofiakm99@student.uns.ac.id"
    },
    {
      "name": "Yovita Khansa Kirana",
      "nim": "D1619037",
      "jurusan": "D3-Komunikasi Terapan",
      "email": "yovitakhansa18@student.uns.ac.id"
    },
    {
      "name": "Alissa Revolius",
      "nim": "V3720003",
      "jurusan": "D-3 Farmasi",
      "email": "Tatarevolius@student.uns.ac.id"
    },
    {
      "name": "Amanda Ainur Rizma",
      "nim": "V3720004",
      "jurusan": "D-3 Farmasi",
      "email": "amandarizma.ar@student.uns.ac.id"
    },
    {
      "name": "Angga Kharismawati",
      "nim": "M3518004",
      "jurusan": "D-3 Farmasi",
      "email": "anggakhrsm99@student.uns.ac.id"
    },
    {
      "name": "Anggita Puteri Diyanti",
      "nim": "V3720006",
      "jurusan": "D-3 Farmasi",
      "email": "Anggitagita23@student.uns.ac.id"
    },
    {
      "name": "ANINDYA ERYNA",
      "nim": "M3519008",
      "jurusan": "D-3 Farmasi",
      "email": "anindyaeryna@student.uns.ac.id"
    },
    {
      "name": "Aniswatun Rosikhoh",
      "nim": "M3518005",
      "jurusan": "D-3 Farmasi",
      "email": "aniswatunrosikhoh@student.uns.ac.id"
    },
    {
      "name": "Anisya Ajeng Kristiyanti",
      "nim": "M3519009",
      "jurusan": "D-3 Farmasi",
      "email": "anisya.ajeng35@student.uns.ac.id"
    },
    {
      "name": "Ansya Fitria Fa'arahul Azzahra",
      "nim": "V3720007",
      "jurusan": "D-3 Farmasi",
      "email": "ansyafitria5@student.uns.ac.id"
    },
    {
      "name": "Ardhian Nurcahyo",
      "nim": "V3720008",
      "jurusan": "D-3 Farmasi",
      "email": "ardhiannurcahyo01@student.uns.ac.id"
    },
    {
      "name": "Asa padnovsky",
      "nim": "V3720009",
      "jurusan": "D-3 Farmasi",
      "email": "Asapadnovsky@student.uns.ac.id"
    },
    {
      "name": "Astri Hidayati",
      "nim": "M3519010",
      "jurusan": "D-3 Farmasi",
      "email": "asstrihiday20@student.uns.ac.id"
    },
    {
      "name": "Audrea Tiara Putri",
      "nim": "V3720010",
      "jurusan": "D-3 Farmasi",
      "email": "audreatiaraa@student.uns.ac.id"
    },
    {
      "name": "Aulia Chintya",
      "nim": "V3720011",
      "jurusan": "D-3 Farmasi",
      "email": "aulia.chintya@student.uns.ac.id"
    },
    {
      "name": "Bella Azzahra Aqira Averillia",
      "nim": "V3720013",
      "jurusan": "D-3 Farmasi",
      "email": "bellaazzzahra@student.uns.ac.id"
    },
    {
      "name": "Desy Setianingsih",
      "nim": "V3720014",
      "jurusan": "D-3 Farmasi",
      "email": "desi.sn1@student.uns.ac.id"
    },
    {
      "name": "Dewi Nurul Aini",
      "nim": "M3518014",
      "jurusan": "D-3 Farmasi",
      "email": "aini4908@student.uns.ac.id"
    },
    {
      "name": "Distya Nadja Purnani",
      "nim": "V3720015",
      "jurusan": "D-3 Farmasi",
      "email": "distyanadjani@student.uns.ac.id"
    },
    {
      "name": "Dita Yuli Budiasih",
      "nim": "M3518017",
      "jurusan": "D-3 Farmasi",
      "email": "ditayuli220799@student.uns.ac.id"
    },
    {
      "name": "Diva Aulia Sukma Wati",
      "nim": "V3720016",
      "jurusan": "D-3 Farmasi",
      "email": "aauliass@student.uns.ac.id"
    },
    {
      "name": "Diyah Ayu Kumalasari",
      "nim": "V3720017",
      "jurusan": "D-3 Farmasi",
      "email": "Ayudiyahkumalasari@student.uns.ac.id"
    },
    {
      "name": "Echa Hana Prastia",
      "nim": "V3720018",
      "jurusan": "D-3 Farmasi",
      "email": "echaprastia70438@student.uns.ac.id"
    },
    {
      "name": "Emira Herdiannisa Monik",
      "nim": "M3518021",
      "jurusan": "D-3 Farmasi",
      "email": "emiraherdiannisa@student.uns.ac.id"
    },
    {
      "name": "Fadhila Dian Nafisa",
      "nim": "V3720019",
      "jurusan": "D-3 Farmasi",
      "email": "fadhiladian362@student.uns.ac.id"
    },
    {
      "name": "Fadhila Diva Haninda",
      "nim": "V3720020",
      "jurusan": "D-3 Farmasi",
      "email": "fadhiladiva@student.uns.ac.id"
    },
    {
      "name": "Fadila Herannisa",
      "nim": "V3720021",
      "jurusan": "D-3 Farmasi",
      "email": "fherannisa16@student.uns.ac.id"
    },
    {
      "name": "Fadilah Afni Tanjung",
      "nim": "M3519016",
      "jurusan": "D-3 Farmasi",
      "email": "fadilahafni01@student.uns.ac.id"
    },
    {
      "name": "Fadillah Nur Aini",
      "nim": "V3720022",
      "jurusan": "D-3 Farmasi",
      "email": "fadillahnuraini422@student.uns.ac.id"
    },
    {
      "name": "Faizatul Nadia",
      "nim": "M3519018",
      "jurusan": "D-3 Farmasi",
      "email": "nadialubis56@student.uns.ac.id"
    },
    {
      "name": "Febrianti Harahap",
      "nim": "V3720023",
      "jurusan": "D-3 Farmasi",
      "email": "febriantihrp@student.uns.ac.id"
    },
    {
      "name": "Fiomitta Nur Aulia",
      "nim": "V3720024",
      "jurusan": "D-3 Farmasi",
      "email": "fiomitta@student.uns.ac.id"
    },
    {
      "name": "Firdha Maghfira Pardana Putri",
      "nim": "M3519021",
      "jurusan": "D-3 Farmasi",
      "email": "firdhapardana77@student.uns.ac.id"
    },
    {
      "name": "Fitria Lidini Hanifah",
      "nim": "V3720025",
      "jurusan": "D-3 Farmasi",
      "email": "fitrialidini0212@student.uns.ac.id"
    },
    {
      "name": "Fitrilia Rachma Ardana",
      "nim": "V3720026",
      "jurusan": "D-3 Farmasi",
      "email": "fitriliarach@student.uns.ac.id"
    },
    {
      "name": "Friska Ayu Vidya Ningsih",
      "nim": "M3519022",
      "jurusan": "D-3 Farmasi",
      "email": "friskaayu@student.uns.ac.id"
    },
    {
      "name": "HAIGA SOPHIA GUNAWAN",
      "nim": "V3720027",
      "jurusan": "D-3 Farmasi",
      "email": "sophiagunawan@student.uns.ac.id"
    },
    {
      "name": "Intan Muslimah",
      "nim": "V3720029",
      "jurusan": "D-3 Farmasi",
      "email": "intanmus@student.uns.ac.id"
    },
    {
      "name": "Isnaini Muslikah",
      "nim": "M3519028",
      "jurusan": "D-3 Farmasi",
      "email": "isnainimuslikah0925@student.uns.ac.id"
    },
    {
      "name": "Izzah Al Azizah",
      "nim": "M3518029",
      "jurusan": "D-3 Farmasi",
      "email": "izzahdirya411@student.uns.ac.id"
    },
    {
      "name": "Kamila",
      "nim": "V3720031",
      "jurusan": "D-3 Farmasi",
      "email": "kamila_kim@student.uns.ac.id"
    },
    {
      "name": "Khofsatul Maryam",
      "nim": "M3519030",
      "jurusan": "D-3 Farmasi",
      "email": "khofsatulmaryam@student.uns.ac.id"
    },
    {
      "name": "Khonifiah Dhiyaul Haq",
      "nim": "V3720032",
      "jurusan": "D-3 Farmasi",
      "email": "khonifiahdehaq@student.uns.ac.id"
    },
    {
      "name": "Lathifa Nur Annisa",
      "nim": "V3720033",
      "jurusan": "D-3 Farmasi",
      "email": "Lathifanurannisa08@student.uns.ac.id"
    },
    {
      "name": "Lathifa Salmaa Nurlaili",
      "nim": "V3720034",
      "jurusan": "D-3 Farmasi",
      "email": "nlathifasalmaa@student.uns.ac.id"
    },
    {
      "name": "Lia Kurnianingsih",
      "nim": "M3519032",
      "jurusan": "D-3 Farmasi",
      "email": "liakurnianingsih@student.uns.ac.id"
    },
    {
      "name": "Luthfia Mar'atushsholihah",
      "nim": "V3720035",
      "jurusan": "D-3 Farmasi",
      "email": "Luthfiayaya18@student.uns.ac.id"
    },
    {
      "name": "Mara mita budianti",
      "nim": "M3518034",
      "jurusan": "D-3 Farmasi",
      "email": "maramita720@student.uns.ac.id"
    },
    {
      "name": "Maulidya Ummu Nafissa",
      "nim": "M3519033",
      "jurusan": "D-3 Farmasi",
      "email": "maulidyaully@student.uns.ac.id"
    },
    {
      "name": "Melina Rahmasari",
      "nim": "M3519036",
      "jurusan": "D-3 Farmasi",
      "email": "melina_513@student.uns.ac.id"
    },
    {
      "name": "MIFTAHUR RAHMATUL ULA",
      "nim": "M3519038",
      "jurusan": "D-3 Farmasi",
      "email": "miftahurrahmatul21@student.uns.ac.id"
    },
    {
      "name": "Nabilla Izza Atika",
      "nim": "V3720037",
      "jurusan": "D-3 Farmasi",
      "email": "nabillaizza@student.uns.ac.id"
    },
    {
      "name": "Nastiti Laksmi Pramesti",
      "nim": "M3519042",
      "jurusan": "D-3 Farmasi",
      "email": "laksminastiti@student.uns.ac.id"
    },
    {
      "name": "Natasya Jalinta Nur Syahbani",
      "nim": "V3720039",
      "jurusan": "D-3 Farmasi",
      "email": "natasyajalinta@student.uns.ac.id"
    },
    {
      "name": "Niken mela saputri",
      "nim": "M3519043",
      "jurusan": "D-3 Farmasi",
      "email": "Nikenmelasaputri@student.uns.ac.id"
    },
    {
      "name": "Nirwana Asri Diah Bitaloka",
      "nim": "V3720040",
      "jurusan": "D-3 Farmasi",
      "email": "nirwanaasri26@student.uns.ac.id"
    },
    {
      "name": "Nisa Anikmah",
      "nim": "V3720041",
      "jurusan": "D-3 Farmasi",
      "email": "nisaanikmah@student.uns.ac.id"
    },
    {
      "name": "Oktaviana",
      "nim": "V3720043",
      "jurusan": "D-3 Farmasi",
      "email": "oktaviana17@student.uns.ac.id"
    },
    {
      "name": "Pradita Anjani Putri",
      "nim": "V3720044",
      "jurusan": "D-3 Farmasi",
      "email": "Praditaputri238@student.uns.ac.id"
    },
    {
      "name": "Putri Alissya Nazwadiha",
      "nim": "V3720045",
      "jurusan": "D-3 Farmasi",
      "email": "alissya509@student.uns.ac.id"
    },
    {
      "name": "Qonita Nur Fadhila",
      "nim": "V3720046",
      "jurusan": "D-3 Farmasi",
      "email": "Fadhilaqonita27@gmail.com"
    },
    {
      "name": "Radhika Sukma Putri",
      "nim": "V3720047",
      "jurusan": "D-3 Farmasi",
      "email": "radhikasp77@student.uns.ac.id"
    },
    {
      "name": "Rahma Nur Fitriana",
      "nim": "V3720048",
      "jurusan": "D-3 Farmasi",
      "email": "rahmanurfitria18@student.uns.ac.id"
    },
    {
      "name": "Rahma Sekar Larasati",
      "nim": "M3519052",
      "jurusan": "D-3 Farmasi",
      "email": "sekarlarasati59@student.uns.ac.id"
    },
    {
      "name": "Rahmawati Kurnianingsih",
      "nim": "V3720049",
      "jurusan": "D-3 Farmasi",
      "email": "rahmakn.54@student.uns.ac.id"
    },
    {
      "name": "Rini Setyowati",
      "nim": "M3518043",
      "jurusan": "D-3 Farmasi",
      "email": "rinisetyowati25042@student.uns.ac.id"
    },
    {
      "name": "Risma Insyafani",
      "nim": "V3720050",
      "jurusan": "D-3 Farmasi",
      "email": "risinsyafani@student.uns.ac.id"
    },
    {
      "name": "Riza Aulia Ratna Dela",
      "nim": "M3519054",
      "jurusan": "D-3 Farmasi",
      "email": "rizaauliaratnadela20102001@student.uns.ac.id"
    },
    {
      "name": "Rizki Baiti",
      "nim": "M3518045",
      "jurusan": "D-3 Farmasi",
      "email": "rizkibaiti6@student.uns.ac.id"
    },
    {
      "name": "Rizki Utami",
      "nim": "V3720051",
      "jurusan": "D-3 Farmasi",
      "email": "rizkiutami351@student.uns.ac.id"
    },
    {
      "name": "Safira Salsabila",
      "nim": "V3720052",
      "jurusan": "D-3 Farmasi",
      "email": "slssafira@student.uns.ac.id"
    },
    {
      "name": "Salsabila Nanda Fatiha",
      "nim": "M3519055",
      "jurusan": "D-3 Farmasi",
      "email": "salsabilananda577@student.uns.ac.id"
    },
    {
      "name": "Salsabila Riska Amelia",
      "nim": "V3720053",
      "jurusan": "D-3 Farmasi",
      "email": "salsabilariskaamelia@student.uns.ac.id"
    },
    {
      "name": "Samrotul Jannah",
      "nim": "V3720054",
      "jurusan": "D-3 Farmasi",
      "email": "samrotuljannah02@student.uns.ac.id"
    },
    {
      "name": "Sandhi Hanugraheni",
      "nim": "V3720055",
      "jurusan": "D-3 Farmasi",
      "email": "sandhi.hanugra@student.uns.ac.id"
    },
    {
      "name": "Sandra Dwi Fantika",
      "nim": "V3720056",
      "jurusan": "D-3 Farmasi",
      "email": "sandradwifantika@student.uns.ac.id"
    },
    {
      "name": "Sherly Agustina Wulandari",
      "nim": "V3720057",
      "jurusan": "D-3 Farmasi",
      "email": "sherly.agustina14@student.uns.ac.id"
    },
    {
      "name": "SITI NURKHASANAH",
      "nim": "V3720058",
      "jurusan": "D-3 Farmasi",
      "email": "nurkhasanahs536@student.uns.ac.id"
    },
    {
      "name": "Talitha Oksi Veraningrum Isnarko",
      "nim": "M3518051",
      "jurusan": "D-3 Farmasi",
      "email": "talithaoksi@student.uns.ac.id"
    },
    {
      "name": "Tamila Fitriani",
      "nim": "V3720060",
      "jurusan": "D-3 Farmasi",
      "email": "tamilafitriani24@student.uns.ac.id"
    },
    {
      "name": "Tharisa Putri Mayangsari",
      "nim": "V3720062",
      "jurusan": "D-3 Farmasi",
      "email": "tharisapm@student.uns.ac.id"
    },
    {
      "name": "Untsa Azifaturrohmah",
      "nim": "V3720063",
      "jurusan": "D-3 Farmasi",
      "email": "rohmahuntsa@student.uns.ac.id"
    },
    {
      "name": "Wahyu Triwidiyastuti",
      "nim": "M3519060",
      "jurusan": "D-3 Farmasi",
      "email": "wahyutriwidiyastuti@student.uns.ac.id"
    },
    {
      "name": "Wanda Putri Ardhani",
      "nim": "V3720064",
      "jurusan": "D-3 Farmasi",
      "email": "wandaputria131@student.uns.ac.id"
    },
    {
      "name": "Woro Dwi Istupathonah",
      "nim": "V3720067",
      "jurusan": "D-3 Farmasi",
      "email": "worodwiistupathonah@student.uns.ac.id"
    },
    {
      "name": "Yavi Hanuriansyah",
      "nim": "V3720065",
      "jurusan": "D-3 Farmasi",
      "email": "yavihanuriansyah@student.uns.ac.id"
    },
    {
      "name": "Yosef Calasanza Chrisna Pradana",
      "nim": "M3518056",
      "jurusan": "D-3 Farmasi",
      "email": "yosef_chrisna@student.uns.ac.id"
    },
    {
      "name": "Yunnisa Sholikah",
      "nim": "M3518057",
      "jurusan": "D-3 Farmasi",
      "email": "yunnisasholikah2006@student.uns.ac.id"
    },
    {
      "name": "Ade Mafa Raliassyifa",
      "nim": "E3119001",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ademafa241@student.uns.ac.id"
    },
    {
      "name": "Adellya Friscaningsih",
      "nim": "E3120002",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "adellyafrisca25@student.uns.ac.id"
    },
    {
      "name": "Adinda Febriana Sudarsono",
      "nim": "E3118001",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "adindafebrianass@student.uns.ac.id"
    },
    {
      "name": "Aditya Wahyu Pradana",
      "nim": "E3117005",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "adityawhy@student.uns.ac.id"
    },
    {
      "name": "AFIKA RIZQI KARUNIA",
      "nim": "E3118004",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "afikarizqikarunia@student.uns.ac.id"
    },
    {
      "name": "Agmalia Fiqa Maharani",
      "nim": "E3118006",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "agmaliafikam.99@gmail.com"
    },
    {
      "name": "aisyah nur nastiti",
      "nim": "E3117009",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "aisyahnurnastiti@student.uns.ac.id"
    },
    {
      "name": "Alan Aji Wicaksana",
      "nim": "E3119084",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "muhalanaji@student.uns.ac.id"
    },
    {
      "name": "Aldora Diasayu R",
      "nim": "E3118008",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "aldoradiasayu@student.uns.ac.id"
    },
    {
      "name": "ALFANDI YOGA PRIHADIYANTO",
      "nim": "E3118009",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "alfandiyoga1@student.uns.ac.id"
    },
    {
      "name": "Alfayza Sabila Putri Pratama",
      "nim": "E3120011",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "alfayzasabila@student.uns.ac.id"
    },
    {
      "name": "Alfi Nisa Latifah",
      "nim": "E3120012",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "alfinisalatifah@student.uns.ac.id"
    },
    {
      "name": "Aliffa Dadi Noer Chadidja Irwanto",
      "nim": "E3118014",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "aliffa23@student.uns.ac.id"
    },
    {
      "name": "Aliffah Novotasari",
      "nim": "E3120013",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "novitaaliffah@student.uns.ac.id"
    },
    {
      "name": "Amanda Putri Ana",
      "nim": "E3120016",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "anaamanda531@student.uns.ac.id"
    },
    {
      "name": "Amara Husna Yonda",
      "nim": "E3118017",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "amarahusna@student.uns.ac.id"
    },
    {
      "name": "Anandhany Chris Setyowati",
      "nim": "E3119011",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "andincss@student.uns.ac.id"
    },
    {
      "name": "Andhika Nurul Fajaryanti",
      "nim": "E3117018",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "andhikanurulfajaryanti@student.uns.ac.id"
    },
    {
      "name": "Anggie Septiana Aulia Mawarani",
      "nim": "E3118019",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "anggieseptiana@student.uns.ac.id"
    },
    {
      "name": "Anggita Davitalia",
      "nim": "E3120018",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "adgit60@gmail.com"
    },
    {
      "name": "Anis Putri Utami",
      "nim": "E3120020",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "anisputriutami@student.uns.ac.id"
    },
    {
      "name": "Anis Syahdia Kesuma",
      "nim": "E3118022",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "anissyahdia4@student.uns.ac.id"
    },
    {
      "name": "Anisa Yulistina",
      "nim": "E3120021",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "anisayulistina@student.uns.ac.id"
    },
    {
      "name": "Apriliana Nor Pratama",
      "nim": "E3118027",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Apriliananor@student.uns.ac.id"
    },
    {
      "name": "Arfemisantya Yoana Ramadhani",
      "nim": "E3118029",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Arfemyyoana@student.uns.ac.id"
    },
    {
      "name": "Arief Wibowo",
      "nim": "E3117028",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "arfwibowo@student.uns.ac.id"
    },
    {
      "name": "Aulia Nurul Khasanah",
      "nim": "E3120030",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "aulianurul@student.uns.ac.id"
    },
    {
      "name": "Baruch Neipa Virtue El Maahi",
      "nim": "E3118036",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "elmaahi2508@student.uns.ac.id"
    },
    {
      "name": "Brigita Davina Patrycia",
      "nim": "E3120042",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "brigitadavina@student.uns.ac.id"
    },
    {
      "name": "Cantika Aprodhita Permatasari",
      "nim": "E3120044",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "cantikaapr@student.uns.ac.id"
    },
    {
      "name": "Chania Dwi Nikmah",
      "nim": "E3120045",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "chaniadwik25@student.uns.ac.id"
    },
    {
      "name": "Chintya Anggraeni",
      "nim": "E3120047",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "chintyaanggraeni@student.uns.ac.id"
    },
    {
      "name": "Cindi perena",
      "nim": "E3117034",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "cipen_01@student.uns.ac.id"
    },
    {
      "name": "Dayinta Anindya Salsabila",
      "nim": "E3118043",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "dayintaa5@student.uns.ac.id"
    },
    {
      "name": "Dessy Latifatul Laila",
      "nim": "E3118044",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "dessylailaa@student.uns.ac.id"
    },
    {
      "name": "Dhea Fadila Azari",
      "nim": "E3118046",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Dheafadila93@student.uns.ac.id"
    },
    {
      "name": "Dhea fitri setya",
      "nim": "E3118047",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Dheafsd.27@student.uns.ac.id"
    },
    {
      "name": "Dian Desy Rahmadhani",
      "nim": "E3119039",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "diandrahmadhani@student.uns.ac.id"
    },
    {
      "name": "Ellen Laras Ati",
      "nim": "E3118055",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ellenlaras@student.uns.ac.id"
    },
    {
      "name": "Elvina Sri Andayani",
      "nim": "E3119050",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "elvinasa351@student.uns.ac.id"
    },
    {
      "name": "Endah Ayu Pramesti",
      "nim": "E3120060",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "endahayupramesti@student.uns.ac.id"
    },
    {
      "name": "Evita Cahyani Putri",
      "nim": "E3118058",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "evitacahyani0208@student.uns.ac.id"
    },
    {
      "name": "Faiza Nirmala Kusnawati",
      "nim": "E3120063",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "faizanirmala@student.uns.ac.id"
    },
    {
      "name": "Farras Nalakarti Kirana",
      "nim": "E3120065",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "farrasnalakartik@student.uns.ac.id"
    },
    {
      "name": "Fiany Titisari Mahadewi",
      "nim": "E3120069",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "fianytitisari@student.uns.ac.id"
    },
    {
      "name": "FIONA DEVI AGUSTINA",
      "nim": "E3119056",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "fiona_devia.22@student.uns.ac.id"
    },
    {
      "name": "Fista Arzeti Bilbina Huzaeni",
      "nim": "E3120070",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "fistaarzeti@student.uns.ac.id"
    },
    {
      "name": "Frillasya Ais Sholeha",
      "nim": "E3118066",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "frillasyaais@student.uns.ac.id"
    },
    {
      "name": "Gading putro wahyudi",
      "nim": "E3117054",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "gadingputro30@student.uns.ac.id"
    },
    {
      "name": "Gian Syahputra",
      "nim": "E3119061",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "giansyahputra@student.uns.ac.id"
    },
    {
      "name": "Gustaf Ardiansyah",
      "nim": "E3117055",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "gustaf.ardiansyah@student.uns.ac.id"
    },
    {
      "name": "HAFIZHAH OKTAVIANA SALWA",
      "nim": "E3118069",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "hafizhahsalwa@student.uns.ac.id"
    },
    {
      "name": "Hasna’ Nur Afifah",
      "nim": "E3118073",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "hsnanraffah@student.uns.ac.id"
    },
    {
      "name": "Henita Cahya Febriyanti",
      "nim": "E3119063",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "henita.cahyafebri07@student.uns.ac.id"
    },
    {
      "name": "Hikaru Wika Ramadhanty",
      "nim": "E3118075",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "hikaruwika@student.uns.ac.id"
    },
    {
      "name": "Ilham Dwi Cahyo",
      "nim": "E3119068",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ilhamdwicahyo10@student.uns.ac.id"
    },
    {
      "name": "Indar Dwi Mawanti",
      "nim": "E3118077",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "indardwimawanti@student.uns.ac.id"
    },
    {
      "name": "Intan Assholeha Prajaningrum",
      "nim": "E3118078",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Intanape2000@student.uns.ac.id"
    },
    {
      "name": "Intan Septiana Nur Anggraeni",
      "nim": "E3117063",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "intanseptianana@student.uns.ac.id"
    },
    {
      "name": "Iqbal Adi Handoko",
      "nim": "E3118079",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "iqbal123@student.uns.ac.id"
    },
    {
      "name": "Ivan Pramandito Surya Adi",
      "nim": "E3119070",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ivanpramandito1@student.uns.ac.id"
    },
    {
      "name": "KHARISMA VITRIA HANDAYANI",
      "nim": "E3120089",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "kharisma_vitria20@student.uns.ac.id"
    },
    {
      "name": "Kholida Lathifatus Sulkha",
      "nim": "E3118086",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "kholidalathifa@student.uns.ac.id"
    },
    {
      "name": "Kuni aulia sofie",
      "nim": "E3119073",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Sofiesofie21aulia@student.uns.ac.id"
    },
    {
      "name": "Kurnia Putri sejati",
      "nim": "E3117068",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "putrisejati@student.uns.ac.id"
    },
    {
      "name": "Lutfanida Aslim A",
      "nim": "E3118090",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "lutfanidaslim11@student.uns.ac.id"
    },
    {
      "name": "Marsono Rafid Daffa Asyo",
      "nim": "E3119080",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "sonuasyo@student.uns.ac.id"
    },
    {
      "name": "MAULIHA ALIFATIN EKA WARDHANI",
      "nim": "E3118093",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "alifatin@student.uns.ac.id"
    },
    {
      "name": "Mayada Patris Tomu",
      "nim": "E3120097",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "mayadapatris@student.ac.id"
    },
    {
      "name": "Mayla Luluk Nuriana",
      "nim": "E3120178",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "lulukmayla@student.uns.ac.id"
    },
    {
      "name": "Muhammad Anas Ridho",
      "nim": "E3118100",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Muh.anas@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hilal Al Ghofari",
      "nim": "E3118102",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "hilal25ghofari@student.uns.ac.id"
    },
    {
      "name": "Muhammad Iqbal Maulana Utama",
      "nim": "E3118104",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "maumaulana99@student.uns.ac.id"
    },
    {
      "name": "Muhammad Irfan Maulana",
      "nim": "E3117082",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "mim@student.uns.ac.id"
    },
    {
      "name": "Muhammad Irham Julian Pitoyo",
      "nim": "E3118105",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "irhamjulian8@student.uns.ac.id"
    },
    {
      "name": "Muhammad rafi wira kusuma",
      "nim": "E3117083",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rafiwira489@yahoo.com"
    },
    {
      "name": "Muthi'ah Nurul Haq",
      "nim": "E3119087",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Muthiahnurulhaq_04@student.uns.ac.id"
    },
    {
      "name": "Nadia Aristawidya Indrasara",
      "nim": "E3118108",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nadiaaristawidyai@student.uns.ac.id"
    },
    {
      "name": "Nadila Salsabila",
      "nim": "E3119089",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nadilasalsabila@student.uns.ac.id"
    },
    {
      "name": "Nanda Rahmat Dafani",
      "nim": "E3120109",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nandarahmatdafani@student.uns.ac.id"
    },
    {
      "name": "Nathalia Kartika Dewi Wahyu Kusumaningtyas",
      "nim": "E3120111",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Nathaliayu@student.uns.ac.id"
    },
    {
      "name": "Nindya Amelya Putri",
      "nim": "E3119094",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nindya14@student.uns.ac.id"
    },
    {
      "name": "Nindya Parameswari",
      "nim": "E3120113",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nindyaparameswari@student.uns.ac.id"
    },
    {
      "name": "Nisa Azzahra",
      "nim": "E3120114",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nisaazzahra@student.uns.ac.id"
    },
    {
      "name": "Nisrina Afifah Ikbar",
      "nim": "E3120115",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nisrinaafifah12@student.uns.ac.id"
    },
    {
      "name": "Novita Anggraini",
      "nim": "E3117091",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "novitaanggraini0506@student.uns.ac.id"
    },
    {
      "name": "Nurfaida Edrianti",
      "nim": "E3118114",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nurfaidaedrianti@student.uns.ac.id"
    },
    {
      "name": "Nurul Afifah Pradiva",
      "nim": "E3119101",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "afifahnurul225@student.uns.ac.id"
    },
    {
      "name": "Nurul Alfiyah",
      "nim": "E3119102",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "nurulalfiyah19@student.uns.ac.id"
    },
    {
      "name": "Oki Raharja Putukane",
      "nim": "E3118115",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "oraharja@student.uns.ac.id"
    },
    {
      "name": "Putri Aristawati Sa'diyah",
      "nim": "E3120121",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "diyah1aristawati@student.uns.ac.id"
    },
    {
      "name": "Putri Kusumastuti",
      "nim": "E3119107",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Putrikusumastuti1@student.uns.ac.id"
    },
    {
      "name": "Rafli Exel Rosydi",
      "nim": "E3118119",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rafliexel@student.uns.ac.id"
    },
    {
      "name": "Rahma Istiqomah",
      "nim": "E3119108",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rahmaistiqomah@student.uns.ac.id"
    },
    {
      "name": "Rani Kusumawardani",
      "nim": "E3119109",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ranikusuma7@student.uns.ac.id"
    },
    {
      "name": "Rawat Aji Ludira",
      "nim": "E3120126",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rara.ludira02@student.uns.ac.id"
    },
    {
      "name": "Resananda",
      "nim": "E3119110",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "resananda.jr@gmail.com"
    },
    {
      "name": "Revika Dwi Febri Puspitasari",
      "nim": "E3118127",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "revikafebri9@student.uns.ac.id"
    },
    {
      "name": "Rezki Daffa Abiyasa",
      "nim": "E3118128",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "daffabiyasa@student.uns.ac.id"
    },
    {
      "name": "Rian Dika",
      "nim": "E3119114",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rian.dika3rd@student.uns.ac.id"
    },
    {
      "name": "Ridwan Efendi",
      "nim": "E3119116",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ridwanefendi782@student.uns.ac.id"
    },
    {
      "name": "Rifta Arini Mayang Fauni",
      "nim": "E3117098",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "riftamayang@student.uns.ac.id"
    },
    {
      "name": "Risa Nur Afifah",
      "nim": "E3118131",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "risanafifah@student.uns.ac.id"
    },
    {
      "name": "Rismania Suci Ramadhanti",
      "nim": "E3119121",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Rismaniasuci.r@student.uns.ac.id"
    },
    {
      "name": "Riyan Pandu Nugroho",
      "nim": "E3120133",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "riyanpandu@student.uns.ac.id"
    },
    {
      "name": "Riyan Prastyo Usodo",
      "nim": "E3117103",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ryan.prst916@student.uns.ac.id"
    },
    {
      "name": "Rofiq Syarifuddin",
      "nim": "E3118133",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rofiq859@student.uns.ac.id"
    },
    {
      "name": "Rohmad Nugroho",
      "nim": "E3118134",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rohmad.nugroho@student.uns.ac.id"
    },
    {
      "name": "Rosid Setiyaji",
      "nim": "E3118135",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "rosidsetiyaji@student.uns.ac.id"
    },
    {
      "name": "Ruhil Anadiah Sabrina",
      "nim": "E3118137",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "ruhilsabrina24@student.uns.ac.id"
    },
    {
      "name": "Safira Rakhma Hidayah",
      "nim": "E3118138",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "safirarakhma4@student.uns.ac.id"
    },
    {
      "name": "Sahid Rais Pratama",
      "nim": "E3118139",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "sahid_rais.15@student.uns.ac.id"
    },
    {
      "name": "Salsa Novia RRP",
      "nim": "E3118140",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "salsarrp2811@student.uns.ac.id"
    },
    {
      "name": "Salvia Pamela Felita Anaskhy",
      "nim": "E3117108",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "salviapamela47@student.uns.ac.id"
    },
    {
      "name": "Sandra Devi Yussina Supriyanto",
      "nim": "E3119129",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yussinasandra@student.uns.ac.id"
    },
    {
      "name": "Sekar Sasmi Mellinia Loka",
      "nim": "E3117110",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "mellinialoka30@student.uns.ac.id"
    },
    {
      "name": "Silvanda Elia Kumala",
      "nim": "E3118141",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "silvandalia@student.uns.ac.id"
    },
    {
      "name": "Sukma Mustika Zam Zam",
      "nim": "E3118142",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "sukmamzamzam@student.uns.ac.id"
    },
    {
      "name": "Surya Bintang Alam",
      "nim": "E3120151",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "suryabintang@student.uns.ac.id"
    },
    {
      "name": "Tarisha Alafin",
      "nim": "E3120153",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "tarishaalafin@student.uns.ac.id"
    },
    {
      "name": "Tiara Pranandita A",
      "nim": "E3120154",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "tiarapranandita@student.uns.ac.id"
    },
    {
      "name": "Tishlahatul Ulya MF",
      "nim": "E3117120",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "Tish_ulya@student.uns.ac.id"
    },
    {
      "name": "Umi Khasanah",
      "nim": "E3120155",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "umikhasanah10@student.uns.ac.id"
    },
    {
      "name": "Via laili kurnia sari",
      "nim": "E3120158",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "vialks55@student.uns.ac.id"
    },
    {
      "name": "Vina Reggata Nur Khasanah",
      "nim": "E3119143",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "vinareggatankh@student.uns.ac.id"
    },
    {
      "name": "Vonny Austrin Al Nafsi",
      "nim": "E3120160",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "vonnyaustrin@student.uns.ac.id"
    },
    {
      "name": "Wahdania Misbakhul Lail",
      "nim": "E3117130",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "wahdanialail@student.uns.ac.id"
    },
    {
      "name": "Yazhinta Veny",
      "nim": "E3120163",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yazhintaaa@student.ac.id"
    },
    {
      "name": "Yosephina Nanda Putri. H",
      "nim": "E3120164",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yosephinanph@student.uns.ac.id"
    },
    {
      "name": "Yulfrida Indriani Inaya",
      "nim": "E3118152",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yulfridaindriani10@student.uns.ac.id"
    },
    {
      "name": "Yuliana tri hidayati",
      "nim": "E3118153",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yulianatrih@student.uns.ac.id"
    },
    {
      "name": "Yustirama Trilaksito Raharjo",
      "nim": "E3117136",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "yustirama@student.uns.ac.id"
    },
    {
      "name": "Zuriyah Evi Rahmawati",
      "nim": "E3117141",
      "jurusan": "D-4 Demografi dan Pencatatan Sipil",
      "email": "zuriyahevi@student.uns.ac.id"
    },
    {
      "name": "Alfiyya Putri Azzahra",
      "nim": "H3118007",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "alfiyyapp@student.uns.ac.id"
    },
    {
      "name": "Aroma Candra Citra",
      "nim": "H3118010",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "aromacitra@student.uns.ac.id"
    },
    {
      "name": "Cindy Oktaviani Widyaningrum",
      "nim": "H3118013",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "oktavianycindy@student.uns.ac.id"
    },
    {
      "name": "DEA AISYAH NINGTYAS",
      "nim": "V1820018",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "deaaisyahningtyas@student.uns.ac.id"
    },
    {
      "name": "Devynda Rizka Juniar",
      "nim": "V1820020",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "devyndarizkajuniar@student.uns.ac.id"
    },
    {
      "name": "Diny Sulistyani",
      "nim": "V1820023",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "dinysulistyani@student.uns.ac.id"
    },
    {
      "name": "Dita Nurul Lestari",
      "nim": "V1820024",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "ditanurul25@student.uns.ac.id"
    },
    {
      "name": "Fitri Nurul Hidayah",
      "nim": "V1820034",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "Fitrinurul129@student.uns.ac.id"
    },
    {
      "name": "Gymnastiar Al Ghifari",
      "nim": "V1820036",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "gymnastiaralghifari@student.uns.ac.id"
    },
    {
      "name": "Hani Nur Azizah",
      "nim": "H3119025",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "haninurazizah1@student.uns.ac.id"
    },
    {
      "name": "Intan Meylia Permatasari",
      "nim": "V1820045",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "intanmp@student.uns.ac.id"
    },
    {
      "name": "Jesika Tria Ananda",
      "nim": "H3118035",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "jesikananda57@student.uns.ac.id"
    },
    {
      "name": "Karima Kamilatul Bana",
      "nim": "V1820049",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "karimakamilatul@student.uns.ac.id"
    },
    {
      "name": "Kevin Adi Prasetyo",
      "nim": "H3119032",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "kevinadip123@student.uns.ac.id"
    },
    {
      "name": "Laila Nabilah",
      "nim": "V1820050",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "lailanabilah@student.uns.ac.id"
    },
    {
      "name": "Luthfiyah",
      "nim": "H3119038",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "luthfi.13@student.uns.ac.id"
    },
    {
      "name": "Nindita Mega Royani",
      "nim": "V1820067",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "ninditamega@student.uns.ac.id"
    },
    {
      "name": "Rania Safitri",
      "nim": "H3118062",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "raniasafitri@student.uns.ac.id"
    },
    {
      "name": "Rania Salma Kaliesmala",
      "nim": "H3119050",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "raniaa.k@student.uns.ac.id"
    },
    {
      "name": "Ratih Nur Shadrina",
      "nim": "H3118064",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "ratihnur24@student.uns.ac.id"
    },
    {
      "name": "Silviana Nuri Widayanti",
      "nim": "V1820084",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "silviananuriw@student.uns.ac.id"
    },
    {
      "name": "Yusnaini Fitrie Nur Azizah",
      "nim": "H3118079",
      "jurusan": "D-3 Teknologi Hasil Pertanian",
      "email": "yusnainifitrie@student.uns.ac.id"
    },
    {
      "name": "Abetnego Awang Octa Fatoni",
      "nim": "V0320001",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "abetnegoaof@student.uns.ac.id"
    },
    {
      "name": "Ahmadi Budi Utomo",
      "nim": "C9518005",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ahmadibudiutomo@student.uns.ac.id"
    },
    {
      "name": "alief putri p j",
      "nim": "C9518008",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "aliefputripj.libra22@student.uns.ac.id"
    },
    {
      "name": "Aulia Miftakhul Qisti",
      "nim": "V0320004",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "aulspensa@student.uns.ac.id"
    },
    {
      "name": "Aulia Widya Cahyaningrum",
      "nim": "V0320005",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "auliawidyac@student.uns.ac.id"
    },
    {
      "name": "Aura Maharani Azzahra",
      "nim": "V0320006",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "Auraazzahra0007"
    },
    {
      "name": "Ayu Puspitasari",
      "nim": "V0320007",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ayuk16.ap@student.uns.ac.id"
    },
    {
      "name": "Bintang Novian Utomo",
      "nim": "V0320010",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "bintangnovian@student.uns.ac.id"
    },
    {
      "name": "Calvin Izumi",
      "nim": "C9519011",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "cizumi17@student.uns.ac.id"
    },
    {
      "name": "DAMAR AGUNG PRASETIYO",
      "nim": "V0320014",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "damar.29@student.uns.ac.id"
    },
    {
      "name": "DEFITRIA NURVANDA SARI",
      "nim": "V0320015",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "defitria12@student.uns.ac.id"
    },
    {
      "name": "Devina Zulfa Anisa Fitri",
      "nim": "V0320016",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "devinazaf4@student.uns.ac.id"
    },
    {
      "name": "Dhea Sekar Ratri",
      "nim": "V0320017",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "dheasekarr.uns.ac.id@student.ums.ac.id"
    },
    {
      "name": "Dhiya Daffa Ulhaq",
      "nim": "V0320018",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "dhiyadaffaulhaq.135@student.uns.ac.id"
    },
    {
      "name": "Diana Pramesti Prabandari",
      "nim": "V0320019",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "dianapramesti.p@student.uns.ac.id"
    },
    {
      "name": "Diva Ameilia Ariyanti",
      "nim": "V0320021",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "divaameiliaa@student.uns.ac.id"
    },
    {
      "name": "Estu Sekar Pertiwi",
      "nim": "V0320022",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "estu.sekarpertiwi@student.uns.ac.id"
    },
    {
      "name": "Eva Haya nabila Fauziah",
      "nim": "V0320023",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "Fafanabila48@student.uns.ac.id"
    },
    {
      "name": "Faza Steranika",
      "nim": "V0320024",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "fazasteranika@student.uns.ac.id"
    },
    {
      "name": "Febri Cahyadi",
      "nim": "V0320025",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "cahyadifeb@student.uns.ac.id"
    },
    {
      "name": "Firman Adin",
      "nim": "V0320026",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "firmanadin"
    },
    {
      "name": "Fitri Nur Hasanah",
      "nim": "C9519025",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "fhasanah340@student.uns.ac.id"
    },
    {
      "name": "Frenky Liung",
      "nim": "V0320027",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "frenkyliung_88@student.uns.ac.id"
    },
    {
      "name": "Gayuh Mahardika",
      "nim": "V0320028",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "gayuhmahardika17@student.uns.ac.id"
    },
    {
      "name": "Gendis Sekar Ayu Prameswari",
      "nim": "V0320029",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "gendissekar7@student.uns.ac.id"
    },
    {
      "name": "Ghani Affan Fersada",
      "nim": "V0320030",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ghaniaffan24@student.uns.ac.id"
    },
    {
      "name": "Ghifari Elan Semesta",
      "nim": "V0320031",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ghifari_47.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Hani Fajri Widyantari",
      "nim": "C9518022",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "hanifajri55.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Ifantias Ruliyanto",
      "nim": "V0320033",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ifantiasruliyanto@student.uns.ac.id"
    },
    {
      "name": "Irma Octaviani",
      "nim": "V0320036",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "irmaoctaviani02_i@student.uns.ac.id"
    },
    {
      "name": "Irna Ardiningrum Al Akyas",
      "nim": "V0320037",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "irnaardiningrum@student.uns.ac.id"
    },
    {
      "name": "Jesslyn Dwitiya Lestari Iswanto",
      "nim": "V0320039",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "jesslyndwitiyalestar@student.uns.ac.id"
    },
    {
      "name": "Latif Arul Kurnia",
      "nim": "V0320041",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "latif.ak47.uns.ac.id@student.uns.ac.id"
    },
    {
      "name": "Lutfi Dwi Firmansyah",
      "nim": "V0320042",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "flutfidwi17@student.uns.ac.id"
    },
    {
      "name": "Melita Fathonawati",
      "nim": "V0320043",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "melitafathonawati@student.uns.ac.id"
    },
    {
      "name": "Mikha Suryo Putri",
      "nim": "V0320044",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "mikhasp@student.uns.ac.id"
    },
    {
      "name": "Mohammad Dani Farhan",
      "nim": "V0320045",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "mdanifarhan@student.uns.ac.id"
    },
    {
      "name": "Muhammad Farhan Mubarak",
      "nim": "C9519038",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "farhanm@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ilham Al Basyari",
      "nim": "V0320046",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "ilhamalbas@student.uns.ac.id"
    },
    {
      "name": "Muhammad Kahfi Harahap",
      "nim": "V0320047",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "MuhammadKahfi@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rafid Ashiroth",
      "nim": "V0320048",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "rafidxztraddha4@student.uns.ac.id"
    },
    {
      "name": "Muhammad Syahrul Ramadhani",
      "nim": "V0320049",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "syahrulmuhammad3121@student.uns.ac.id"
    },
    {
      "name": "Mustofa Agus Tri Utomo",
      "nim": "C9518030",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "triutomomustofaagus@student.uns.ac.id"
    },
    {
      "name": "Nadya Yoga Pratiwi",
      "nim": "C9519042",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "nadyayogayoga@student.uns.ac.id"
    },
    {
      "name": "NUR VATONI",
      "nim": "V0320050",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "vatonni@student.uns.ac.id"
    },
    {
      "name": "Queena Chandra Alya Wibowo",
      "nim": "V0320051",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "queenaca2806@student.uns.ac.id"
    },
    {
      "name": "Raida Salsabila Oktavia",
      "nim": "V0320052",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "raidasalsabila@student.uns.ac.id"
    },
    {
      "name": "Raisya Nurdina",
      "nim": "V0320053",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "raisyanurdina@student.uns.ac.id"
    },
    {
      "name": "RETNO PALUPI",
      "nim": "V0320054",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "Pipipalupi20@student.una.co.id"
    },
    {
      "name": "Ria Irawati",
      "nim": "C9519051",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "riairawati_32@student.uns.ac.id"
    },
    {
      "name": "Safira Nisa Hasnia",
      "nim": "C9519053",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "safiranisahasnia@student.uns.ac.id"
    },
    {
      "name": "Salsabila Talitha Ari Qurotu'ain",
      "nim": "V0320056",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "salsabila24@student.uns.ac.id"
    },
    {
      "name": "Sekarningtyas B W",
      "nim": "V0320058",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "tyas_bw25@student.uns.ac.id"
    },
    {
      "name": "Shafa Hasna Ishmahnia Nugroho",
      "nim": "V0320060",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "shafahasna@student.uns.ac.id"
    },
    {
      "name": "Thilal Ghanim Gibran Warsito",
      "nim": "V0320061",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "thilalghanim@student.uns.ac.id"
    },
    {
      "name": "Vicentius Revi Arnan Putra",
      "nim": "V0320062",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "Reviputra15uns@student.uns.ac.id"
    },
    {
      "name": "Viona Savera Gunawan",
      "nim": "V0320064",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "vionasavera@student.uns.ac.id"
    },
    {
      "name": "Wahyu Kartika Taksaka Putra",
      "nim": "C9518054",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "wahjuu11@student.un.ac.id"
    },
    {
      "name": "Wahyu Putra Nugraha",
      "nim": "V0320073",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "wahyuputranugraha1@student.uns.ac.id"
    },
    {
      "name": "Yonika serli citra sari",
      "nim": "V0320066",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "yonika_serli1441@student.uns.ac.id"
    },
    {
      "name": "Yusuf Alpharezi Hardiyanto",
      "nim": "C9519059",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "yusuf29.yah@student.uns.ac.id"
    },
    {
      "name": "Zahra Altaira Aretha",
      "nim": "V0320068",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "zahraaltaira@student.uns.ac.id"
    },
    {
      "name": "ZAKI CHAIRY FADHLI",
      "nim": "V0320070",
      "jurusan": "D-3 Desain Komunikai Visual",
      "email": "zakichairyfadhli@student.uns.ac.id"
    },
    {
      "name": "Aarif Dyah Kunwinarti",
      "nim": "B3218001",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "dyahkunwinarti@student.uns.ac.id"
    },
    {
      "name": "Agnia Isni Nabila",
      "nim": "B3218002",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "agniaisninabila@student.uns.ac.id"
    },
    {
      "name": "Alfina Tiara Ayu Pratiwi",
      "nim": "V0220002",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "alfinatiara4@student.uns.ac.id"
    },
    {
      "name": "Alya Devita Ayu Nabila",
      "nim": "V0220003",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "alyadevitaayu@student.uns.ac.id"
    },
    {
      "name": "Anisa Elviana",
      "nim": "B3218008",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "aelviana43@student.uns.ac.id"
    },
    {
      "name": "Anjeline Okky Dinar Setyawati",
      "nim": "V0220006",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "anjelineokky@student.uns.ac.id"
    },
    {
      "name": "Annisa Eka Putri",
      "nim": "V0220007",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "annisaep@student.uns.ac.id"
    },
    {
      "name": "Annisau Sholihah",
      "nim": "B3218009",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "annisausholihah@student.uns.ac.id"
    },
    {
      "name": "Aqilah Asma Ulayya Purwandari",
      "nim": "B3218010",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "aqilahaup09@student.uns.ac.id"
    },
    {
      "name": "Arini Az'zahra Fitri",
      "nim": "B3218012",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "ariniazzahra12@student.uns.ac.id"
    },
    {
      "name": "Arlia Dea Fransisca",
      "nim": "V0220009",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "arliadeaf@student.uns.ac.id"
    },
    {
      "name": "Azzahra Afifawarda",
      "nim": "V0220012",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "aafifawarda@student.uns.ac.id"
    },
    {
      "name": "Desta Ade Puspita",
      "nim": "V0220015",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "destaadepuspita@student.uns.ac.id"
    },
    {
      "name": "Desta Aulia Nurul Isya",
      "nim": "V0220016",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "destaaulia31@student.uns.ac.id"
    },
    {
      "name": "Destya Aziza Saputri",
      "nim": "V0220017",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "destyaazizas@student.uns.ac.id"
    },
    {
      "name": "Diah Wulandari",
      "nim": "V0220019",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "diahwulandari167@student.uns.ac.id"
    },
    {
      "name": "Dinda Metta Okviana",
      "nim": "V0220021",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "dindametta2@student.uns.ac.id"
    },
    {
      "name": "Dinda Saraswati",
      "nim": "B3218017",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "swdinda22@student.uns.ac.id"
    },
    {
      "name": "Duta Surya Octavian",
      "nim": "V0220023",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "dutasurya750@student.uns.ac.id"
    },
    {
      "name": "Dyah Puspita Hati",
      "nim": "V0220024",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "dyahpuspitaaa33@student.uns.ac.id"
    },
    {
      "name": "Ersa Putri Yunuba Maharani",
      "nim": "B3218019",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "ersamaharani09@student.uns.ac.id"
    },
    {
      "name": "Fanda Adi Nofita",
      "nim": "B3218020",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "fandanofitaa@student.uns.ac.id"
    },
    {
      "name": "Farida Nur Kholisa",
      "nim": "B3219015",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "faridanurkholisa911@student.uns.ac.id"
    },
    {
      "name": "GRACIELA FEBBY VIDYA VINAYA",
      "nim": "V0220030",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "gracielafebby@student.uns.ac.id"
    },
    {
      "name": "Irma Erviana",
      "nim": "B3218033",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "Irmaaervna16@student.uns.ac.id"
    },
    {
      "name": "Ivo Aristya Permata",
      "nim": "B3218034",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "ivoaristya2001@student.uns.ac.id"
    },
    {
      "name": "Lia Wahyuningsih",
      "nim": "V0220039",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "liaak_15@student.uns.ac.id"
    },
    {
      "name": "Lutfiana Intan Nabila",
      "nim": "V0220040",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "lutfianabila6@student.uns.ac.id"
    },
    {
      "name": "Muhammad Royhan Mahrus Kamal",
      "nim": "V0220045",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "Royhaan.r@student.uns.ac.id"
    },
    {
      "name": "Nadia Maheswari Laksmi",
      "nim": "B3218041",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "nadiamaheswari@student.uns.ac.id"
    },
    {
      "name": "Nadila Rosalina",
      "nim": "V0220049",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "nadilarosalina@student.uns.ac.id"
    },
    {
      "name": "Priskila Febiandani Suharto",
      "nim": "V0220054",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "priskilafebiandani88@student.uns.ac.id"
    },
    {
      "name": "Raden Roro Yasmin Fattaya Noor Fatma Kusumaningrum",
      "nim": "B3219049",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "Radenyasmin_22@student.uns.ac.id"
    },
    {
      "name": "Rizkika Maulidina Habsari",
      "nim": "V0220056",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "rizkikamaulidinah@student.uns.ac.id"
    },
    {
      "name": "Rizky Muhammad Mahdianto",
      "nim": "V0220058",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "Rizkymuh.mahdianto@student.uns.ac.id"
    },
    {
      "name": "Rosa Dara Salinda",
      "nim": "B3219052",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "rosadaras.2000@student.uns.ac.id"
    },
    {
      "name": "Safira Nur Ulita",
      "nim": "B3219055",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "safiraulita@student.uns.ac.id"
    },
    {
      "name": "Syaifulloh Khoiri Aristyo Utomo",
      "nim": "V0220064",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "syaifullohkhoiriau@student.uns.ac.id"
    },
    {
      "name": "Wahid Surya Nugroho",
      "nim": "V0220066",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "wahidnugroho598@student.uns.ac.id"
    },
    {
      "name": "Zettira Marsha Adelia",
      "nim": "V0220071",
      "jurusan": "D-3 Usaha Perjalanan Wisata",
      "email": "zettiramarshaadelia@student.uns.ac.id"
    },
    {
      "name": "Adita Leilia Tama",
      "nim": "B3319002",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "aditaleilia9@student.uns.ac.id"
    },
    {
      "name": "Agnes Novanti Maharani",
      "nim": "B3319004",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "agnesmaharani27@student.uns.ac.id"
    },
    {
      "name": "Andreanisa Pisca Wijaya",
      "nim": "B3319006",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "andreanisapw13@student.uns.ac.id"
    },
    {
      "name": "Ariel Dery Julisdianto",
      "nim": "B3319007",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "ariel.dery.9@student.uns.ac.id"
    },
    {
      "name": "Arum Laksitorini",
      "nim": "B3319008",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "arumlaksitorini@student.uns.ac.id"
    },
    {
      "name": "Bima Prakosa",
      "nim": "B3318007",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "bima_prakosa7@student.ac.id"
    },
    {
      "name": "Dewi Kusuma Purnamasari",
      "nim": "B3319015",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "dewikusumap@student.uns.ac.id"
    },
    {
      "name": "Elizabeth Frisky Anna",
      "nim": "B3318017",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "Elizabethfriskyanna@student.uns.ac.id"
    },
    {
      "name": "Ida Yulianingsih",
      "nim": "B3319022",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "idayulianingsih_1806@student.uns.ac.id"
    },
    {
      "name": "Ima Norma Shantika",
      "nim": "B3319023",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "Imaa.normaa10@student.uns.ac.id"
    },
    {
      "name": "Karima Syahida Umara",
      "nim": "B3319024",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "karimasya16@student.uns.ac.id"
    },
    {
      "name": "Kuni Miftahatussa'adah Nurwidodo",
      "nim": "B3318027",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "kuniksaadah88@student.uns.ac.id"
    },
    {
      "name": "Lauwrencia Kezia Samiaji",
      "nim": "B3319026",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "lauwrenciakezia@student.uns.ac.id"
    },
    {
      "name": "Pricillia Sendy",
      "nim": "B3318036",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "pricillia.sendy_04@student.uns.ac.id"
    },
    {
      "name": "Risma Erliana Melati",
      "nim": "B3319038",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "rismaerlianamelati@student.uns.ac.id"
    },
    {
      "name": "Safinatun Najah Nadia",
      "nim": "B3319043",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "safinatunnajahnadiaaaaa@student.uns.ac.id"
    },
    {
      "name": "Salsabila Surya Prameswari",
      "nim": "B3318041",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "suryasalsabil@student.uns.ac.id"
    },
    {
      "name": "Vina Maria Meilasari Koswanto",
      "nim": "B3319046",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "vinamariameilasari13@student.uns.ac.id"
    },
    {
      "name": "Yukta Nasyroh",
      "nim": "B3319048",
      "jurusan": "D-3 Bahasa Mandarin",
      "email": "Yukta@student.uns.ac.id"
    },
    {
      "name": "Alivia Nurayda",
      "nim": "V3820003",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "alivianurayda@student.uns.ac.id"
    },
    {
      "name": "Amanda Kusumawardani",
      "nim": "V3820004",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "amandaaak@student.uns.ac.id"
    },
    {
      "name": "Ananda Haya Clarisa",
      "nim": "V3820005",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "clarisaananda772@student.uns.ac.id"
    },
    {
      "name": "Anyoga Fatkhurohim",
      "nim": "V3820006",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "anyoga06@student.uns.ac.id"
    },
    {
      "name": "Arifah Nur Dzahabyyah",
      "nim": "V3820007",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "arifahnurdzahabyyah@student.uns.ac.id"
    },
    {
      "name": "Atikah Mahdiyah",
      "nim": "V3820008",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "atikahmahdiyah@student.uns.ac.id"
    },
    {
      "name": "AVILIA SATIVA RAHMANIA",
      "nim": "V3820009",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "aviliasativa@student.uns.ac.id"
    },
    {
      "name": "Azizatul Munawwaroh",
      "nim": "V3820010",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "azizatulm21@student.uns.ac.id"
    },
    {
      "name": "Choirunnisa",
      "nim": "V3820011",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "choirunnisa.ac.id@student.uns.ac.id"
    },
    {
      "name": "Dea Putri Cristianingrum",
      "nim": "V3820013",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "deaputriic08@student.uns.ac.id"
    },
    {
      "name": "Dean Novitasari",
      "nim": "D1519022",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "deannovitasari@student.uns.ac.id"
    },
    {
      "name": "Dewi Rohmawati",
      "nim": "V3820014",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "rahmawatidewi22@student.uns.ac.id"
    },
    {
      "name": "Dira wahyu nurviana",
      "nim": "V3820015",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "Dirawahyu96@student.uns.ac.id"
    },
    {
      "name": "Dwi Laelatul Rohmah",
      "nim": "V3820017",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "dwilailatulrohmah@student.uns.ac.id"
    },
    {
      "name": "Eka Setiya Narwati",
      "nim": "V3820018",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "eka.setiya3@student.uns.ac.id"
    },
    {
      "name": "Erix Pebriyani Nur Rahmaputri",
      "nim": "V3820020",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "erix.pebriyani@student.uns.ac.id"
    },
    {
      "name": "Fara Suci Prastica",
      "nim": "V3820023",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "farasuci1212@student.uns.ac.id"
    },
    {
      "name": "Fayza luthfa zahara",
      "nim": "V3820024",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "Fayzaluthfa09@student.uns.ac.id"
    },
    {
      "name": "Ferry tri julianto",
      "nim": "V3820025",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "ferrytrijulianto@student.uns.ac.id"
    },
    {
      "name": "Fira Nur Magfyra",
      "nim": "V3820026",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "fmagfyra@student.uns.ac.id"
    },
    {
      "name": "Fitri Amalia",
      "nim": "V3820027",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "fitriamalia@student.uns.ac.id"
    },
    {
      "name": "Herlis dwi prasetiani",
      "nim": "V3820031",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "herlisdwi1234@student.uns.ac.id"
    },
    {
      "name": "Hindun Nadiah Mageti",
      "nim": "V3820032",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "hindunnadiah09@student.uns.ac.id"
    },
    {
      "name": "Insia Nofiatin",
      "nim": "V3820034",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "insianofiatin@student.uns.ac.id"
    },
    {
      "name": "Jihantika Apriliani",
      "nim": "V3820036",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "jihantikaapriliani26@student.uns.ac.id"
    },
    {
      "name": "Kalingga Pury Vyrnadila",
      "nim": "V3820037",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "kalinggaprvy31@student.uns.ac.id"
    },
    {
      "name": "Kalyana Nanda Kusuma",
      "nim": "V3820038",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "kalyana_nanda38@student.uns.ac.id"
    },
    {
      "name": "Leanda Rukisha Dewi",
      "nim": "V3820039",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "leandarukisha@student.uns.ac.id"
    },
    {
      "name": "madnanalfaruqi@student.uns.ac.id",
      "nim": "V3820043",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "madnanalfaruqi@student.uns.ac.id"
    },
    {
      "name": "Mochamad Aditya Nur Satria",
      "nim": "V3820042",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "adityanur@student.uns.ac.id"
    },
    {
      "name": "Neni Dwi Utami Masailla",
      "nim": "V3820046",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "nenidum63@student.uns.ac.id"
    },
    {
      "name": "Penti Anggraini",
      "nim": "V3820048",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "pentianggraini135@student.uns.ac.id"
    },
    {
      "name": "Putri Divy Devina",
      "nim": "V3820049",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "putridivy28@student.uns.ac.id"
    },
    {
      "name": "Putri Lydia Puspitasari",
      "nim": "V3820050",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "putrilydia@student.uns.ac.id"
    },
    {
      "name": "Putri Vidya Munawaroh",
      "nim": "V3820051",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "mputrividya@student.uns.ac.id"
    },
    {
      "name": "Rizky Rahmanda Yogi Saputra",
      "nim": "V3820053",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "Rizkyrahmanda62@student.uns.ac.id"
    },
    {
      "name": "Selvira Januareta Putri",
      "nim": "V3840054",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "slvrjnrrt12@student.uns.ac.id"
    },
    {
      "name": "Shintya Hartika Mulyawati",
      "nim": "V3820056",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "shintyahartika@student.uns.ac"
    },
    {
      "name": "Siska Meiliana",
      "nim": "V3820057",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "siskameiliana35@student.uns.ac.id"
    },
    {
      "name": "Xlaunchel Devanda Cristine",
      "nim": "V3820065",
      "jurusan": "D-3 Akuntansi PSDKU",
      "email": "xlauncheldevanda@student.uns.ac.id"
    },
    {
      "name": "Achmat Fajri",
      "nim": "V3920001",
      "jurusan": "D3-Teknik Informatika",
      "email": "fajrisurvey@student.uns.ac.id"
    },
    {
      "name": "Adila Arya Kusumastuti",
      "nim": "V3420002",
      "jurusan": "D3 Teknik Informatika",
      "email": "adilaarya694@student.uns.ac.id"
    },
    {
      "name": "Ainul Fitriyah",
      "nim": "M3118005",
      "jurusan": "D3 Teknik Informatika",
      "email": "ainul_fitriyah17@student.uns.ac.id"
    },
    {
      "name": "Aldan Maulana Fajri",
      "nim": "M3119005",
      "jurusan": "D3 Teknik Informatika",
      "email": "mafa.alfa75@student.uns.ac.id"
    },
    {
      "name": "Amri Khoirul Hakim",
      "nim": "M3119008",
      "jurusan": "D3 Teknik Informatika",
      "email": "amrihakim12@student.uns.ac.id"
    },
    {
      "name": "Andrean Ludvi Nur Aziz",
      "nim": "V3920007",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "andreanlna86@student.uns.ac.id"
    },
    {
      "name": "Annandhini Zahwa Nur Fitria",
      "nim": "V3420012",
      "jurusan": "D3 Teknik Informatika",
      "email": "annandhinizahwa@student.uns.ac.id"
    },
    {
      "name": "Ardianita Fauziyah",
      "nim": "V3920009",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "ardianitaf@student.uns.ac.id"
    },
    {
      "name": "Arin Dwi Padmasari",
      "nim": "V3920010",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "arindwipadmasari_1@student.uns.ac.id"
    },
    {
      "name": "Arrico Handyanto",
      "nim": "M3119016",
      "jurusan": "D3 Teknik Informatika",
      "email": "arricohandyanto@student.uns.ac.id"
    },
    {
      "name": "Arvianto Ahmad Al Ghozali",
      "nim": "M3119017",
      "jurusan": "D3 Teknik Informatika",
      "email": "arviantoal@student.uns.ac"
    },
    {
      "name": "Ayu Setyaningsih",
      "nim": "V3420015",
      "jurusan": "D3 Teknik Informatika",
      "email": "ayusetyaningsih@student.uns.ac.id"
    },
    {
      "name": "Bagus Mahmudie",
      "nim": "M3118016",
      "jurusan": "D3 Teknik Informatika",
      "email": "bagusmahmudie@student.uns.ac.id"
    },
    {
      "name": "Balqiz Prycilia",
      "nim": "V3420017",
      "jurusan": "D3-Teknik Informatika",
      "email": "balqizzp@student.uns.ac.id"
    },
    {
      "name": "Bambang Tri Suryo Atmojo",
      "nim": "M3118017",
      "jurusan": "D3 Teknik Informatika",
      "email": "bambangtsa879@student.uns.ac.id"
    },
    {
      "name": "Bancar Anggono Farros Santosa",
      "nim": "V3920013",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "bancarafarros@student.uns.ac.id"
    },
    {
      "name": "Bima Afrizal Malna",
      "nim": "V3420018",
      "jurusan": "D3 Teknik Informatika",
      "email": "bimaafrizalmalna@student.uns.ac.id"
    },
    {
      "name": "Candra Angujiwati",
      "nim": "M3118020",
      "jurusan": "D3 Teknik Informatika",
      "email": "candraangujiwati@student.uns.ac.id"
    },
    {
      "name": "Candra Tri Prasetyo",
      "nim": "V3420019",
      "jurusan": "D3 Teknik Informatika",
      "email": "candratrip3@student.uns.ac.id"
    },
    {
      "name": "Clarissa putri aurellia",
      "nim": "V3920015",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "clarissaurellia37@student.uns.ac.id"
    },
    {
      "name": "Daffa Raszya Danoetirta",
      "nim": "V3420023",
      "jurusan": "D3 Teknik Informatika",
      "email": "Daffaraszya.10@student.uns.ac.id"
    },
    {
      "name": "Dema listyaningrum",
      "nim": "V3920017",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "demalistyaningrum@student.uns.ac.id"
    },
    {
      "name": "Deny Febriawan",
      "nim": "V3420025",
      "jurusan": "D3 Teknik Informatika",
      "email": "denyfebriawan@student.uns.ac.id"
    },
    {
      "name": "Diah Ayu Prasidha",
      "nim": "M3118026",
      "jurusan": "D3 Teknik Informatika",
      "email": "diahayu_prasidha26@student.uns.ac.id"
    },
    {
      "name": "Dimas Wisnu Wibowo",
      "nim": "M3118028",
      "jurusan": "D3 Teknik Informatika",
      "email": "dwibowo104@student.uns.ac.id"
    },
    {
      "name": "Dinda Putri Restika",
      "nim": "M3119032",
      "jurusan": "D3 Teknik Informatika",
      "email": "dindarestika@student.uns.ac.id"
    },
    {
      "name": "Ditya Galassepda Putri",
      "nim": "V3420030",
      "jurusan": "D3 Teknik Informatika",
      "email": "dityagp@student.uns.ac.id"
    },
    {
      "name": "Dwi Ayuni Rohana",
      "nim": "V3920019",
      "jurusan": "D3 Teknik Informatika",
      "email": "ayunirohana@student.uns.ac.id"
    },
    {
      "name": "Elya Kumala Fauziyah",
      "nim": "V3920020",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "elyakumalafauziyah@student.uns.ac.id"
    },
    {
      "name": "Exca Muchlis Andita",
      "nim": "M3119036",
      "jurusan": "D3 Teknik Informatika",
      "email": "excamuchlisandita@student.uns.ac.id"
    },
    {
      "name": "Hamida Nuriyasinta",
      "nim": "M3118034",
      "jurusan": "D3 Teknik Informatika",
      "email": "Hamidanuri48@student.uns.ac.id"
    },
    {
      "name": "Hawin Noer Hamidah",
      "nim": "V3920024",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "hawinnoerhamidah@student.uns.ac.id"
    },
    {
      "name": "Hemalia Aisyah Putri",
      "nim": "V3920025",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "hemaliaaisyahputri23@student.uns.ac.id"
    },
    {
      "name": "Hildanniar Fauzi",
      "nim": "V3920026",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "hildanniarfauzi6@student.uns.ac.id"
    },
    {
      "name": "Imam Abdul Aziz",
      "nim": "M3118040",
      "jurusan": "D3 Teknik Informatika",
      "email": "stared@student.uns.ac.id"
    },
    {
      "name": "Inez Laurensya",
      "nim": "V3920027",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "inezlaurensya@student.uns.ac.id"
    },
    {
      "name": "Intan Nadira Ayu Chairunnissa",
      "nim": "V3420041",
      "jurusan": "D3 Teknik Informatika",
      "email": "intanchairunnissa@student.uns.ac.id"
    },
    {
      "name": "ISNAN NUR AHMAD WIJAYAKUSUMA",
      "nim": "V3920029",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "isnanwijayakusuma@student.uns.ac.id"
    },
    {
      "name": "Khoirul diantoro",
      "nim": "V3920031",
      "jurusan": "D3 Teknik Informatika",
      "email": "Khoirulmaba1@student.uns.ac.id"
    },
    {
      "name": "Kreshna Putra Adi Wicaksana",
      "nim": "V3920032",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "kreshnaputraadi31@student.uns.ac.id"
    },
    {
      "name": "Linda Ramawati",
      "nim": "V3920033",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "Lindarahmawati011001@student.uns.ac.id"
    },
    {
      "name": "Luthfi puji ningtyas",
      "nim": "M3118051",
      "jurusan": "D3 Teknik Informatika",
      "email": "Luthfi_puji1@student.uns.ac.id"
    },
    {
      "name": "Melynda Enggi Rahmawati",
      "nim": "M3118052",
      "jurusan": "D3-Teknik Informatika",
      "email": "melyndaenggi@student.uns.ac.id"
    },
    {
      "name": "Miftah Hana Mufida",
      "nim": "M3118053",
      "jurusan": "D3 Teknik Informatika",
      "email": "Miftahhanamufida@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hanif Arafi",
      "nim": "V3920038",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "muhammadhanifarafi@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hanif Arafi",
      "nim": "V3920038",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "muhammadhanifarafi@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ihsanuddin Daud",
      "nim": "V3920039",
      "jurusan": "D3 Teknik Informatika",
      "email": "ihsanuddindaud@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ilham Alamsyah",
      "nim": "M3118055",
      "jurusan": "D3 Teknik Informatika",
      "email": "milhamalamsyah@student.uns.ac.id"
    },
    {
      "name": "Muhammad Sabili Nasuha",
      "nim": "M3118057",
      "jurusan": "D3 Teknik Informatika",
      "email": "Sabili@student.uns.ac.id"
    },
    {
      "name": "Muhammad Yeiko Akbar",
      "nim": "V3920040",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "muhammadyeikoakbar@student.uns.ac.id"
    },
    {
      "name": "Muna Hanifah Astifasya",
      "nim": "M3118059",
      "jurusan": "D3 Teknik Informatika",
      "email": "munahanifah@student.uns.ac.id"
    },
    {
      "name": "Nadia Setyaningrum",
      "nim": "V3920041",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "nadiasetyaningrum@student.uns.ac.id"
    },
    {
      "name": "Nagaza Syafa Charnova",
      "nim": "M3118062",
      "jurusan": "D3-Teknik Informatika",
      "email": "nagazasyafa@student.uns.ac.id"
    },
    {
      "name": "Namira Naftalina Firdausy",
      "nim": "M3118063",
      "jurusan": "D3 Teknik Informatika",
      "email": "namiranava46@student.uns.ac.id"
    },
    {
      "name": "Nico fadhlurahman",
      "nim": "V3420054",
      "jurusan": "D3-Teknik Informatika",
      "email": "Nicofaflu@student.uns.ac.id"
    },
    {
      "name": "Nizamuddon aulia qutub",
      "nim": "V3420055",
      "jurusan": "D3 Teknik Informatika",
      "email": "muron890@student.uns.ac.id"
    },
    {
      "name": "Novia Kusumadhani",
      "nim": "M3118064",
      "jurusan": "D3 Teknik Informatika",
      "email": "nvakusumadhani27@student.uns.ac.id"
    },
    {
      "name": "Nuriya Imroatu Rahmawati",
      "nim": "V3920045",
      "jurusan": "D3 Teknik Informatika",
      "email": "nuriyaimroatu_r@student.uns.ac.id"
    },
    {
      "name": "Nursiah Hayati",
      "nim": "M3118065",
      "jurusan": "D3 Teknik Informatika",
      "email": "nursiah_hayati26@student.uns.ac.id"
    },
    {
      "name": "Oktarinia Rossa Atanaswati",
      "nim": "V3920046",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "oktariniarossaa14@student.uns.ac.id"
    },
    {
      "name": "Pramesti Dyah Wardani",
      "nim": "M3118067",
      "jurusan": "D3 Teknik Informatika",
      "email": "PramestiDyah15@student.uns.ac.id"
    },
    {
      "name": "Prayoga Yuditama",
      "nim": "M3118068",
      "jurusan": "D3 Teknik Informatika",
      "email": "prayoga5070@student.uns.ac.id"
    },
    {
      "name": "Priaji Oktawibyan Abror",
      "nim": "M3118069",
      "jurusan": "D3 Teknik Informatika",
      "email": "ajipriaji10@student.uns.ac.id"
    },
    {
      "name": "Qona'ah Nurussalamah",
      "nim": "M3118070",
      "jurusan": "D3 Teknik Informatika",
      "email": "nurussalamahqonaah@student.uns.ac.id"
    },
    {
      "name": "Raihan Adhitya Putra",
      "nim": "M3119073",
      "jurusan": "D3 Teknik Informatika",
      "email": "raihanadhitya23@student.uns.ac.id"
    },
    {
      "name": "Raihan Marwanda",
      "nim": "M3118072",
      "jurusan": "D3 Teknik Informatika",
      "email": "Raihanmarwanda@student.uns.ac.id"
    },
    {
      "name": "Ramadhana Muhaimin",
      "nim": "M3119075",
      "jurusan": "D3 Teknik informatika",
      "email": "ramadhanamuhaimin.21@student.uns.ac.id"
    },
    {
      "name": "Regita Cahya Wulan",
      "nim": "V3420057",
      "jurusan": "D3 Teknik Informatika",
      "email": "regitacahyawulan@student.uns.ac.id"
    },
    {
      "name": "Ridho walidhayin rifai",
      "nim": "V3920052",
      "jurusan": "D3 Teknik Informatika",
      "email": "ridhorifai88@student.uns.ac.id"
    },
    {
      "name": "Rifqi Achmad Fadhilla",
      "nim": "V3920053",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "RifqiAchmadfadhilla@student.uns.id"
    },
    {
      "name": "Risky Miusdi Enha",
      "nim": "M3118078",
      "jurusan": "D3 Teknik Informatika",
      "email": "riskymiusdienha@student.uns.ac.id"
    },
    {
      "name": "Roro widya adi kusuma",
      "nim": "V3920054",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "rorowidya.03@student.uns.ac.id"
    },
    {
      "name": "Ryanito Filza Renara Putra",
      "nim": "M3118081",
      "jurusan": "D3 Teknik Informatika",
      "email": "rito7195@student.uns.ac.id"
    },
    {
      "name": "Salsabila Qurrotul 'Aini",
      "nim": "V3420068",
      "jurusan": "D3 Teknik Informatika",
      "email": "saqurra22@student.uns.ac.id"
    },
    {
      "name": "Salsabilla Hasna Nafisah",
      "nim": "M3118082",
      "jurusan": "D3 Teknik Informatika",
      "email": "hnsalsabilla@student.uns.ac.id"
    },
    {
      "name": "Salsha Ristania",
      "nim": "M3119080",
      "jurusan": "D3-Teknik Informatika",
      "email": "salsharistania@student.uns.ac.id"
    },
    {
      "name": "Shinta Audia Trisna Damayanti",
      "nim": "M3118084",
      "jurusan": "D3 Teknik Informatika",
      "email": "shintaaudia75@student.uns.ac.id"
    },
    {
      "name": "Syadza Tsurayya Eden",
      "nim": "M3119084",
      "jurusan": "D3 Teknik Informatika",
      "email": "syadzatsurayya27@student.uns.ac.id"
    },
    {
      "name": "Tantri Setiani",
      "nim": "V3920056",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "tantrisetiani@student.uns.ac.id"
    },
    {
      "name": "Tanzil Rahmatul Karim",
      "nim": "V3920057",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "tanzil.r35@student.uns.ac.id"
    },
    {
      "name": "Tiara Putri Ariyati",
      "nim": "V3920058",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "tiaraputriariyati@student.uns.ac.id"
    },
    {
      "name": "Tri Wulandari",
      "nim": "M3119085",
      "jurusan": "D3 Teknik Informatika",
      "email": "wln.424@student.uns.ac.id"
    },
    {
      "name": "Wibiati Sekar Kinasih",
      "nim": "V3920061",
      "jurusan": "D3 Teknik Informatika PSDKU",
      "email": "wibiatisekark@student.uns.ac.id"
    },
    {
      "name": "Windhi Nur Safitri",
      "nim": "M3119087",
      "jurusan": "D3 Teknik Informatika",
      "email": "windhins@student.uns.ac.id"
    },
    {
      "name": "Yoga Pratama",
      "nim": "M3119089",
      "jurusan": "D3 Teknik Informatika",
      "email": "pratama.yp@student.uns.ac.id"
    },
    {
      "name": "Yopi Junita Ambarita",
      "nim": "M3119090",
      "jurusan": "D3-Teknik Informatika",
      "email": "yopiambarita06@student.uns.ac.id"
    },
    {
      "name": "Rofiatul Mahmudah",
      "nim": "H3418040",
      "jurusan": "D-3 Agribisnis",
      "email": "rofiatulmahmudah@student.uns.ac.id"
    },
    {
      "name": "Ade Rio Perdana Kusuma",
      "nim": "D1519001",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ade.perdana51@student.uns.ac.id"
    },
    {
      "name": "Adelia Tri Lestari",
      "nim": "D1519002",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "adeliatriil24@student.uns.ac.id"
    },
    {
      "name": "Aisyah Nur Aini",
      "nim": "D1519005",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ainiaisyah01@student.uns.ac"
    },
    {
      "name": "Amanda indri astutu",
      "nim": "D1519008",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "amandaindriastuti_57@student.uns.ac.id"
    },
    {
      "name": "Anggita Harimurti Kirana",
      "nim": "D1519009",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "kanggita14@student.uns.ac.id"
    },
    {
      "name": "Annisa Rizky Nur Fajrin",
      "nim": "D1519011",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "annisarnf@student.uns.ac.id"
    },
    {
      "name": "Ardhia Maharini",
      "nim": "V0720009",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "mahariniardhia92@student.uns.ac.id"
    },
    {
      "name": "Asih Rahmawati",
      "nim": "D1519014",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "asihrahmawati871@student.uns.ac.id"
    },
    {
      "name": "Astri Irvani Briliyanti",
      "nim": "D1519015",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Astri_irvani8@student.uns.ac.id"
    },
    {
      "name": "Ayu Anisa",
      "nim": "V0720014",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ayuanisa@student.uns.ac.id"
    },
    {
      "name": "Bernike Ayu Chrismatiana",
      "nim": "D1519017",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "bernikeayu08@student.uns.ac.id"
    },
    {
      "name": "Cindy Fajri Islamy Putri",
      "nim": "D1519020",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "cindy.fip_00@student.uns.ac.id"
    },
    {
      "name": "David Moh Herland Alamsyach",
      "nim": "V0720020",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "davidjozt@student.ac.id"
    },
    {
      "name": "deannovitasari@student.uns.ac.id",
      "nim": "D1519022",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "deannovitasari@student.uns.ac.id"
    },
    {
      "name": "Dhiya Salma Hanifah",
      "nim": "D1519024",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "dhiyasalmahanifah@student.uns.ac.id"
    },
    {
      "name": "Dhiya Salma Hanifah",
      "nim": "D1519024",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "dhiyasalmahanifah@student.uns.ac.id"
    },
    {
      "name": "Dian Putri Hutami Santoso",
      "nim": "D1519024",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "dianputrihs@student.uns.ac.id"
    },
    {
      "name": "Dina lina wati",
      "nim": "D1519026",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Dinalinawati_03@student.uns.ac.id"
    },
    {
      "name": "Dinda Clarisa Tri Maharani",
      "nim": "D1519027",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "dindaclarisa@student.uns.ac.id"
    },
    {
      "name": "Diva Nabila",
      "nim": "D1519029",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "diva_nabila19@student.uns.ac.id"
    },
    {
      "name": "Elya Kartika Ratnasari",
      "nim": "D1519033",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "elyaratnasari86@student.uns.ac.id"
    },
    {
      "name": "Elyana Meira Widi Asmara",
      "nim": "D1519034",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "elyana@student.uns.ac.id"
    },
    {
      "name": "Emalia Yuniarti",
      "nim": "D1519035",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "emaliayuniarti@student.uns.ac.id"
    },
    {
      "name": "Evan Wahyu Ramadhan",
      "nim": "D1519037",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "evanramadhan@student.uns.ac.id"
    },
    {
      "name": "Fanadya Firdaus",
      "nim": "V0720035",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "fanadyafirdaus@student.uns.ac.id"
    },
    {
      "name": "Fani Ardivia",
      "nim": "D1519038",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "fanyardivia@student.uns.ac.id"
    },
    {
      "name": "Fathonah Lestari",
      "nim": "V0720036",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "fathonahlestari@student.uns.ac.id"
    },
    {
      "name": "Fatma Wulandari",
      "nim": "D1519039",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "fatmawuland11@student.uns.ac.id"
    },
    {
      "name": "Fitria Kunthi Munawaroh",
      "nim": "D1519041",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Fitriakunthi.735@student.uns.ac.id"
    },
    {
      "name": "Hening Widya Puspita",
      "nim": "D1519042",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "widya.hening78@student.uns.ac.id"
    },
    {
      "name": "Ikhtiarika Bahagia Amin",
      "nim": "D1519044",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ikhtiarikatiara@student.uns.ac.id"
    },
    {
      "name": "Irdawati Cahyaning Tetri",
      "nim": "D1519047",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Irdawati555@student.uns.ac.id"
    },
    {
      "name": "Khafidh Fakhruddin",
      "nim": "D1519049",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "khafidhfakh_1967@student.uns.ac.id"
    },
    {
      "name": "Kirana Anggit Rahmadanty",
      "nim": "D1519050",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "anggit.rahma06@student.uns.ac.id"
    },
    {
      "name": "Lila Fajrina",
      "nim": "D1519052",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "lilafajrinsa@student.uns.ac.id"
    },
    {
      "name": "Lusiana Azka Rachmawati",
      "nim": "D1519097",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "lusianaaz_01@student.uns.ac.id"
    },
    {
      "name": "Lutfi Rahmawati",
      "nim": "D1519053",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "lutfirahmaaa@student.uns.ac.id"
    },
    {
      "name": "Lydia Anin Putri Gunawan",
      "nim": "V0U20048",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "lydiaaninpg@student.uns.ac.id"
    },
    {
      "name": "Mahendra Jodi Setiawan",
      "nim": "D1519055",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "mahendra_jodi10@student.uns.ac.id"
    },
    {
      "name": "Muhammad Farhan Wildan",
      "nim": "D1519057",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "muhammadfarhanwildan@student.uns.ac.id"
    },
    {
      "name": "Muhammad Sidiq Kurniawan",
      "nim": "D1519058",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Sidiqkurniawan_4@student.uns.ac.id"
    },
    {
      "name": "Muhammad Thoyfur",
      "nim": "D1519059",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ipungg.id@student.uns.ac.id"
    },
    {
      "name": "Musthafa Naufal Rasyid",
      "nim": "D1519060",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "musthafanaufalr2000@student.uns.ac.id"
    },
    {
      "name": "Nadia marcella",
      "nim": "V0720057",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Nadiamarcella14@student.uns.ac.id"
    },
    {
      "name": "Naufal Falih Dhiya'ulhaq",
      "nim": "D1519063",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "naufalfd13@student.uns.ac.id"
    },
    {
      "name": "Nella Agustin Wulandari",
      "nim": "V0720058",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "nellaagustin28@student.uns.ac.id"
    },
    {
      "name": "Nopa Hoerunnisa",
      "nim": "D1519065",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "nopahoerunnisa23@student.uns.ac.id"
    },
    {
      "name": "Pramudhita Restilianingrum Prayoga",
      "nim": "V0720066",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "pramudhitarestilia13@student.uns.ac.id"
    },
    {
      "name": "Qisthan Aurelia Ramadhanty",
      "nim": "D1519070",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "qisthanaurelia36@student.uns.ac.id"
    },
    {
      "name": "Rachma Valetta Oktavia",
      "nim": "D1519072",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rachmavaletta@student.uns.ac.id"
    },
    {
      "name": "Rachma Valetta Oktavia",
      "nim": "D1519072",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rachmavaletta@student.uns.ac.id"
    },
    {
      "name": "Rahiema Mukti Aningrum",
      "nim": "D1519073",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rahiemamukti@student.uns.ac.id"
    },
    {
      "name": "Risa Syahri Saputri",
      "nim": "D1519074",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "risasayhri23@student.uns.ac.id"
    },
    {
      "name": "Risma Nurul Khotimah",
      "nim": "V0720075",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rismanurulkhotimah@student.uns.ac.id"
    },
    {
      "name": "Rizka Jasmine P",
      "nim": "D1519075",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rizkajasmine31@student.uns.ac.id"
    },
    {
      "name": "rizki rahmawati",
      "nim": "D1519076",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rizkirahmawati04@student.uns.ac.id"
    },
    {
      "name": "Rizky Mayliana Damayanti",
      "nim": "V0720076",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rizkymayliana19@student.uns.ac.id"
    },
    {
      "name": "Rodiyah Laila A.",
      "nim": "D1519077",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "rodiyah.laila@student.uns.ac.id"
    },
    {
      "name": "Sakinatul Mardhiyyah",
      "nim": "D1519079",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "sakinm2001@student.uns.ac.id"
    },
    {
      "name": "Sam Tiara Puspa",
      "nim": "V0720080",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "samtiarapuspa01@student.uns.ac.id"
    },
    {
      "name": "Septia Istifar Zufrianisyah",
      "nim": "D1519081",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "septiaizufrianisyah@student.uns.ac.id"
    },
    {
      "name": "Sri Winarni",
      "nim": "D1519085",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "Winarnis443. w@student.uns.ac.id"
    },
    {
      "name": "Ushi Muttaqiya Martha",
      "nim": "D1519088",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "ushi.martha03@student.uns.ac.id"
    },
    {
      "name": "Windi Puspita Sari",
      "nim": "V0720086",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "windipst@gmail.com"
    },
    {
      "name": "Yoga Hermawan",
      "nim": "D1519094",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "yogahermawan1999@student.uns.ac.id"
    },
    {
      "name": "Yusnita Lia Firna",
      "nim": "D1519096",
      "jurusan": "D-3 Manajemen Administrasi",
      "email": "yusnitafirna15@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.jurusan = _participant.jurusan;
    participant.email = _participant.email;
    participant.session.id = "5ff6d82468e73d0f80348803";
    participant.session.number = "1";
    participant.session.min = new Date("2021-01-07T16:44:00.000Z");
    participant.session.max = new Date("2021-01-09T21:45:00.000Z");

    // Save and validate
    participant.save(function (err) {
      if (err) return res.status(500).json(err);

      Session.findById(participant.session.id, function (err, session) {
        if (err) return res.status(500).json(err);
        session.total_participant++;
        Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
          (session) => {
            if (session) {
            } else {
            }
          }
        );
      });
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        return res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
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

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate_bem": req.body.id_candidate_bem,
        "voting.id_candidate_legislatif": req.body.id_candidate_legislatif,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        return res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
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

// Handle delete actions
exports.delete = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    console.log(participant);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      console.log(session);
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                return res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
  if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
