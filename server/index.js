const express = require("express");
const cors =require("cors")

const db = require("./database-mysql");
const {getAllrestaurants,create,remove,update,getAllMenu,createMenu,removeMenu,updateMenu}=require("./database-mysql/index")

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.get('/api/restaurants',(req,res)=> {
  getAllrestaurants ((error,items)=>{
      if(error){
          res.status(500).send(error)
      }else{
          res.status(200).send(items)
      }

  })
 
})



app.post('/api/restaurants',(req,res)=> {
  
     create ((error,items)=>{
         if(error){
             res.status(500).json(error)
         }else{
             res.status(201).json("created")
         }
 
     },req.body)
    
 })

 app.delete('/api/restaurants/:idrestaurants', (req, res) => {
  const { idrestaurants } = req.params;
  remove((error, items) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json("deleted");
    }
  }, idrestaurants);
})
app.put('/api/restaurants/:idrestaurants',(req,res)=>{
  const {idrestaurants}=req.params
  update((error,items)=>{
      if(error){
          res.status(500).json(error)
      }else{
          res.status(200).json("updated")
      }
  },req.body,idrestaurants)

})

app.get('/api/restaurants/:idrestaurants', (req, res) => {
  const { idrestaurants } = req.params;
  getAllMenu((error, items) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(items);
    }
  }, idrestaurants);
});

app.post('/api/restaurants/:idrestaurants/menu', (req, res) => {
  const { idrestaurants } = req.params;
  createMenu((error, items) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(201).json("created");
    }
  }, req.body, idrestaurants);
})
app.delete('/api/restaurants/menu/:idmenu', (req, res) => {
  const { idmenu } = req.params;
  removeMenu((error, items) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json("deleted");
    }
  }, idmenu);
})
app.put('/api/restaurants/menu/:idmenu', (req, res) => {
  const { idmenu } = req.params;
  updateMenu((error, items) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json("updated")
    }
  }, req.body, idmenu);
})

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
// font-family: "Lobster", sans-serif;
