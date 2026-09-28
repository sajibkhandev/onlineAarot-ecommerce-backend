
const mongoose = require('mongoose');

const mongodbConfig =()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4ygdj26.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`)
  .then(() => console.log('Database Connected!'));

}

module.exports=mongodbConfig


// mongodb+srv://mern2504cit2:dhwQcgvi1aJfhFxM@cluster0.4ygdj26.mongodb.net/test?appName=Cluster0