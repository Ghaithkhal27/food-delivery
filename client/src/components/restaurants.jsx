import React ,{useState}from "react";
import Menu from "./menu.jsx";

const Restaurants = ({List,remove,add}) => {

 const[name,setname]=useState("")
 const[location,setlocation]=useState("")
 const[imageUrl,setimageUrl]=useState("")

  const newItem={
    name:name,
    location:location,
    imageUrl:imageUrl
   }
 

  
   
  
  return(
  <div>
   
      <label htmlFor="name">name:</label>
        <input type="text" id="name" placeholder="name" onChange={(event)=>{setname(event.target.value)}}></input>
        <label htmlFor="location">location:</label>
        <input type="text" id="location" placeholder="location" onChange={(event)=>{setlocation(event.target.value)}}></input>
        <label htmlFor="imageUrl">imageUrl:</label>
        <input type="text" id="imageUrl" placeholder="imageUrl" onChange={(event)=>{setimageUrl(event.target.value)}}></input>
        
        <button id="createButton" onClick={()=>{add(newItem)}}>Create</button>
      
   
    
    {List.map((item, index) => (
      <div className={"one"} key={index}>
        <p className={"p"}>{item.name}</p>
        <p className={"p"}>{item.location}</p>
        <img src={item.imageUrl} alt="Restaurants" />
        <button className={"buttonRemove"} onClick={()=>{remove(item.idrestaurants)}}>remove</button>
      </div>
    ))}
  </div>
)}

export default Restaurants;
