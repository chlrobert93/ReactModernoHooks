import React, { useState, useEffect } from "react";
import "./VideoItem.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from '../hooks/usevideos';

//Componenete de función
const App = () => {


  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('El general');

  useEffect(() => {

    setSelectedVideo(videos[0]);

  },[videos]);



  

  /*
  //Actualizar el video selecionado
  const onVideoSelect = (video) => {
    console.log("From the App!!", video);
    //this.setState({ selectedVideo: video });
    setSelectedVideo(video);
  };*/
  /*
     <VideoList
                onVideoSelect={(video) => setSelectedVideo(video)}
                videos={videos}
              />

      <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos}
              />
              
  */

  return (
    <div className="colorPage">
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={search} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
