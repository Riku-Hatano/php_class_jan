import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/backend_class/",
    // baseURL: "http://localhost:8080/backend_class/Jan/jan5/src/phpFile/",
    headers: {

    }
});