import React, { useState, useEffect } from "react";
import "./VideoItem.css";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//Componenete de función
const App = () => {

  //setVideos para configurar videos para actualizar nuestros videos
  //setSelectedVideo para configurar el video seleccionado para actualizar el state de videos seleccionados
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Iron Maiden - The Trooper (En Vivo!) ");
  }, []);

  //Terminos de envio
  const onTermSubmit = async (term) => {
    console.log(term);

    //Instancia preconfigurada axios ruta para enviar una solicitud
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  };

  const onVideoSelect = (video) => {
    console.log("From the App!!", video);
    //Actualizar el video selecionado
    //this.setState({ selectedVideo: video });
    setSelectedVideo(video);


  };

  return (
    <div className="colorPage">
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={onVideoSelect}
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
