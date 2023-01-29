import axios from "axios";

// const api = axios.create({
//     baseURL: "https://api.github.com",
// });

 const fakeAPI = axios.create ({
    baseURL: "https://fakestoreapi.com/products"
});

export default fakeAPI;