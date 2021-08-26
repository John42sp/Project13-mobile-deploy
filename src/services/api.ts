import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const api = axios.create({  //ATENÇÃO: SEMPRE Q ALTERAR O BASEURL, TAMBEM ALTERAR IMAGE_VIEW NO BACKEND P/ DISPLAY FOTOS
    baseURL: 'http://192.168.15.5:3333', // usar IP da maquina para des. no celular, no emulador, usar localHost, 
    // headers: {
    //     'Content-Type': 'application/json',
    //     // Accept: 'application/json',
    //   },
});

// loadProducts = async () => {
//     try {
//         const response = await api.get('/products');

//         //const { docs } = response.data;

//         //console.log(docs);

//     } catch(err) {
//         // TODO
//         // adicionar tratamento da exceção
//         console.error(err);
//     }
// };

// api.interceptors.request.use(function (config) {
//     const token = AsyncStorage.getItem('token') || null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

export default api;