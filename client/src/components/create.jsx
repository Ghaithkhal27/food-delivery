import React, { useState } from "react";

const Create = ({ add, toggleCreateForm }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const newItem = {
    name,
    location,
    imageUrl,
  }

  const handleSubmit = () => {
    add(newItem);
    toggleCreateForm();
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="input"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="input"
        placeholder="Location"
        onChange={(event) => setLocation(event.target.value)}
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        id="input"
        placeholder="Image URL"
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <button id="createButton" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default Create;
