const express = require('express')
const router = express.Router();
const Hero = require('../models/Hero')

//GET ALL
router.get("/", (req, res) => {
  const heroes = Hero.find();
  heroes.then((data) => {
    return res.json(data);
  });
});

//GET single hero
router.get("/hero/:id", (req, res) => {
  Hero.findById(req.params.id).then((hero) => {
    return res.json(hero);
  });
});

//POST single hero
router.post("/hero", (req, res) => {
  console.log("Creating Hero");
  console.log(req.body.name);

  const newHero = new Hero({
    name: req.body.name,
    superPowers: req.body.superPowers,
    secretName: req.body.secretName,
    weakness: req.body.weakness,
    age: req.body.age,
  });
  newHero
    .save()
    .then((result) => {
      console.log(result);
      return res.json({ result: result });
    })
    .catch((err) => {
      return res.json({ error: err });
    });
});

//PUT Update Hero
router.put("/hero/:id", (req, res) => {
  Hero.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (data) => {
      return res.json(data);
    }
  );
  // console.log("Upadting Hero");
  // const heroToUpdate = Hero.findById();
});

//DELETE delete hero
router.delete("/hero/:id", (req, res) => {
  Hero.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({ message: "Hero deleted succesfully" });
    })
    .catch((err) => {
      return res.json({ message: `Hero couldn't be deleted` });
    });
  console.log("Deleting a Hero");
});

module.exports = router