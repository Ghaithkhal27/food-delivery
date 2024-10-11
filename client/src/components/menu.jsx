import React, { useState } from 'react';

const Menu = ({ data, deleteMenus, addMenus, restaurant  }) => {
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  console.log(data.idrestaurants);
  
  const handleCreate = () => {
    const newItem = {
      name: name,
      ingredient: ingredient,
      imageUrl: imageUrl,
      price: price
    };
    addMenus(newItem, restaurant.idrestaurants);
  }
  



  return (
    <div>
      <form className={"Menuname"}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="input"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="ingredient">Ingredient:</label>
      <input
        type="text"
        id="input"
        placeholder="Ingredient"
        onChange={(event) => setIngredient(event.target.value)}
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        id="input"
        placeholder="Image URL"
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="input"
        placeholder="Price"
        onChange={(event) => setPrice(event.target.value)}
      />
      <button onClick={handleCreate}>Add</button>
      </form>
      {data.map((item, index) => (
        <div key={index} className={'the-menu'}>
          <p>{item.name}</p>
          <p>{item.ingredient}</p>
          <img src={item.imageurl} alt={item.name} />
          <p>{item.price} dt</p>
          <button onClick={() => deleteMenus(item.idmenu)} className={'menudelete'}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
