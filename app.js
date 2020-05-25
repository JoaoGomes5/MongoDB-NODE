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

const fruit = new Fruit({
  name: "Pessego",
  rating: 6,
  review: "Never prove it"
  
});

// fruit.save();
//bdsjbdhjsab
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