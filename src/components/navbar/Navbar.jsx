import "./navbar.css";
import { ArrowDropDown } from "@material-ui/icons"
import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="navbar">
    <div className="topbarWrapper">
    <div className="topLeft">
        <div className="logo">RedoxDev</div>
        
        <ul className="topbarList">
            <li className="topbarLists">Home</li>
            <li className="topbarLists">About</li>
            <li className="topbarLists">Contact</li>
        </ul>
    </div>
    
    <div className="topRight">
        <div className="topIconContainer">
        <input type="text" placeholder="search for something." className="topCenterSearch" />
        </div>
        
        <img src="https://th.bing.com/th/id/R.57e6398eeec124cab04f250722168b44?rik=No%2f5YwsWH9P45Q&pid=ImgRaw&r=0" alt="" className="topIconContainerImg"/>

        <span className="topIconContainerName">{name}</span>
        
        <div className="topbarIconContainer">
            <ArrowDropDown />
          </div>
        
    </div>
    </div>      
    </div>
  )
}

export default Navbar
