import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Trending from '../trending';
import Library from '../library';
// import Feed from '../feed';
// import Favourites from '../favourites';
import Player from '../player';
import './home.css'
import Sidebar from '../../components/sidebar';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

export default function Home() {
  const [token,setToken] =useState("");
  
  useEffect(()=>{
   const token = window.localStorage.getItem("token");
   const hash = window.location.hash;
   window.location.hash ="";
   if(!token && hash){
     const _token = hash.split("&")[0].split("=")[1];
     window.localStorage.setItem("token",_token);
     setToken(_token); 
     setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }
  },[]);
  return !token? (
    <Login/>
  ):(
    <Router>
        <div className="main-body">
            <Sidebar token={token}/>  
            <Routes>
            <Route exact path="/" element={<Library/>}/>
            {/* <Route exact path="/trending" element={<Trending/>}/> */}
            {/* <Route exact path="/feed" element={<Feed/>}/> */}
            {/* <Route exact path="/favourites" element={<Favourites/>}/> */}
            <Route exact path="/player" element={<Player/>}/>
            <Route exact path="/login" element={<Login/>}/>

        </Routes>
        </div>
    </Router>
  );
}
  