import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md"
import { FaGripfire,FaPlay } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import { MdSpaceDashboard } from 'react-icons/md'
import apiClient  from '../../spotify'

export default function Sidebar() {
  const [image,setImage]=useState(
    "https://th.bing.com/th/id/OIP.M1bzAOXjyE3n2AXCLawRrgHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.2&pid=1.7"
    );
  useEffect(()=>{
     apiClient.get("me").then((response)=>{
        //  console.log(response);
         setImage(response.data.images[0].url); 
     })
     .catch((response) =>{
      //handle error
       setImage("https://th.bing.com/th/id/OIP.M1bzAOXjyE3n2AXCLawRrgHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.2&pid=1.7");
  })
  },[]);
  return (
    <div className='sidebar-container'>
       <img src={image} alt="img" className='profile-img' />
    
    <div>
      {/* <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/> */}
      {/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/> */}
      <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
      {/* <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/> */}
      <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
     </div>
      <SidebarButton title="Sign Out" to="/login" icon={<FaSignOutAlt/>}/>
     
    </div>
  )
}
