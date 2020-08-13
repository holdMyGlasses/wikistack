const express =require("express");
const morgan=require("morgan");
const app=express();

const { db, Page, User } = require('./models');
const layout = require ("./views/layout.js")
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({ extended: false }));

app.get ('/',(req, res)=> {
   //res.send ("Hello world");
    res.send (layout(''));
})

const synchro = async() => {

  await Page.sync();
  await User.sync();
console.log("user and page NOT HEREE", user, page)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

}

synchro();

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
