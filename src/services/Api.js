import axios from "axios";

const baseURL = "https://6375dca77e93bcb006bbc984.mockapi.io/";

const api = axios.create({
    baseURL: baseURL
})

const endUrl = {
    products_url: "products"
}

function postProducts(data = {}){
    return api.post(endUrl.products_url, data)
}

function getProducts(data = {}){
    return api.get(endUrl.products_url, data)
}

const urls = {
    postProducts,
    getProducts
}

export default urls;
