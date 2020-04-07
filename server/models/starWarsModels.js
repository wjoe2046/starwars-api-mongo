const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://wenfei:RnmKiln3LbSZU8fs@cluster0-ompiz.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "stawrwars-api",
  })
  .then(() => console.log("connected to mongo db"))
  .catch((err) => console.log(err));

// create a new pool here using the connection string above
const { Schema } = mongoose;

const speciesSchema = new Schema({
  name: String,
  classification: String,
  average_height: String,
  average_lifespan: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  language: String,
  homewold: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: "planet",
  },
});

const Species = mongoose.model("species", speciesSchema);

const personSchema = new Schema({
  name: String,
  mass: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  birth_year: String,
  gender: String,
  species: String,
  species_id: String,
  homewold: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: "planet",
  },
  height: Number,
});

const Person = mongoose.model("person", personSchema);

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/images/schema.png?raw=true

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  Person,
  Species,
};
