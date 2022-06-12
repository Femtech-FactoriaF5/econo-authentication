import axios from 'axios';

export const experienciaService = {
    getAllData(){
       return axios.get(node.env.REACT_APP_URL_BASE);
    },
    getSearchData({searchTerm}){

    }
}