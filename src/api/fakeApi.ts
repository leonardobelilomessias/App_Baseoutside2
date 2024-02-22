
import { AppError } from '@/utils/AppError'
import axios, { AxiosError } from 'axios'


 const fakeApi = axios.create({
    baseURL:"http://192.168.15.169:3000/"
})

fakeApi.interceptors.response.use((response)=>response,error=>{
    
    if(error.code === AxiosError.ERR_NETWORK){
        console.log('erro na conexão')
        return Promise.reject(new AppError('Error de Conexão'))
    }

    if(error.response.data && error.response){
        console.log('erro1',error)
        return Promise.reject(new AppError(error.response.data.message))
    }else{
        console.log('erro2')
        return Promise.reject(error)
    }
})
export{fakeApi}