import React from "react"
import { useNavigate } from "react-router-dom";

function FavoritesList() {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("You are headed to the home page");
    navigate('/');
  }; 

  return (
    <div>
         <button onClick={() => handleClick()}>Home</button>
    </div>
  )
};

export default FavoritesList;
