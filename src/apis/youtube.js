import axios from 'axios';

const KEY = 'AIzaSyDNVEVh_BoiqP5L_vdiDZZgth6W6b81b8U';


//Crear instancia preconfigurada
export default  axios.create({
    baseURL: 'GET https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
});