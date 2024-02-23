type CardChatType={
    userId:string
    userName:string 
    avatar: null |string
    lastMessage:{
        text:string
        time:Date
    },
    unviewed:number
}

type DataMessagesType ={
    id:string
    send_by_id : string
    send_to_id:string
    userName: string
    text: string
    time: Date
    image_profile:string | null
}

export {CardChatType,DataMessagesType}