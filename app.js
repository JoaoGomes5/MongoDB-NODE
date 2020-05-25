const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema({
      name: String,
      rating: Number,
      review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good"
  
}
);

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "Nice"
});

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Monkey Likes"
});

const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Not so good"
});

      const PersonSchema = new mongoose.Schema({
        name: String,
        age: Number,
        
      });
      const Person = mongoose.model('Person', PersonSchema);
      
      const person = new Person({
        name: "João",
        age: 18
        
      }
      );
      // person.save();

// Fruit.insertMany([banana, orange] , function (err) {

//   if(err){
//     console.log(err);
    
//   }else{
//     console.log("Success");
    
//   }
  
// });
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