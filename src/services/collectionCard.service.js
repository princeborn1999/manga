import axios from "axios";
const API_URL = 'http://localhost:3001/api/collectionCard';
// axios.post(apiURL+'/api/collection',{ data: req }).then(
//     (res)=>{
//       console.log('asdsad')
//     }
//   )

class CollectionCardService{
    addCard(name,label,image){
        return axios.post(
            API_URL,
            { name, label, image },
        )
    }
    getCard(name, label, image){
        return axios.get(
            API_URL,
            { name, label, image },
        )    
    }
    getAllCard(){
        return axios.get(
            API_URL + "/getAll",
        )  
    }
    deleteCard(name){
        return axios.delete(
            API_URL,
            { name },
        )
    }
}
export default new CollectionCardService();