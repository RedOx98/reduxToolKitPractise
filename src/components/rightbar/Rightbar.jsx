import "./rightbar.css";
import React, { useState } from 'react'
import { ArrowDropDownOutlined } from "@material-ui/icons";

const Rightbar = () => {
const value = "redox"
const [name, setName] = useState(value)
  return (
    <div className="rightbar">
    <div className="rightbarWidgets">
    <div className="rightbarItems">
    <div className="rightbarItemsList">
        <span className="rightbarItemsName">
            Recommended for {name}
        </span>
        <img src="https://th.bing.com/th/id/R.67701039757ac8e6fa1a8ba5ca3b241d?rik=uFP3WojQF0kgHg&riu=http%3a%2f%2fwww.gharexpert.com%2fmid%2f36200832547.jpg&ehk=aLFc8X3CRyn0p%2bRMB%2fh8HwXlAgQygeXbB6dj8VkZB2E%3d&risl=&pid=ImgRaw&r=0" alt="" className="rightbarItemsImg"/>
    </div>
    <div className="rightbarItemsList">
        <span className="rightbarItemsName">
            Popular on Redox App
        </span>
        <img src="https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rightbarItemsImg"/>
    </div>
    <div className="rightbarItemsList">
        <span className="rightbarItemsName">
            Editors Choice
        </span>
        <img src="https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rightbarItemsImg"/>
    </div>
    <div className="rightbarItemsListSeemore">
        <span className="rightbarItemsNameSeemore">
            See more 
        </span>
        <ArrowDropDownOutlined className="rightbarItemsNameSeemoreIcon"/>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Rightbar
