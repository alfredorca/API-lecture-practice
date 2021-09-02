const express = require("express");
const router = express.Router();

const Villain = require("../models/Villain");

//GET REQUEST GET ALL VILLAINS
router.get("/", async (req, res) => {
  const villains = await Villain.find();
  try {
   return res.json(villains);
  } catch (error) {
   return res.json({message: "Error: " + "Villains could not be retrieved"})
  }
});

//GET SINGLE VILLAIN
router.get("/villain/:id", async (req, res) => {
  const singleVillain = await Villain.findById(req.params.id)
 try {
  return res.json(singleVillain)
 } catch (error) {
  return res.json(error)
 }
});

// POST Villain
router.post("/villain", async (req, res) => {
  console.log("Creating Villain");
  console.log(req.body.name);

  const newVillain = await new Villain({
    name: req.body.name,
    weakness: req.body.weakness,
    heroEnemy: req.body.heroEnemy,
    alive: req.body.alive,
  }).save();

  try {
   return res.json(newVillain)
  } catch (error) {
   return res.json(error)
  }
  
});

//Put (update) Villain
router.put("/villain/:id", async (req, res) => {
  const updateVillain = await Villain.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
  try {
   return res.json(updateVillain)
  } catch (error) {
   return res.json(error)
  }
});

//DELETE
router.delete("/villain/:id", async (req, res) => {
 const deleteVillain = await Villain.findByIdAndDelete(req.params.id)
 try {
  return res.json(deleteVillain)
 } catch (error) {
  return res.json(error)
 }
})

module.exports = router;
