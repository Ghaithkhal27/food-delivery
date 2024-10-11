const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '27420178@Ghaith',
  database : 'delivery'
});



connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db MYSQL connected")
    }
})
const getAllrestaurants = (callback) => {
  connection.query("SELECT * FROM restaurants",callback)
};
const create=(callback,prod)=>{
  connection.query("INSERT INTO restaurants SET ?" ,prod,callback)
}
const remove = (callback,idrestaurants) => {
  connection.query("DELETE FROM restaurants WHERE idrestaurants = ?", [idrestaurants], callback);
}
const update=(callback,prod,idrestaurants)=>{
  connection.query("UPDATE restaurants SET ? WHERE idrestaurants=?",[prod ,idrestaurants],callback)

}
const getAllMenu = (callback, idrestaurants) => {
  connection.query(
    "SELECT menu.idmenu, menu.name, menu.ingredient, menu.imageurl, menu.price, restaurants.idrestaurants FROM menu INNER JOIN restaurants ON (idrestaurants = menu.`restaurant-id`) WHERE idrestaurants = ?",
    [idrestaurants],
    callback
  );
}

const createMenu = (callback, prod, idrestaurants) => {
  console.log(prod);
  
  connection.query(
    "INSERT INTO menu SET ?, `restaurant-id` = ?",
    [prod, idrestaurants],
    callback
  );
}
const removeMenu = (callback, idmenu) => {
  connection.query("DELETE FROM menu WHERE idmenu = ?", [idmenu], callback);
}
const updateMenu = (callback, prod, idmenu) => {
  connection.query("UPDATE menu SET ? WHERE `idmenu` = ?", [prod, idmenu], callback);
}




module.exports = {getAllrestaurants,create,remove,update,getAllMenu,createMenu,removeMenu,updateMenu};