// Import Participant model
Participant = require("../model/participantModel");
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
  /*if (!ip.includes(req.ip.replace("::ffff:", ""))) {
    console.log(req.ip.replace("::ffff:", ""));

    return res.status(500).send();
  }*/
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
      name: "Adelia Larasati",
      nim: "F3418001",
      jurusan: "D-3 Perpajakan",
      email: "adelialaras27@student.uns.ac.id",
    },
    {
      name: "Agustina Pandu Pitaloka",
      nim: "F3418002",
      jurusan: "D-3 Perpajakan",
      email: "pipitagustina03@student.uns.ac.id",
    },
    {
      name: "ALIFIA MULYA KAMILA PUTRI WIBOWO",
      nim: "F3418004",
      jurusan: "D-3 Perpajakan",
      email: "mpwalifia@student.uns.ac.id",
    },
    {
      name: "Almira Puspita Maharani",
      nim: "F3418005",
      jurusan: "D-3 Perpajakan",
      email: "puspitaalmira@student.uns.ac.id",
    },
    {
      name: "Alriska Andra Kalila",
      nim: "F3418006",
      jurusan: "D-3 Perpajakan",
      email: "alriskaandrak@student.uns.ac.id",
    },
    {
      name: "Andika Yoga Pratama",
      nim: "F3418008",
      jurusan: "D-3 Perpajakan",
      email: "andi.wng99@gmail.com",
    },
    {
      name: "Anisa Sulistiyowati Suci Anggrainj",
      nim: "F3418009",
      jurusan: "D-3 Perpajakan",
      email: "anisasulis01@student.uns.ac.id",
    },
    {
      name: "Annisa Ramadhany",
      nim: "F3418010",
      jurusan: "D-3 Perpajakan",
      email: "Annisar_31@student.uns.ac.id",
    },
    {
      name: "Artasya Novia Ade Riyanti",
      nim: "F3418011",
      jurusan: "D-3 Perpajakan",
      email: "artasya_novia11@student.uns.ac.id",
    },
    {
      name: "AULIA VRINDA AGESTA",
      nim: "F3418012",
      jurusan: "D-3 Perpajakan",
      email: "auliavrindaa@student.uns.ac.id",
    },
    {
      name: "Azizul Hermawan",
      nim: "F3418013",
      jurusan: "D-3 Perpajakan",
      email: "azizulhermawan01@student.com",
    },
    {
      name: "BADRUS ZAMAN",
      nim: "F3418014",
      jurusan: "D-3 Perpajakan",
      email: "Zaman@student.uns.ac.id",
    },
    {
      name: "Berlian Nimas Shinta Yan Agashi",
      nim: "F3418015",
      jurusan: "D-3 Perpajakan",
      email: "berliannimas@student.uns.ac.id",
    },
    {
      name: "Choy Lyberto Siahaan",
      nim: "F3418017",
      jurusan: "D-3 Perpajakan",
      email: "choysiahaan06@student.uns.ac.id",
    },
    {
      name: "CINDY PUSPITA APSARI",
      nim: "F3418018",
      jurusan: "D-3 Perpajakan",
      email: "cindypus25@student.uns.ac.id",
    },
    {
      name: "Danu Tri Atmojo",
      nim: "F3418019",
      jurusan: "D-3 Perpajakan",
      email: "danuatmojo45@student.uns.ac.id",
    },
    {
      name: "DIKY WAHYU SAPUTRO",
      nim: "F3418020",
      jurusan: "D-3 Perpajakan",
      email: "Dikywahyusaputro10@student.uns.ac.id",
    },
    {
      name: "Dila Nur Rahmawati",
      nim: "F3418021",
      jurusan: "D-3 Perpajakan",
      email: "dilanr@student.uns.ac.id",
    },
    {
      name: "Dwi Nova Agustian",
      nim: "F3418022",
      jurusan: "D-3 Perpajakan",
      email: "dnaa.agustin@student.uns.ac.id",
    },
    {
      name: "Dzikra Nabila Khansa",
      nim: "F3418023",
      jurusan: "D-3 Perpajakan",
      email: "dzikranabilakhansa@student.uns.ac.id",
    },
    {
      name: "Elga Nurani Bulan",
      nim: "F3418025",
      jurusan: "D-3 Perpajakan",
      email: "elga.nurani01@student.uns.ac.id",
    },
    {
      name: "ERI OCTAVIA TEDJOARUM",
      nim: "F3418026",
      jurusan: "D-3 Perpajakan",
      email: "erioctaviatedjoarum@student.uns.ac.id",
    },
    {
      name: "Erina Nardiati",
      nim: "F3418027",
      jurusan: "D-3 Perpajakan",
      email: "erinanr@student.uns.ac.id",
    },
    {
      name: "Fahrul Nur Kholis",
      nim: "F3418029",
      jurusan: "D-3 Perpajakan",
      email: "f.kholis14@stundent.co.id",
    },
    {
      name: "Faradhila Kusumassari",
      nim: "F3418031",
      jurusan: "D-3 Perpajakan",
      email: "faradhila@student.uns.ac.id",
    },
    {
      name: "Fatan Rasula Arsy",
      nim: "F3418032",
      jurusan: "D-3 Perpajakan",
      email: "Woyogenah@student.uns.ac.id",
    },
    {
      name: "Fikri Taufiq Hidayat",
      nim: "F3418033",
      jurusan: "D-3 Perpajakan",
      email: "ftaufiq11@student.uns.ac.id",
    },
    {
      name: "Getsemanevia Cita Jelita",
      nim: "F3418034",
      jurusan: "D-3 Perpajakan",
      email: "getsemaneviajelita21@student.uns.ac.id",
    },
    {
      name: "Hana Nur Sahari",
      nim: "F3418035",
      jurusan: "D-3 Perpajakan",
      email: "nurhanasahari71@student.uns.ac.id",
    },
    {
      name: "Handika Apri Liando",
      nim: "F3418036",
      jurusan: "D-3 Perpajakan",
      email: "handika24@student.uns.ac.id",
    },
    {
      name: "Hanifa Anggraini Santosa",
      nim: "F3418037",
      jurusan: "D-3 Perpajakan",
      email: "haneefa.san@student.uns.ac.id",
    },
    {
      name: "Kartika Wulandari",
      nim: "F3418038",
      jurusan: "D-3 Perpajakan",
      email: "kartikawnd@student.uns.ac.id",
    },
    {
      name: "Larasati Hayuningtyas",
      nim: "F3418039",
      jurusan: "D-3 Perpajakan",
      email: "larashayuj@student.uns.ac.id",
    },
    {
      name: "LIN RUTTIA NINGRUM",
      nim: "F3418040",
      jurusan: "D-3 Perpajakan",
      email: "linruttia2017@student.uns.ac.id",
    },
    {
      name: "Mega Wulandari",
      nim: "F3418042",
      jurusan: "D-3 Perpajakan",
      email: "m.wulandari_26@student.uns.ac.id",
    },
    {
      name: "Muhammad Faisal Aria Pramudya",
      nim: "F3418043",
      jurusan: "D-3 Perpajakan",
      email: "pramudyafaisal@student.uns.ac.id",
    },
    {
      name: "Muhammad Ihwal",
      nim: "F3418044",
      jurusan: "D-3 Perpajakan",
      email: "muhammadihwal03@student.uns.ac.id",
    },
    {
      name: "Muhammad Shonifin Firman Syah",
      nim: "F3418045",
      jurusan: "D-3 Perpajakan",
      email: "shonifirman48@student.uns.ac.id",
    },
    {
      name: "Nabila viva nur fatikah",
      nim: "F3418046",
      jurusan: "D-3 Perpajakan",
      email: "nviva44@student.uns.ac.id",
    },
    {
      name: "Nicolaus Tavelic Deodatus D N",
      nim: "F3418048",
      jurusan: "D-3 Perpajakan",
      email: "deodatusid@studen.ac.id",
    },
    {
      name: "Niken Larasati",
      nim: "F3418049",
      jurusan: "D-3 Perpajakan",
      email: "nikenlarasatii@student.uns.ac.id",
    },
    {
      name: "Ramandha Firmansyah",
      nim: "F3418051",
      jurusan: "D-3 Perpajakan",
      email: "ramandhaf21@student.uns.ac.id",
    },
    {
      name: "RANUM GANDANI AFIFAH",
      nim: "F3418052",
      jurusan: "D-3 Perpajakan",
      email: "ranumgandania30@student.uns.ac.id",
    },
    {
      name: "Ratmayanti Putri Arum Dalu",
      nim: "F3418053",
      jurusan: "D-3 Perpajakan",
      email: "ratmayanti98@student.uns.ac.id",
    },
    {
      name: "Restu Aji P",
      nim: "F3418054",
      jurusan: "D-3 Perpajakan",
      email: "rstajip@student.uns.ac.id",
    },
    {
      name: "Ridha Nur Inayah",
      nim: "F3418055",
      jurusan: "D-3 Perpajakan",
      email: "ridhanurinayah29@student.uns.ac.id",
    },
    {
      name: "Rofiah Nur Ziadah",
      nim: "F3418056",
      jurusan: "D-3 Perpajakan",
      email: "rofiahn22@studet.uns.ac.id",
    },
    {
      name: "Ryuma Awanda Putra",
      nim: "F3418057",
      jurusan: "D-3 Perpajakan",
      email: "ryumaawandaputra@student.uns.ac.id",
    },
    {
      name: "Salsabila Arvita Budiyarni",
      nim: "F3418058",
      jurusan: "D-3 Perpajakan",
      email: "Salsabilaarvita@student.ac.id",
    },
    {
      name: "Salsabila Destin Khoirinnisa",
      nim: "F3418059",
      jurusan: "D-3 Perpajakan",
      email: "salsabiladestin00@student.uns.ac.id",
    },
    {
      name: "Sekar Palupi",
      nim: "F3418060",
      jurusan: "D-3 Perpajakan",
      email: "sekarpalupi89@student.uns.ac.id",
    },
    {
      name: "Silvia Anita Ayuningsih",
      nim: "F3418061",
      jurusan: "D-3 Perpajakan",
      email: "nitasilvia99@student.uns.ac.id",
    },
    {
      name: "Siska Rahmawati",
      nim: "F3418062",
      jurusan: "D-3 Perpajakan",
      email: "siskarahmawati@student.uns.ac.id",
    },
    {
      name: "Syahreza Putra",
      nim: "F3418063",
      jurusan: "D-3 Perpajakan",
      email: "syahrezaputra@student.uns.ac.id",
    },
    {
      name: "Tiara Vitri Ardhani",
      nim: "F3418064",
      jurusan: "D-3 Perpajakan",
      email: "tiarardhani08@student.uns.ac.id",
    },
    {
      name: "Tyssal Widowati Astuti",
      nim: "F3418065",
      jurusan: "D-3 Perpajakan",
      email: "wtyssal@student.uns.ac.id",
    },
    {
      name: "VINCENSIA NATHASYA QUEENTA PUTRI SUKMA",
      nim: "F3418066",
      jurusan: "D-3 Perpajakan",
      email: "vincensianathasya@student.uns.ac.id",
    },
    {
      name: "Windy Inggrita Kusuma Wardani",
      nim: "F3418067",
      jurusan: "D-3 Perpajakan",
      email: "inggritawindy37@student.uns.ac.id",
    },
    {
      name: "Yati Susanti",
      nim: "F3418068",
      jurusan: "D-3 Perpajakan",
      email: "yatisusanti11@student.uns.ac.id",
    },
    {
      name: "Yohanes Wahyu Mulyadi",
      nim: "F3418069",
      jurusan: "D-3 Perpajakan",
      email: "yohanmul19@student.uns.ac.id",
    },
    {
      name: "Yoshua Aji Satya Nugrahadi",
      nim: "F3418070",
      jurusan: "D-3 Perpajakan",
      email: "yoshuanugrahadi@student.uns.ac.id",
    },
    {
      name: "Zainal Arifin",
      nim: "F3418071",
      jurusan: "D-3 Perpajakan",
      email: "zainalarf999@student.ac.co.id",
    },
    {
      name: "Achmad Kurniawan",
      nim: "F3419001",
      jurusan: "D-3 Perpajakan",
      email: "wawn830114@student.uns.ac.id",
    },
    {
      name: "Adinda Nirmala Firdasyari",
      nim: "F3419002",
      jurusan: "D-3 Perpajakan",
      email: "adinda19@student.uns.ac.id",
    },
    {
      name: "Adine Talita Dewi",
      nim: "F3419003",
      jurusan: "D-3 Perpajakan",
      email: "adinetd@student.uns.ac.id",
    },
    {
      name: "Afifah Mirna Noviyanti",
      nim: "F3419004",
      jurusan: "D-3 Perpajakan",
      email: "afifahmirna112@student.uns.ac.id",
    },
    {
      name: "Agrandhisa Zen Rajendra",
      nim: "F3419005",
      jurusan: "D-3 Perpajakan",
      email: "agrandhisazen@student.uns.ac.id",
    },
    {
      name: "Agustina Fati Trinitasia Laoli",
      nim: "F3419006",
      jurusan: "D-3 Perpajakan",
      email: "Tasyalaoli00@student.uns.co.id",
    },
    {
      name: "Anggun Christiyani",
      nim: "F3419008",
      jurusan: "D-3 Perpajakan",
      email: "achristiyani45@student.uns.ac.id",
    },
    {
      name: "Anisa Pangesti",
      nim: "F3419009",
      jurusan: "D-3 Perpajakan",
      email: "anisapangesti3@student.uns.ac.id",
    },
    {
      name: "Arif Budi Utomo",
      nim: "F3419011",
      jurusan: "D-3 Perpajakan",
      email: "arifutomo8@student.uns.ac.id",
    },
    {
      name: "Arifin Nur Wicaksono",
      nim: "F3419012",
      jurusan: "D-3 Perpajakan",
      email: "arifin.nw20@student.uns.ac.id",
    },
    {
      name: "Artwidi Fitriangrum",
      nim: "F3419013",
      jurusan: "D-3 Perpajakan",
      email: "artwidifi.12@student.uns.ac.id",
    },
    {
      name: "Aurelia Ajeng Tiara Dewi",
      nim: "F3419016",
      jurusan: "D-3 Perpajakan",
      email: "aureliadewi69@student.uns.ac.id",
    },
    {
      name: "Bandu Aji Pambudi",
      nim: "F3419017",
      jurusan: "D-3 Perpajakan",
      email: "banduajip13@student.uns.ac.id",
    },
    {
      name: "CLARA SETIYARA",
      nim: "F3419018",
      jurusan: "D-3 Perpajakan",
      email: "clarasetiyara077@student.uns.ac.id",
    },
    {
      name: "DEA CARRISYA SHAFIRA",
      nim: "F3419019",
      jurusan: "D-3 Perpajakan",
      email: "deascarrr@student.uns.ac.id",
    },
    {
      name: "Devina Kusuma Putri",
      nim: "F3419020",
      jurusan: "D-3 Perpajakan",
      email: "devinakusuma@student.uns.ac.id",
    },
    {
      name: "Exsa Clorensia Jovanka",
      nim: "F3419021",
      jurusan: "D-3 Perpajakan",
      email: "exsaclorensia@student.uns.ac.id",
    },
    {
      name: "Fajar Adi Pratama",
      nim: "F3419022",
      jurusan: "D-3 Perpajakan",
      email: "namikazekirigami@student.uns.ac.id",
    },
    {
      name: "FARAH RAHMAH LIYA",
      nim: "F3419023",
      jurusan: "D-3 Perpajakan",
      email: "farahrahmahliya@student.uns.ac.id",
    },
    {
      name: "Ferry Yuliyanto",
      nim: "F3419025",
      jurusan: "D-3 Perpajakan",
      email: "ferry.yuliyanto27@student.uns.ac.id",
    },
    {
      name: "Firda Novalia Shanastri",
      nim: "F3419026",
      jurusan: "D-3 Perpajakan",
      email: "firdanovalia@student.uns.ac.id",
    },
    {
      name: "Fitra Nur Hidayatulloh",
      nim: "F3419027",
      jurusan: "D-3 Perpajakan",
      email: "Fitra_hidayat180@student.uns.ac.id",
    },
    {
      name: "Harianto Wibowo",
      nim: "F3419029",
      jurusan: "D-3 Perpajakan",
      email: "hariantoelkusa03@student.uns.ac.id",
    },
    {
      name: "Hasna Nur Hidayati",
      nim: "F3419030",
      jurusan: "D-3 Perpajakan",
      email: "hasnanurhidayati@student.uns.ac.id",
    },
    {
      name: "Holly Agnesia Elizabeth Djioen",
      nim: "F3419031",
      jurusan: "D-3 Perpajakan",
      email: "Holly_agnesia20@student.ac.id",
    },
    {
      name: "Indah Amaliasari",
      nim: "F3419032",
      jurusan: "D-3 Perpajakan",
      email: "Indah.amaliasari03@student.uns.ac.id",
    },
    {
      name: "Intan Nur Layly",
      nim: "F3419033",
      jurusan: "D-3 Perpajakan",
      email: "Intan.layly84@student.uns.ac.id",
    },
    {
      name: "Isna Larasati Arianda",
      nim: "F3419034",
      jurusan: "D-3 Perpajakan",
      email: "isnalarasatia@student.uns.ac.id",
    },
    {
      name: "Lalita Vistara",
      nim: "F3419035",
      jurusan: "D-3 Perpajakan",
      email: "Lalitavistara8@student.uns.ac.id",
    },
    {
      name: "Liliana Dina Kusumawijaya",
      nim: "F3419037",
      jurusan: "D-3 Perpajakan",
      email: "lilianadn7@student.uns.ac.id",
    },
    {
      name: "Lintang Dwi Anggono Sakti",
      nim: "F3419038",
      jurusan: "D-3 Perpajakan",
      email: "lintangdas@student.uns.ac.id",
    },
    {
      name: "Muhammad Haidar Yusuf N",
      nim: "F3419039",
      jurusan: "D-3 Perpajakan",
      email: "muhammadhaidar2001@student.uns.ac.id",
    },
    {
      name: "Muhammad Hasbi",
      nim: "F3419040",
      jurusan: "D-3 Perpajakan",
      email: "muhammadhasbi2828@student.uns.ac.id",
    },
    {
      name: "Mutiara Reiza Azisyah",
      nim: "F3419041",
      jurusan: "D-3 Perpajakan",
      email: "mutiarareiza@student.uns.ac.id",
    },
    {
      name: "Nabilla Meitha Fakhri Nisa",
      nim: "F3419042",
      jurusan: "D-3 Perpajakan",
      email: "nabillameitha18@student.uns.ac.id",
    },
    {
      name: "Nadia Wilva Amanda",
      nim: "F3419043",
      jurusan: "D-3 Perpajakan",
      email: "nadiawilvaamanda30@student.uns.ac.id",
    },
    {
      name: "Nindita Nurul Athifah",
      nim: "F3419044",
      jurusan: "D-3 Perpajakan",
      email: "ninditanurul@student.uns.ac.id",
    },
    {
      name: "Nur Muhammad Faiq",
      nim: "F3419045",
      jurusan: "D-3 Perpajakan",
      email: "nurmfaiq20@student.uns.ac.id",
    },
    {
      name: "Nurma Handika Widyawati",
      nim: "F3419046",
      jurusan: "D-3 Perpajakan",
      email: "nurmahandika@student.uns.ac.id",
    },
    {
      name: "Nurul Novitasari",
      nim: "F3419047",
      jurusan: "D-3 Perpajakan",
      email: "nurul.24novitasari@student.uns.ac.id",
    },
    {
      name: "Rahma Aulia",
      nim: "F3419048",
      jurusan: "D-3 Perpajakan",
      email: "rahmaauliaaaaa@student.uns.ac.id",
    },
    {
      name: "Rahma Esnaeni Widya Oktaviani",
      nim: "F3419049",
      jurusan: "D-3 Perpajakan",
      email: "rahmaesnaeni30@student.uns.ac.id",
    },
    {
      name: "Rahma Naditya Anggraeni",
      nim: "F3419050",
      jurusan: "D-3 Perpajakan",
      email: "nadityarahma@student.uns.ac.id",
    },
    {
      name: "Renata Adisty Putri Setijawan",
      nim: "F3419052",
      jurusan: "D-3 Perpajakan",
      email: "renataadistyps@student.uns.ac.id",
    },
    {
      name: "Ridho Fatkhur Rohim",
      nim: "F3419053",
      jurusan: "D-3 Perpajakan",
      email: "ridhofatkhur@student.uns.ac.id",
    },
    {
      name: "SAFA KHOIRUNNISA",
      nim: "F3419054",
      jurusan: "D-3 Perpajakan",
      email: "safakhoirunnisa15@student.uns.ac.id",
    },
    {
      name: "Sekar Arum Fanani",
      nim: "F3419056",
      jurusan: "D-3 Perpajakan",
      email: "sekararumf4@student.uns.ac.id",
    },
    {
      name: "Sellyna Bunga Ayu Melati Sukma",
      nim: "F3419057",
      jurusan: "D-3 Perpajakan",
      email: "sellynabunga1308@student.uns.ac.id",
    },
    {
      name: "Shefrida Listhyanita",
      nim: "F3419058",
      jurusan: "D-3 Perpajakan",
      email: "listhyanitas@student.uns.ac.id",
    },
    {
      name: "Sherly Anggraini Satmoko",
      nim: "F3419059",
      jurusan: "D-3 Perpajakan",
      email: "Sanggraini70@student.uns.ac.id",
    },
    {
      name: "sindy nur isnaeny",
      nim: "F3419060",
      jurusan: "D-3 Perpajakan",
      email: "isnaenynur@student.uns.ac.id",
    },
    {
      name: "SONIA A'LAINA SHALIHAH",
      nim: "F3419061",
      jurusan: "D-3 Perpajakan",
      email: "zsoniasas@student.uns.ac.id",
    },
    {
      name: "Veccy Utiana",
      nim: "F3419062",
      jurusan: "D-3 Perpajakan",
      email: "veccy_utianaumran@student.uns.ac.id",
    },
    {
      name: "Wafiah Rizky Astarah",
      nim: "F3419063",
      jurusan: "D-3 Perpajakan",
      email: "wafiahrizkya@student.uns.ac.id",
    },
    {
      name: "Wahyu Fujiati",
      nim: "F3419064",
      jurusan: "D-3 Perpajakan",
      email: "wahyufujiati2001@student.uns.ac.id",
    },
    {
      name: "Wan Nabila Putri Indriani",
      nim: "F3419065",
      jurusan: "D-3 Perpajakan",
      email: "wannabila@student.uns.ac.id",
    },
    {
      name: "Wira Afsari Wanandhita",
      nim: "F3419066",
      jurusan: "D-3 Perpajakan",
      email: "wira16dhita@student.uns.ac.id",
    },
    {
      name: "Wiravasudha Nityapushta",
      nim: "F3419067",
      jurusan: "D-3 Perpajakan",
      email: "wiravasudha_nityapushta@student.uns.ac.id",
    },
    {
      name: "Wulan Setiyowati",
      nim: "F3419068",
      jurusan: "D-3 Perpajakan",
      email: "wulansetiyowati@student.uns.ac.id",
    },
    {
      name: "Abigaily Iristansia",
      nim: "V1520002",
      jurusan: "D-3 Perpajakan",
      email: "abigailyiristansia@student.uns.ac.id",
    },
    {
      name: "Aizka Wilda Salsabila",
      nim: "V1520004",
      jurusan: "D-3 Perpajakan",
      email: "aizkawilda@student.uns.ac.id",
    },
    {
      name: "Alfira Fitria Dewi Zulkarnain",
      nim: "V1520005",
      jurusan: "D-3 Perpajakan",
      email: "zulkarnainalfira@student.uns.ac.id",
    },
    {
      name: "Alifia Putrianto",
      nim: "V1520006",
      jurusan: "D-3 Perpajakan",
      email: "alifiaputrianto@student.uns.ac.id",
    },
    {
      name: "Amalia Alfrida Rahmawati",
      nim: "V1520007",
      jurusan: "D-3 Perpajakan",
      email: "Amaliaalfrida35@student.uns.ac.id",
    },
    {
      name: "Amalia Rahmi Safitri",
      nim: "V1520008",
      jurusan: "D-3 Perpajakan",
      email: "amaliarahmi21@student.uns.ac.id",
    },
    {
      name: "Anita Astri Banowati",
      nim: "V1520010",
      jurusan: "D-3 Perpajakan",
      email: "anitaastribano22@student.uns.ac.id",
    },
    {
      name: "Annisa Aulia Rahma",
      nim: "V1520011",
      jurusan: "D-3 Perpajakan",
      email: "Annisaa_rahma@student.uns.ac.id",
    },
    {
      name: "Annisa Dwi Utami",
      nim: "V1520013",
      jurusan: "D-3 Perpajakan",
      email: "Annisadwi@student.UNS.ac.id",
    },
    {
      name: "Ardhi Waskito",
      nim: "V1520014",
      jurusan: "D-3 Perpajakan",
      email: "ardhiwaskito@student.uns.ac.id",
    },
    {
      name: "Arella Listi Yuniamara",
      nim: "V1520015",
      jurusan: "D-3 Perpajakan",
      email: "arellaly25@student.uns.ac.id",
    },
    {
      name: "Ari Rohmansyah Sistanto",
      nim: "V1520016",
      jurusan: "D-3 Perpajakan",
      email: "arirohmansyahs@student.uns.ac.id",
    },
    {
      name: "Arief Hidayat Jati",
      nim: "V1520017",
      jurusan: "D-3 Perpajakan",
      email: "ariefhj112@student.uns.ac.id",
    },
    {
      name: "Arlinda Febiola",
      nim: "V1520018",
      jurusan: "D-3 Perpajakan",
      email: "arlindafebiola@student.uns.ac.id",
    },
    {
      name: "Atika Suci Raadhani",
      nim: "V1520019",
      jurusan: "D-3 Perpajakan",
      email: "ramadhani23@student.uns.ac.id",
    },
    {
      name: "Aulia Maurice Aidaina",
      nim: "V1520020",
      jurusan: "D-3 Perpajakan",
      email: "Auliamauricee@student.uns.ac.id",
    },
    {
      name: "Ayu Lupita Siva Alicia",
      nim: "V1520022",
      jurusan: "D-3 Perpajakan",
      email: "lupitaalicia73@student.uns.ac.id",
    },
    {
      name: "Ayu Realita Amianni",
      nim: "V1520023",
      jurusan: "D-3 Perpajakan",
      email: "ayura02@student.uns.ac.id",
    },
    {
      name: "Ayu Sasi Hapsari",
      nim: "V1520024",
      jurusan: "D-3 Perpajakan",
      email: "ayusasi.hapsari@student.uns.ac.id",
    },
    {
      name: "Bima Zulfan Rossady",
      nim: "V1520025",
      jurusan: "D-3 Perpajakan",
      email: "dzokamm@student.uns.ac.id",
    },
    {
      name: "Bimo Rus Widyantoro",
      nim: "V1520026",
      jurusan: "D-3 Perpajakan",
      email: "bimorus31@student.uns.ac.id",
    },
    {
      name: "Cantika Berlian Argusta Putri",
      nim: "V1520027",
      jurusan: "D-3 Perpajakan",
      email: "Cantikaberliana78@student.uns.ac.id",
    },
    {
      name: "David",
      nim: "V1520029",
      jurusan: "D-3 Perpajakan",
      email: "david@student.uns.ac.id",
    },
    {
      name: "Dedi Tri Kurniawan",
      nim: "V1520030",
      jurusan: "D-3 Perpajakan",
      email: "dedi.trikurniawan99@student.uns.ac.id",
    },
    {
      name: "Devara Wahyu Agathon",
      nim: "V1520031",
      jurusan: "D-3 Perpajakan",
      email: "devaraagathon@student.uns.ac.id",
    },
    {
      name: "Dianda Achmada Laila Sari",
      nim: "V1520032",
      jurusan: "D-3 Perpajakan",
      email: "diandaals@student.uns.ac.id",
    },
    {
      name: "dzaky daffa anditama",
      nim: "V1520033",
      jurusan: "D-3 Perpajakan",
      email: "dzakydaffaa11@student.uns.ac.id",
    },
    {
      name: "Elian Yafi Yudhiantama",
      nim: "V1520034",
      jurusan: "D-3 Perpajakan",
      email: "elianyafi@student.uns.ac.id",
    },
    {
      name: "ELISHA VIVIANA KUSUMA ATMAJA",
      nim: "V1520035",
      jurusan: "D-3 Perpajakan",
      email: "elishaviviana@student.uns.ac.id",
    },
    {
      name: "Erni Arifin",
      nim: "V1520036",
      jurusan: "D-3 Perpajakan",
      email: "erniarifin@student.uns.ac.id",
    },
    {
      name: "Faestaningtyas Windhyarti Siwi",
      nim: "V1520037",
      jurusan: "D-3 Perpajakan",
      email: "faestan18@student.uns.ac.id",
    },
    {
      name: "Fatikha Karunia putri",
      nim: "V1520038",
      jurusan: "D-3 Perpajakan",
      email: "Fatikhakarunia01@student.uns.ac.id",
    },
    {
      name: "Friska Shalomita Putri Prastika",
      nim: "V1520039",
      jurusan: "D-3 Perpajakan",
      email: "friskashalomita11@student.uns.ac.id",
    },
    {
      name: "Grady Berliano Errinta Putra",
      nim: "V1520040",
      jurusan: "D-3 Perpajakan",
      email: "gradybep@student.uns.ac.id",
    },
    {
      name: "Hafidz Ardiyansyah Effendi",
      nim: "V1520041",
      jurusan: "D-3 Perpajakan",
      email: "effendi135@student.uns.ac.id",
    },
    {
      name: "Hafizh Rauf Firdaus",
      nim: "V1520042",
      jurusan: "D-3 Perpajakan",
      email: "hafizhrauf@student.uns.ac.id",
    },
    {
      name: "Hendrawan Adji Prakasa",
      nim: "V1520043",
      jurusan: "D-3 Perpajakan",
      email: "hendrawanap@student.uns.ac.id",
    },
    {
      name: "Inggri Fryska Wahyuningtias",
      nim: "V1520044",
      jurusan: "D-3 Perpajakan",
      email: "Inggrifryska_12@student.uns.ac.id",
    },
    {
      name: "Irma Oktaviani",
      nim: "V1520045",
      jurusan: "D-3 Perpajakan",
      email: "irmaoktaviani284@student uns.ac.id",
    },
    {
      name: "Istiqomaria",
      nim: "V1520046",
      jurusan: "D-3 Perpajakan",
      email: "istiqomaria30@student.uns.ac.id",
    },
    {
      name: "Kelvia Deanika Mulyana",
      nim: "V1520048",
      jurusan: "D-3 Perpajakan",
      email: "kelviadeanika7@student.uns.ac.id",
    },
    {
      name: "Lovezer Enjela Helguara",
      nim: "V1520049",
      jurusan: "D-3 Perpajakan",
      email: "lovezer14@student.uns.ac.id",
    },
    {
      name: "Lutfi Khoirinnisak",
      nim: "V1520050",
      jurusan: "D-3 Perpajakan",
      email: "lutfinisak.18@student.uns.ac.id",
    },
    {
      name: "Maita Cahyani",
      nim: "V1520051",
      jurusan: "D-3 Perpajakan",
      email: "maitacahyani@student.uns.ac.id",
    },
    {
      name: "Manduria Setia Dewi",
      nim: "V1520052",
      jurusan: "D-3 Perpajakan",
      email: "Manduriasetiadewi@student.uns.ac.id",
    },
    {
      name: "Maqdissia Aisha Putri Nurfikriani",
      nim: "V1520053",
      jurusan: "D-3 Perpajakan",
      email: "maqdissiaaisha@student.uns.ac.id",
    },
    {
      name: "Maya uswatun khasanah",
      nim: "V1520054",
      jurusan: "D-3 Perpajakan",
      email: "mayauswatun28@student.uns.ac.id",
    },
    {
      name: "Melvin Tsabitul Ismi",
      nim: "V1520055",
      jurusan: "D-3 Perpajakan",
      email: "melvintsabitul11@student.uns.ac.id",
    },
    {
      name: "Michael Anthonu Dewantoro",
      nim: "V1520056",
      jurusan: "D-3 Perpajakan",
      email: "michael.anthony2466@student.uns.ac.id",
    },
    {
      name: "Mohammad budiarto hidayat",
      nim: "V1520057",
      jurusan: "D-3 Perpajakan",
      email: "Budiarto301001@student.uns.ac.id",
    },
    {
      name: "MUTIA SUKMA PRADIPTA",
      nim: "V1520058",
      jurusan: "D-3 Perpajakan",
      email: "Mutiasukma@student.uns.ac.id",
    },
    {
      name: "NABILA IFFAH ROMADHONI",
      nim: "V1520059",
      jurusan: "D-3 Perpajakan",
      email: "nabilaiffah.rmdhn_17@student.uns.ac.id",
    },
    {
      name: "Nadila Nur Azizzah",
      nim: "V1520060",
      jurusan: "D-3 Perpajakan",
      email: "dilanurazizah2001@student.uns.ac.id",
    },
    {
      name: "Neysa Pramesti Kartikasari",
      nim: "V1520062",
      jurusan: "D-3 Perpajakan",
      email: "neysapramesti@student.uns.ac.id",
    },
    {
      name: "Ni Putu Revi Mariska Arini",
      nim: "V1520063",
      jurusan: "D-3 Perpajakan",
      email: "revimariskaarini.12@student.uns.ac.id",
    },
    {
      name: "Nihlatul Fauziah",
      nim: "V1520064",
      jurusan: "D-3 Perpajakan",
      email: "nihlatulfauziah03@student.uns.ac.id",
    },
    {
      name: "olvin octovin rumawi",
      nim: "V1520065",
      jurusan: "D-3 Perpajakan",
      email: "olvinoctovin@student.uns.ac.id",
    },
    {
      name: "Regita Maria Angela",
      nim: "V1520088",
      jurusan: "D-3 Perpajakan",
      email: "regitamariaa@student.uns.ac.id",
    },
    {
      name: "Rekha Tiara Kristy",
      nim: "V1520066",
      jurusan: "D-3 Perpajakan",
      email: "rekhatiara1003@student.uns.ac.id",
    },
    {
      name: "Rezza Novita Sari",
      nim: "V1520068",
      jurusan: "D-3 Perpajakan",
      email: "rezza.novitasari@student.uns.ac.id",
    },
    {
      name: "Richky Auria Hidayat",
      nim: "V1520069",
      jurusan: "D-3 Perpajakan",
      email: "richkyauriahidayat@student.uns.ac.id",
    },
    {
      name: "Rizky Intan Cahyani",
      nim: "V1520071",
      jurusan: "D-3 Perpajakan",
      email: "Intancahyaa21@student.uns.ac.id",
    },
    {
      name: "Rossa Agustin Setyoningrum",
      nim: "V1520072",
      jurusan: "D-3 Perpajakan",
      email: "rossaagustin@student.uns.ac.id",
    },
    {
      name: "Ruhiatin Hasanah",
      nim: "V1520073",
      jurusan: "D-3 Perpajakan",
      email: "annaruhiatin@student.uns.ac.id",
    },
    {
      name: "Safira Herawati",
      nim: "V1520074",
      jurusan: "D-3 Perpajakan",
      email: "safiraherawati354@student.uns.ac.id",
    },
    {
      name: "SEPTIAN KHOERUL HUDA",
      nim: "V1520089",
      jurusan: "D-3 Perpajakan",
      email: "septiankhd11@student.uns.ac.id",
    },
    {
      name: "SHINDY LATHIFAH",
      nim: "V1520076",
      jurusan: "D-3 Perpajakan",
      email: "shindylathifahhh@student.uns.ac.id",
    },
    {
      name: "Sholihatun Akmalia",
      nim: "V1520077",
      jurusan: "D-3 Perpajakan",
      email: "sholihatunakmalia13@student.ac.id",
    },
    {
      name: "Siti Purwaningsih",
      nim: "V1520078",
      jurusan: "D-3 Perpajakan",
      email: "sitipurwaningsih@student.uns.ac.id",
    },
    {
      name: "Surya Wahyudi Putro",
      nim: "V1520079",
      jurusan: "D-3 Perpajakan",
      email: "surya_wp@student.uns.ac.id",
    },
    {
      name: "Syifaniar Sekar Kinanti",
      nim: "V1520080",
      jurusan: "D-3 Perpajakan",
      email: "syifaniarsekarkinant@student.uns.ac.id",
    },
    {
      name: "Taffana Indana Fianera",
      nim: "V1520081",
      jurusan: "D-3 Perpajakan",
      email: "taffanaindanaf@student.uns.ac.id",
    },
    {
      name: "Trianika Fiqhara",
      nim: "V1520082",
      jurusan: "D-3 Perpajakan",
      email: "trianikafiqhara@student.uns.ac.id",
    },
    {
      name: "Tyas Renita Sari",
      nim: "V1520083",
      jurusan: "D-3 Perpajakan",
      email: "tyasrenita@student.uns.ac.id",
    },
    {
      name: "Veronika Lestari Luron",
      nim: "V1520084",
      jurusan: "D-3 Perpajakan",
      email: "veronikalestariluron@student.uns.ac.id",
    },
    {
      name: "Violina Ratu Salsa",
      nim: "V1520001",
      jurusan: "D-3 Perpajakan",
      email: "violinaratusalsa21@student.uns.ac.id",
    },
    {
      name: "Wiwid Wahyu Budiasih",
      nim: "V1520090",
      jurusan: "D-3 Perpajakan",
      email: "wiwidwahyu@student.uns.ac.id",
    },
    {
      name: "Yulinda Putri Khoirunisa",
      nim: "V1520085",
      jurusan: "D-3 Perpajakan",
      email: "yulindaputri@student.uns.ac.id",
    },
    {
      name: "Zaytun Azzahra",
      nim: "V1520086",
      jurusan: "D-3 Perpajakan",
      email: "zaytunzahra@student.uns.ac.id",
    },
    {
      name: "Zelvia octa valentina",
      nim: "V1520087",
      jurusan: "D-3 Perpajakan",
      email: "Zelvia@student.uns.ac.id",
    },
    {
      name: "abigael natali prisma hasiyono",
      nim: "B3119001",
      jurusan: "D-3 Bahasa Inggris",
      email: "abigaelnatali8@student.uns.ac.id",
    },
    {
      name: "ADAM NAUFAL RAMADHAN",
      nim: "B3119002",
      jurusan: "D-3 Bahasa Inggris",
      email: "naufal@student.uns.ac.id",
    },
    {
      name: "ADHITYAS PRAMESTINA WAHYU BAHARSYAH",
      nim: "B3119003",
      jurusan: "D-3 Bahasa Inggris",
      email: "tyaspramestina@student.uns.ac.id",
    },
    {
      name: "AGUNG ADI KURNIAWAN",
      nim: "B3119004",
      jurusan: "D-3 Bahasa Inggris",
      email: "adknw25@student.uns.ac.id",
    },
    {
      name: "AKMAL MAULANA UDAYANA",
      nim: "B3119005",
      jurusan: "D-3 Bahasa Inggris",
      email: "udayana142001@student.uns.ac.id",
    },
    {
      name: "ALIFIA NANDA AYUNINGTYAS",
      nim: "B3119006",
      jurusan: "D-3 Bahasa Inggris",
      email: "nanda@student.uns.ac.id",
    },
    {
      name: "AMARA ERSYAF FARAHDEA",
      nim: "B3119007",
      jurusan: "D-3 Bahasa Inggris",
      email: "amarafarahdea86@student.uns.ac.id",
    },
    {
      name: "Ammara Khaulani Laudzina Iskandar",
      nim: "B3119008",
      jurusan: "D-3 Bahasa Inggris",
      email: "ammara.kli203@student.uns.ac.id",
    },
    {
      name: "ARNENDYA SUGI AGUSTINA",
      nim: "B3119009",
      jurusan: "D-3 Bahasa Inggris",
      email: "arnendyatina.18@student.uns.ac.id",
    },
    {
      name: "Arnetta Amalia Kartika Putri",
      nim: "B3119010",
      jurusan: "D-3 Bahasa Inggris",
      email: "adn@student.uns.ac.id",
    },
    {
      name: "ARYA ARISTA WIDYADHANA",
      nim: "B3119011",
      jurusan: "D-3 Bahasa Inggris",
      email: "aristaarya09@student.uns.ac.id",
    },
    {
      name: "BAGUS ADI PUTRA",
      nim: "B3119014",
      jurusan: "D-3 Bahasa Inggris",
      email: "bagusap99@student.uns.ac.id",
    },
    {
      name: "BELLA SYAFA PARDIYONO",
      nim: "B3119015",
      jurusan: "D-3 Bahasa Inggris",
      email: "bellasyafa@student.uns.ac.id",
    },
    {
      name: "CINDY PUSPITASARI",
      nim: "B3119016",
      jurusan: "D-3 Bahasa Inggris",
      email: "cindypuspita@student.uns.ac.id",
    },
    {
      name: "COSA GUSTI ARMASATRIA",
      nim: "B3119017",
      jurusan: "D-3 Bahasa Inggris",
      email: "cosaarma15@student.uns.ac.id",
    },
    {
      name: "DIMAS PRATOMO",
      nim: "B3119018",
      jurusan: "D-3 Bahasa Inggris",
      email: "dimaspratomo7@student.uns.ac.id",
    },
    {
      name: "HANIFAH MUSTIKA SUCI",
      nim: "B3119020",
      jurusan: "D-3 Bahasa Inggris",
      email: "hanifams00@student.uns.ac.id",
    },
    {
      name: "HARIZKA RESTY UTAMI",
      nim: "B3119021",
      jurusan: "D-3 Bahasa Inggris",
      email: "rizkarestis.01@student.uns.ac.id",
    },
    {
      name: "HENRY CRISNA SUSANTO",
      nim: "B3119022",
      jurusan: "D-3 Bahasa Inggris",
      email: "henrycrisna@student.uns.ac.id",
    },
    {
      name: "INDRIANA PRAMUSINTA",
      nim: "B3119023",
      jurusan: "D-3 Bahasa Inggris",
      email: "indrianapramusinta@student.uns.ac.id",
    },
    {
      name: "MARISA ISTYANA BALQIST",
      nim: "B3119024",
      jurusan: "D-3 Bahasa Inggris",
      email: "marisablq14@student.uns.ac.id",
    },
    {
      name: "MEILINA SAPUTRI",
      nim: "B3119025",
      jurusan: "D-3 Bahasa Inggris",
      email: "Meilina55.saputri@student.uns.ac.id",
    },
    {
      name: "NAUFAL ALI",
      nim: "B3119026",
      jurusan: "D-3 Bahasa Inggris",
      email: "naufalali@student.uns.ac.id",
    },
    {
      name: "NDARURIANTI",
      nim: "B3119027",
      jurusan: "D-3 Bahasa Inggris",
      email: "rurianti214@student.uns.ac.id",
    },
    {
      name: "NI DAUL FITRI",
      nim: "B3119042",
      jurusan: "D-3 Bahasa Inggris",
      email: "nidaulfitri@student.uns.ac.id",
    },
    {
      name: "NURLAILY NUHAYYUNNABILAH",
      nim: "B3119028",
      jurusan: "D-3 Bahasa Inggris",
      email: "nurlailynuhayyunnabilah04@student.uns.ac.id",
    },
    {
      name: "PUTRI FEBRIYANTI",
      nim: "B3119030",
      jurusan: "D-3 Bahasa Inggris",
      email: "putrifebri1462@student.uns.ac.id",
    },
    {
      name: "RESTI MAILANI",
      nim: "B3119031",
      jurusan: "D-3 Bahasa Inggris",
      email: "restimail.ani2000@student.uns.ac.id",
    },
    {
      name: "REZA ALFIAN FANIA PUTRA",
      nim: "B3119032",
      jurusan: "D-3 Bahasa Inggris",
      email: "reza.alfian676@student.uns.ac.id",
    },
    {
      name: "SHAFFIRA NAULIA RIFANI",
      nim: "B3119033",
      jurusan: "D-3 Bahasa Inggris",
      email: "shaffiranauliar@student.uns.ac.id",
    },
    {
      name: "SUCI AISYAH",
      nim: "B3119034",
      jurusan: "D-3 Bahasa Inggris",
      email: "suciaisyah21@student.uns.ac.id",
    },
    {
      name: "TASYA RAHMAWATI",
      nim: "B3119035",
      jurusan: "D-3 Bahasa Inggris",
      email: "tasyarahmawati17@student.uns.ac.id",
    },
    {
      name: "TAUFIQ MUKTI ATMAJA",
      nim: "B3119036",
      jurusan: "D-3 Bahasa Inggris",
      email: "taufiqatmajawrs@student.uns.ac.id",
    },
    {
      name: "TESALONIKA PUSPITANING TYAS K.P.",
      nim: "B3119037",
      jurusan: "D-3 Bahasa Inggris",
      email: "tesalonikapuspita911@student.uns.ac.id",
    },
    {
      name: "TRI SETYONINGSIH",
      nim: "B3119038",
      jurusan: "D-3 Bahasa Inggris",
      email: "tstn0013@student.uns.ac.id",
    },
    {
      name: "WINDI ANISA PUTRI",
      nim: "B3119039",
      jurusan: "D-3 Bahasa Inggris",
      email: "windi.ansp12@student.uns.ac.id",
    },
    {
      name: "Yoanangelina Fitri",
      nim: "B3119040",
      jurusan: "D-3 Bahasa Inggris",
      email: "yoanangelina626@student.uns.ac.id",
    },
    {
      name: "ADITYA RANGGA PUTRA PAMUNGKAS",
      nim: "V0120001",
      jurusan: "D-3 Bahasa Inggris",
      email: "Aditya.rangga@student.uns.ac.id",
    },
    {
      name: "Aina Fatikha Rahma",
      nim: "V0120003",
      jurusan: "D-3 Bahasa Inggris",
      email: "ainafatihaa@student.uns.ac.id",
    },
    {
      name: "ALIFIA QOTHRUNNADA",
      nim: "V0120004",
      jurusan: "D-3 Bahasa Inggris",
      email: "alifiaqothrunnada24@student.uns.ac.id",
    },
    {
      name: "ALVARO HARYOKUSUMO",
      nim: "V0120005",
      jurusan: "D-3 Bahasa Inggris",
      email: "alvarohk@student.uns.ac.id",
    },
    {
      name: "AMALIA NUR SASMITA",
      nim: "V0120006",
      jurusan: "D-3 Bahasa Inggris",
      email: "amalisasmitaa@student.uns.ac.id",
    },
    {
      name: "ANDINIMASAYU DWIKININDA KUSFIOKTALISA",
      nim: "V0120007",
      jurusan: "D-3 Bahasa Inggris",
      email: "andinimasayudk@student.uns.ac.id",
    },
    {
      name: "ANISAH LATHUF UTAMI",
      nim: "V0120010",
      jurusan: "D-3 Bahasa Inggris",
      email: "anisahlathufutami@student.uns.ac.id",
    },
    {
      name: "ANNISA YUSTITANIA SAUSAN",
      nim: "V0120011",
      jurusan: "D-3 Bahasa Inggris",
      email: "annisayustitaniaa@student.uns.ac.id",
    },
    {
      name: "ASLAMA DEA NOVITA RAHMAN",
      nim: "V0120012",
      jurusan: "D-3 Bahasa Inggris",
      email: "dea@student.uns.ac.id",
    },
    {
      name: "Atif Kasful Haq",
      nim: "V0120013",
      jurusan: "D-3 Bahasa Inggris",
      email: "atifkasfulhaq45@students.uns.ac.id",
    },
    {
      name: "AULIA RIZQI NAFTALY",
      nim: "V0120014",
      jurusan: "D-3 Bahasa Inggris",
      email: "aulia.rnaftaly@student.uns.ac.id",
    },
    {
      name: "DEVITA ANDREANI WIBOWO",
      nim: "V0120017",
      jurusan: "D-3 Bahasa Inggris",
      email: "devitaandreani@student.uns.ac.id",
    },
    {
      name: "DIVA ALIFIA FARIET",
      nim: "V0120018",
      jurusan: "D-3 Bahasa Inggris",
      email: "divalifiafariet@student.uns.ac.id",
    },
    {
      name: "DONA ALYA KUSUMA WARDANI",
      nim: "V0120019",
      jurusan: "D-3 Bahasa Inggris",
      email: "donaalyaa@student.uns.ac.id",
    },
    {
      name: "DYAH AFKARIYANI ANWAR",
      nim: "V0120020",
      jurusan: "D-3 Bahasa Inggris",
      email: "dyahanwar@student.uns.ac.id",
    },
    {
      name: "FARAH LUTFIAH HIDAYATI",
      nim: "V0120021",
      jurusan: "D-3 Bahasa Inggris",
      email: "farahlutfiahh12@student.uns.ac.id",
    },
    {
      name: "FAUZIYAH ANISA SABILAH",
      nim: "V0120022",
      jurusan: "D-3 Bahasa Inggris",
      email: "fzyhanisa@student.uns.ac.id",
    },
    {
      name: "FAZA ANANDA PUTRI",
      nim: "V0120024",
      jurusan: "D-3 Bahasa Inggris",
      email: "fazaanandaa@student.uns.ac.id",
    },
    {
      name: "FAZILA PUSPITA PUTRI",
      nim: "V0120025",
      jurusan: "D-3 Bahasa Inggris",
      email: "fazila.puspita@student.uns.ac.id",
    },
    {
      name: "FIKA SYAFFA NURINSANIA",
      nim: "V0120027",
      jurusan: "D-3 Bahasa Inggris",
      email: "fikasyaffa@student.uns.ac.id",
    },
    {
      name: "GRACELIA PUTRI AMMELIA",
      nim: "V0120028",
      jurusan: "D-3 Bahasa Inggris",
      email: "graceliaamel@student.uns.ac.id",
    },
    {
      name: "ISHMAHSAHNAF ADHWALFIYA",
      nim: "V0120029",
      jurusan: "D-3 Bahasa Inggris",
      email: "ishmahfiya@student.uns.ac.id",
    },
    {
      name: "KURNIAWAN TRI NUGROHO",
      nim: "V0120030",
      jurusan: "D-3 Bahasa Inggris",
      email: "kurniawan.tn@student.uns.ac.id",
    },
    {
      name: "MANDA KUSUMANING A",
      nim: "V0120031",
      jurusan: "D-3 Bahasa Inggris",
      email: "mandakusumaningayu@student.uns.ac.id",
    },
    {
      name: "MARCELLA INTAN PERMATA SARI",
      nim: "V0120032",
      jurusan: "D-3 Bahasa Inggris",
      email: "marcellaips@student.uns.ac.id",
    },
    {
      name: "MARETA KURNIA WIDOWATI",
      nim: "V0120033",
      jurusan: "D-3 Bahasa Inggris",
      email: "maretakurniawidowati@student.uns.ac.id",
    },
    {
      name: "MARIA ADVENSIA EKA PUSPITA",
      nim: "V0120034",
      jurusan: "D-3 Bahasa Inggris",
      email: "anglmariadv@student.uns.co.id",
    },
    {
      name: "MARIZA SANDY KISANAB",
      nim: "V0120035",
      jurusan: "D-3 Bahasa Inggris",
      email: "sandysetha@student.uns.ac.id",
    },
    {
      name: "MUH THORIQ ALFAQIH",
      nim: "V0120036",
      jurusan: "D-3 Bahasa Inggris",
      email: "thoriq.faqih@student.uns.ac.id",
    },
    {
      name: "Nabila Azzahra Irwan",
      nim: "V0120037",
      jurusan: "D-3 Bahasa Inggris",
      email: "nabilaazzahra656@student.uns.ac.id",
    },
    {
      name: "NASTITI WAHYU RAMADHANTI",
      nim: "V0120038",
      jurusan: "D-3 Bahasa Inggris",
      email: "dantinastiti15@student.uns.ac.id",
    },
    {
      name: "NASWA AYU AMALIA",
      nim: "V0120039",
      jurusan: "D-3 Bahasa Inggris",
      email: "naswaayu@student.uns.ac.id",
    },
    {
      name: "NUR MUQTAFA ALFARIZI",
      nim: "V0120042",
      jurusan: "D-3 Bahasa Inggris",
      email: "al15farizi@student.uns.ac.id",
    },
    {
      name: "Nur Rossy D",
      nim: "V0120043",
      jurusan: "D-3 Bahasa Inggris",
      email: "nurrossy@student.uns.ac.id",
    },
    {
      name: "NURUL HANIFA",
      nim: "V0120045",
      jurusan: "D-3 Bahasa Inggris",
      email: "nurulhanifa241@student.uns.ac.id",
    },
    {
      name: "PRASETYO ANGGAYUH WIJAYANTO",
      nim: "V0120046",
      jurusan: "D-3 Bahasa Inggris",
      email: "prasetyoanggayuh21@student.uns.ac.id",
    },
    {
      name: "PUTRI ARUM NINGSIH",
      nim: "V0120047",
      jurusan: "D-3 Bahasa Inggris",
      email: "putriarumningsih@student.uns.ac.id",
    },
    {
      name: "RAHMA NING TIAS",
      nim: "V0120048",
      jurusan: "D-3 Bahasa Inggris",
      email: "rahmaningtias@student.uns.ac.id",
    },
    {
      name: "RIKA SETYOWATI",
      nim: "V0120049",
      jurusan: "D-3 Bahasa Inggris",
      email: "rikasetyowati@student.uns ac.id",
    },
    {
      name: "Rista Fatimah Putri Santosa",
      nim: "V0120050",
      jurusan: "D-3 Bahasa Inggris",
      email: "ristafatimah3@studen.uns.ac.id",
    },
    {
      name: "RIZA OKTAVIYANI",
      nim: "V0120051",
      jurusan: "D-3 Bahasa Inggris",
      email: "riza.oktaviyani7@student.uns.ac.id",
    },
    {
      name: "RIZKIKA MEIDIANA RACHMAWATI",
      nim: "V0120052",
      jurusan: "D-3 Bahasa Inggris",
      email: "rizkikameidiana@student.uns.ac.id",
    },
    {
      name: "SALSA BILHA RIZKI PRATAMA",
      nim: "V0120053",
      jurusan: "D-3 Bahasa Inggris",
      email: "salsabilha_rizki25@student.uns.ac.id",
    },
    {
      name: "SALSABILA NISA ARUM ABIDAH",
      nim: "V0120054",
      jurusan: "D-3 Bahasa Inggris",
      email: "salsabilanisaaruma@student.uns.ac.id",
    },
    {
      name: "SAMDYA FAUZAN PANGESTU",
      nim: "V0120055",
      jurusan: "D-3 Bahasa Inggris",
      email: "samdyafauzan297@student.uns.ac.id",
    },
    {
      name: "SHAFIRA ANINDITA D.W",
      nim: "V0120056",
      jurusan: "D-3 Bahasa Inggris",
      email: "shafiraaninditadw@student.uns.ac.id",
    },
    {
      name: "Shinta Aprilia Nur Azizah",
      nim: "V0120057",
      jurusan: "D-3 Bahasa Inggris",
      email: "shintaapriliana@student.uns.ac.id",
    },
    {
      name: "STRIRAHINA EGI",
      nim: "V0120058",
      jurusan: "D-3 Bahasa Inggris",
      email: "strirahinaegi@student.uns.ac.id",
    },
    {
      name: "syafira aulia putri",
      nim: "V0120059",
      jurusan: "D-3 Bahasa Inggris",
      email: "syfra.au@student.uns.ac.id",
    },
    {
      name: "VANESSA GABRIELLA N. PUTRA",
      nim: "V0120060",
      jurusan: "D-3 Bahasa Inggris",
      email: "vanessagabrll26@student.uns.ac.id",
    },
    {
      name: "VELAISA ARTINA",
      nim: "V0120061",
      jurusan: "D-3 Bahasa Inggris",
      email: "velaisaartina@student.uns.ac.id",
    },
    {
      name: "VITA NAFISA",
      nim: "V0120062",
      jurusan: "D-3 Bahasa Inggris",
      email: "vitanfs@student.uns.ac.id",
    },
    {
      name: "WINDY MEIASANTI",
      nim: "V0120063",
      jurusan: "D-3 Bahasa Inggris",
      email: "windymeiasanti@student.uns.ac.id",
    },
    {
      name: "ZAHRA RAFIKASARI",
      nim: "V0120067",
      jurusan: "D-3 Bahasa Inggris",
      email: "zahraarafikaa98@student.uns.ac.id",
    },
    {
      name: "ZAKA AMELIA KAMAL",
      nim: "V0120069",
      jurusan: "D-3 Bahasa Inggris",
      email: "ameliakamal10@student.uns.ac.id",
    },
    {
      name: "ZENONI PUTRI ZULAIKA",
      nim: "V0120070",
      jurusan: "D-3 Bahasa Inggris",
      email: "zenoniputri437@student.uns.ac.id",
    },
    {
      name: "SYAMSI NUR FAJRI",
      nim: "V0120071",
      jurusan: "D-3 Bahasa Inggris",
      email: "syamsinf@student.uns.ac.id",
    },
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.jurusan = _participant.jurusan;
    participant.email = _participant.email;
    participant.session.id = "5ff6d82468e73d0f80348803";
    participant.session.number = "1";
    participant.session.min = new Date("2021-01-09T07:00:00.000Z");
    participant.session.max = new Date("2021-01-09T17:00:00.000Z");

    // Save and validate
    participant.save(function (err) {
      console.log(err);
      if (err) return res.status(500).json(err);

      Session.findById(participant.session.id, function (err, session) {
        console.log(err);
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

  /*var participant = new Participant();
  participant.name = req.body.name;
  participant.nim = req.body.nim;
  participant.email = req.body.email;
  participant.jurusan = req.body.jurusan;
  participant.session.id = req.body.sessionId;
  participant.session.number = req.body.sessionNumber;
  participant.session.min = new Date(req.body.sessionMin);
  participant.session.max = new Date(req.body.sessionMax);

  // Save and validate
  participant.save(function (err) {
    if (err) return res.status(500).json(err);

    Session.findById(req.body.sessionId, function (err, session) {
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

    return res.json({
      message: "New Participant Created!",
      data: participant,
    });
  });*/
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
