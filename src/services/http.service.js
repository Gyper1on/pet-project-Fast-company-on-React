import axios from "axios";
import logger from "./log.service";

axios.interceptors.request.use(
    (res)=> res,
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
        if (!expectedErrors) {
                logger.log(error)
                console.log('Unexpected error')
        }
        return Promise.reject(error)
    }
)

const httpService = {
        get: axios.get,
        post: axios.post,
        put: axios.put,
        delete: axios.delete
}

export default httpService