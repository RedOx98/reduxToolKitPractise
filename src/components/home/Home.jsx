import "./home.css";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";

const Home = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({name, email}));
  };

  return (
    <div className="home">
    <div className="homeWidgets">
    <div className="widgetUp">
    <span className="homeSpan">
          Update Your Account
      </span>
    <span className="homeSpan chaley">
          Deleting this account cannot be undone <em>{user.name}</em>  You should remember your password to delete your account
      </span>
      <button className="chaleyButton">Delete Account</button>
      <hr  className="lineTag"/>
    </div>
    <div className="widgetDown">

    <span className="homeSpan clue">
          Profile Picture
      </span>
      <div className="profilePicChange">
    <img src="https://th.bing.com/th/id/R.57e6398eeec124cab04f250722168b44?rik=No%2f5YwsWH9P45Q&pid=ImgRaw&r=0" alt="" className="topIconContainerImg"/>
    <button className="changeProfileButton">Change</button>
    </div>

     <form className="changeProfileInfoForm">
        <span className="changeProfileInfoParams" >Email</span>
        <input type="text" placeholder={user.email} className="changeProfileInfo" onChange={handleChange}/>
        <span className="changeProfileInfoParams" >Username</span>
        <input type="text" placeholder={user.name} className="changeProfileInfo" onChange={handleChange}/>
        <span className="changeProfileInfoParams">Password</span>
        <input type="password" placeholder="password" className="changeProfileInfo"/>

        <button className="changeProfileInfoButton" onClick={handleUpdate}>Update</button>
    </form>
    
    </div>
      
      </div>
    </div>
  )
}

export default Home
