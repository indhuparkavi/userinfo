import axios from "axios";
import Emitter from "../emitter";
// import EventEmitter from "reactjs-eventemitter";

const axiosinstance = axios.create({
    baseURL: 'https://',
    timeout: 9000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

axiosinstance.interceptors.response.use(
    (response) => {
        console.log(response);
        
        if (response.status === 200) {
            Emitter.dispatch('success', 'Successfully fetched');
        }
        return response;
    },
    (error) => {
        if (error.response) {
            Emitter.dispatch('error', error.response.data.error);
        }
        return Promise.reject(error);
    }
);

export default axiosinstance;
