import { useState, useEffec} from 'react';
import youtube from '../apis/you tube';

const useVideos = (defaultSearchTerm) => {
  //setVideos para configurar videos para actualizar nuestros videos
  //setSelectedVideo para configurar el video seleccionado para actualizar el state de videos seleccionados
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

   //Terminos de envio
   const search = async (term) => {
    console.log(term);

    //Instancia preconfigurada axios ruta para enviar una solicitud
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(response);
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
