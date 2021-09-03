import axios from 'axios'

let URL = 'http://localhost:3004'
const Axios = axios.create({
    baseURL: URL
})

export {Axios}