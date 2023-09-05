
import axios from 'axios'


 const AxiosApi = axios.create({
    baseURL:"http://192.168.15.169:3333/"
})


export{AxiosApi}