import  "./sidebar.css";
import { HomeOutlined, ListOutlined, GroupOutlined, MenuBookOutlined, AddPhotoAlternateOutlined, VideoLibraryOutlined, WatchLaterOutlined, BallotOutlined, SettingsOutlined, ExitToAppOutlined, FingerprintOutlined } from "@material-ui/icons";
import React, { useState } from 'react'

export default function Sidebar() {
const value = "redox"
const [name, setName] = useState(value)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                      <HomeOutlined className="sidebarIcon"/>
                      Homepage
                  </li>
                  <li className="sidebarListItem">
                      <FingerprintOutlined  className="sidebarIcon"/>
                      Biometric
                  </li>
                  <li className="sidebarListItem">
                      <ListOutlined  className="sidebarIcon"/>
                      Lists
                  </li>
                  <li className="sidebarListItem">
                      <GroupOutlined  className="sidebarIcon"/>
                      Groups
                  </li>
                  <li className="sidebarListItem">
                      <MenuBookOutlined  className="sidebarIcon"/>
                      Pages
                  </li>
                  <li className="sidebarListItem">
                      <AddPhotoAlternateOutlined  className="sidebarIcon"/>
                      Photos
                  </li>
                  <li className="sidebarListItem">
                      <VideoLibraryOutlined  className="sidebarIcon"/>
                      Videos
                  </li>
                  <li className="sidebarListItem">
                      <WatchLaterOutlined  className="sidebarIcon"/>
                      Schedule
                  </li>
                  <li className="sidebarListItem">
                      <BallotOutlined  className="sidebarIcon"/>
                      WishList
                  </li>
                  <li className="sidebarListItem">
                      <SettingsOutlined  className="sidebarIcon"/>
                      Settings
                  </li>
                  <li className="sidebarListItem">
                      <ExitToAppOutlined  className="sidebarIcon"/>
                      Logout ( {name} )
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}
