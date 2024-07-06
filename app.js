const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const sequelize = require("./database")
const imgDB = require("./schema")
const cors = require("cors")
app.use(bodyParser.json({extended:false}))
app.use(cors())

app.post("/postImgData", async (req, res, next)=>{
    try{
        const imgUrl = req.body.postLink
        const imgText = req.body.postText
        const data = await imgDB.create({
           imgUrl: imgUrl,
           imgText: imgText 
        });

        res.status(201).json({ newImgDetails: data });
    }catch(err){
        console.log(err)
    }
    
    res.end()
})


app.get("/getAllData", async (req, res, next)=>{
    try {
        const data = await imgDB.findAll({})
        console.log(data)
        res.status(200).json({ allImgDetails: data });
    } catch (err) {
        console.log(err)
    }
    
})
app.use("/", (req, res, next)=>{
    res.send("hi")
})

sequelize
  .sync()
  .then((result) => {
    console.log("database sucessfully connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });