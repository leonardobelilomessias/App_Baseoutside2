import { DataMessagesType } from "@/types/ComponetsTypes/chatTypes";

function funcToOrderByDate(array:any[]){
    const orderedByTimeMessages  = array.sort((a:DataMessagesType, b:DataMessagesType) => {
                 return new Date( a.time).getTime() - new Date(b.time).getTime();
             })
    return orderedByTimeMessages.reverse() as []
}

// handle data to return a array with format section list
function formatToSectionList(arrayMessages:DataMessagesType[]){
    const arrayLabelSection = [] as string[]
    // run array to get labels section list
    arrayMessages.forEach((data)=>{
        const dateLabel = new String(data.time).toString().split("T")[0] // split to get just day,month year 
        if(!data.time)return 
        //verify if date until isn't inserted at arrayLabels to insert
        if(!arrayLabelSection.includes( dateLabel)) arrayLabelSection.push( dateLabel) 
    })
    //return a array with object separated by dates
    const resultToSectionList = arrayLabelSection.map((item)=>{
        const filtered = arrayMessages.filter((message)=>(new String(message.time).toString().split("T")[0]===item ))
        return{title:item, data:funcToOrderByDate(filtered)}
    })
    return resultToSectionList
}

export {funcToOrderByDate,formatToSectionList}