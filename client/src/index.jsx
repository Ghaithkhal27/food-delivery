import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Restaurants from './components/restaurants.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  const[refrech,setrefrech]=useState(true)

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/api/restaurants',
      success: (data) => {
        console.log(data);
        setItems(data);
       
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }, [refrech]);
  const remove = (idrestaurants) => {
    $.ajax({
      url: `http://localhost:3000/api/restaurants/${idrestaurants}`,
      type: "DELETE",
      success: function () {
        console.log("deleted");
        setrefrech(!refrech);
      },
      error: function (error) {
        console.log(error);
      },
    });
  };
  const add = (newItem) => {
    $.ajax({
      url: "http://localhost:3000/api/restaurants",
      type: "POST",
      data: newItem,
      success: function () {
        console.log("added");
        setrefrech(!refrech);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  

  return (
    <div>
      <Restaurants List={items} remove={remove} add={add}  />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
