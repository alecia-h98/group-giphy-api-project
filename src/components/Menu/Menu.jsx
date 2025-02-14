import React from "react"
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("You are headed to the favorites page");
    navigate('/favorites');
  }; 

  return (
    <div>
      <h1>Gif finder</h1>
      <button onClick={() => handleClick()}>Favorites list</button>
    </div>
  )
};

export default Menu;