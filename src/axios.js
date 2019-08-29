import axios from "axios";

const instance = axios.create({
    baseURL: "https://nutrition-label-f8bb5.firebaseio.com/"
})

export default instance