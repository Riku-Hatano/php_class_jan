import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/Silverstar/backend/",
    headers:{
        // "Content-type":"application/json"
    }
})