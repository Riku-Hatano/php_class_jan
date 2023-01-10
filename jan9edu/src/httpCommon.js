import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8080/backend_class/Jan/jan9edu/src/backend/",
    headers:{
        // "Content-type":"application/json"
    }
})