require('dotenv').config();

const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@fatchancho.1vmh5.mongodb.net/recipe-app?retryWrites=true&w=majority`;

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    //return Recipe.deleteMany()
  })
  .then(() => {
   Recipe
  //.insertMany(data)
  //.then((data)=>data.forEach((recipe)=>console.log(recipe.title)))
  //.findOneAndUpdate({title:{$eq:'Rigatoni alla Genovese'}},{$set:{duration:100}},{new:true})
  //.then((recipe)=>console.log(recipe));
  //.deleteOne({title:{$eq:'Carrot Cake'}})
  })
  .then(mongoose.connection.close())

  .catch(error => {
    console.error('Error connecting to the database', error);
  });

