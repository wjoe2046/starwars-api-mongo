const db = require("../models/starWarsModels");

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  const query = db.Person.find({});
  console.log(characters);
  res.locals.data = characters;

  next();
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
