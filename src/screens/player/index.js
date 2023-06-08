import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/SongCard";
import Queue from "../../components/queue";
import AudioPLayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data?.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
      }
    }, [location.state]);
    
    useEffect(() => {
      setCurrentTrack(tracks[currentIndex]?.track);
      // console.log(tracks[currentIndex]?.track);
      // console.log(currentIndex);
  }, [currentIndex,tracks]);

  return (
    <div className="screen-container">
      <div className="right-container">
        <div className="left-player-body">
          <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
        </div>
        <div className="right-player-body">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        
        </div>
      </div>
    </div>
  );
}
