
const mongoose= require("mongoose")
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})


mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
  .then(() => console.log('Connected!'));

  const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    pages: Number,
  });

  const Book = mongoose.model("book", bookSchema);

//   Book.find()
//   .then(function (book) {
//     console.log(book);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

app.get("/home", (req,res)=>{
    
    var item=Book.find()
  .then(function (book) {
    res.send(book);
  
  })
  .catch(function (err) {
    console.log(err);
  });

})