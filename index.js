const express =require("express");
const morgan=require("morgan");
const app=express();
const morg =morgan();

const layout = require ("./views/layout.js")
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({ extended: false }));

app.get ('/',(req, res)=> {
   //res.send ("Hello world");
    res.send (layout(''));
} )


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

