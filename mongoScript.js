const mongoose = require("mongoose");
const mongo = require('./models/Hero')
const Hero = require("./models/Hero");
const Villain = require("./models/Villain");

mongoose
  .connect("mongodb://localhost/dcuniverse")
  .then(() => {
    //code here to create villains and heroes
    const hero1 = new Hero({
      // name: "Batman",
      superpowers: ["Filanthropist", "rich", "genius", "playboy"],
      secretName: "Bruce Wayne",
      //enemies: ObjectId('asdf') // enemy id
      weakness: "Bullet in the head",
      age: 42,
    });

    hero1
      .save()
      .then(() => console.log("Hero was saved successfully"))
      .catch((err) => console.log("There was an error: ", err));
  })
  .catch((err) => console.log(err));

mongoose.connection.close().then(() => console.log("Connnection succesful"));
