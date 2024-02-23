import { fakeApi } from "./fakeApi"

function fetchDataApi({path,funcLoad,funcSetArray,funcToOrder}:{path:string, funcLoad:(status:boolean)=>void, funcSetArray:(any:[])=>void,funcToOrder?:(array:[])=>[] }){
    fakeApi.get(path).then((response)=>{
        funcLoad(true)
        if(!!funcToOrder?.toString()){
            const result = funcToOrder(response.data)
            funcSetArray(result)
            return []
        }
        funcSetArray(response.data)
    })
    .catch((err)=>{ console.log(err)})
    .finally(()=>{
        funcLoad(false)
    })
}
export {fetchDataApi}

