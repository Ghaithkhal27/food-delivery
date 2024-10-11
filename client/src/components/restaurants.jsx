import React, { useState } from "react";
import Menu from "./menu.jsx";
import Create from "./create.jsx";
import $ from 'jquery';
const Restaurants = ({ List, remove, add}) => {

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [data,setData] = useState([])
  console.log("🚀 ~ Restaurants ~ data:", data)

  const getMenus = (idrestaurants) => {
    $.ajax({
      url: `http://localhost:3000/api/restaurants/${idrestaurants}`,
      type: "GET",
      success: function (data) {
        console.log("data");
        setData(data);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  const deleteMenus = (idmenu) => {
    $.ajax({
      url: `http://localhost:3000/api/restaurants/menu/${idmenu}`,
      type: "delete",
      success: function () {
        console.log("deleted");
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  const addMenus = (newItem,idrestaurants) => {
    $.ajax({
      url: `http://localhost:3000/api/restaurants/${idrestaurants}/menu`,
      type: "POST",
      data: newItem,
      success: function () {
        console.log("added");
       
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  
  
  const handleImageClick = (restaurant) => { 
    setSelectedRestaurant(restaurant);
    getMenus(restaurant.idrestaurants)
  }

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };
  
  console.log("🚀 ~ Restaurants ~ selectedRestaurant:", selectedRestaurant)

  if (selectedRestaurant) {
    return <Menu restaurant={selectedRestaurant} data={data} deleteMenus={deleteMenus} addMenus={addMenus} />;
  }

  if (showCreateForm) {
    return (
      <div>
        <button onClick={toggleCreateForm}>Show Restaurant List</button>
        <Create add={add} toggleCreateForm={toggleCreateForm} />
      </div>
    );
  }

  return (
    <div className={"restau"}>
      <button onClick={toggleCreateForm}>Add New Restaurant</button>
      {List.map((item, index) => (
        <div className="one" key={index}>
          <p className="p">{item.name}</p>
          <p className="p">{item.location}</p>
          <img
            src={item.imageUrl}
            alt="Restaurant"
            onClick={() => handleImageClick(item)}
          />
          <button
            className="buttonRemove"
            onClick={() => remove(item.idrestaurants)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
