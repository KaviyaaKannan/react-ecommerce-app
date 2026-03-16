import axios from "axios"

export const API = axios.create({

baseURL:"https://fakestoreapi.com"

})

export const getProducts = () => API.get("/products")