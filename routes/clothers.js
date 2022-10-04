const router = require("express").Router();
const Clothers = require("../models/Clothers");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newClothers = new Clothers(req.body);
    try {
      const savedClothers = await newClothers.save();
      res.status(201).json(savedClothers);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateClother = await Clothers.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateClother);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Clothers.findByIdAndDelete(req.params.id);
      res.status(200).json("The clother has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/find/:id", async (req, res) => {
  try {
    const clother = await Clothers.findById(req.params.id);
    res.status(200).json(clother);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random",  async (req, res) => {
  const type = req.query.type;
  let clother;
  try {
    if (type === "capuche") {
      clother = await Clothers.aggregate([
        
        { $sample: { size: 1 } },
      ]);
    } else {
      clother = await Clothers.aggregate([
      
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(clother);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Get Capuche
router.get("/capuche",async (req, res) => {

  try {
      const capuche = await Clothers.find({"type":"capuche"});
      res.status(200).json(capuche.reverse());
    } catch (err) {
      res.status(500).json(err);
    }


  
});
//Get Capuche
router.get("/veste",async (req, res) => {

  try {
      const capuche = await Clothers.find({"type":"veste"});
      res.status(200).json(capuche.reverse());
    } catch (err) {
      res.status(500).json(err);
    }


  
});

//Get pull
router.get("/pull",async (req, res) => {

  try {
    const pull = await Clothers.find({"type":"pull"});
    res.status(200).json(pull.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});

//pantalon
router.get("/pantalon",async (req, res) => {

  try {
    const pantalon = await Clothers.find({"type":"pantalon"});
    res.status(200).json(pantalon.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});
//get casquettes
router.get("/casquettes",async (req, res) => {

  try {
    const clother = await Clothers.find({"type":"casquettes"});
    res.status(200).json(clother.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});
//get buckethat
router.get("/buckethat",async (req, res) => {

  try {
    const clother = await Clothers.find({"type":"buckethat"});
    res.status(200).json(clother.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});

//bonnet
router.get("/bonnet",async (req, res) => {

  try {
    const clother = await Clothers.find({"type":"bonnet"});
    res.status(200).json(clother.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});
//mug
router.get("/mug",async (req, res) => {

  try {
    const clother = await Clothers.find({"type":"mug"});
    res.status(200).json(clother.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});
//thermos
router.get("/thermos",async (req, res) => {

  try {
    const clother = await Clothers.find({"type":"thermos"});
    res.status(200).json(clother.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const clother = await Clothers.find();
      res.status(200).json(clother.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});




module.exports = router;
