const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Por favor insira nome"],
      },
      rating: {
        type: Number,
        min: 1,
        max: 10
      },
      review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const tangerina = new Fruit({
  name: "Tangerina",
  rating: 8,
  review: "Muito boa"
  
});

tangerina.save();

 const PersonSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favouriteFruit: fruitSchema
      });
      const Person = mongoose.model('Person', PersonSchema);
      
      // const person = new Person({
      //   name: "Ana",
      //   age: 14, 
      //   favouriteFruit : uva
      // }
      // );

      // person.save();

Fruit.find(function (err, fruits) {
    if(err){
      console.log(err);
      
    }else{
      mongoose.connection.close();
      fruits.forEach(fruit => {
        
        console.log(fruit.name);

      });
      
    }
});

Person.updateOne({name:"João"}, {favouriteFruit: tangerina} , function (err) { 

  if (err) {
    console.log(err);
    
  }else{
    console.log("Update = Success");
    
  }

 });

// Fruit.deleteOne({_id:"5ecc1e99b3a92a13fc930fc2"}, function (err) { 

//   if (err) {
//     console.log(err);
    
//   }else{
//     console.log("Delete = Success");
    
//   }

//  });

