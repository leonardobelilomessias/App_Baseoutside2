import { ChatContainerMessages } from "@/Componets/Chat/ChatContainerMessages"
import { ChatMessages } from "@/Componets/Chat/ChatMessages"
import { InputMessageChat } from "@/Componets/Chat/InputMessageChat"
import { fakeApi } from "@/api/fakeApi"
import { fetchDataApi } from "@/api/handlerApi"
import { useDataAgent } from "@/context/UserContext"
import { DataMessagesType } from "@/types/ComponetsTypes/chatTypes"
import { Spinner } from "@gluestack-ui/themed"
import { useEffect, useState } from "react"



export function ChatAgentScreen(){
    const {dataAgent} = useDataAgent()
    const [chatMessages, setChatMessages] = useState([] as DataMessagesType[])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetchDataApi({path:"/chatMessages",funcSetArray:setChatMessages,funcLoad:setLoading,funcToOrder:funcToOrderByDate})
    },[])

    return(
        <ChatContainerMessages>
            {loading && <Spinner padding={20} size="large" />}
            <ChatMessages  messagesData={chatMessages} />
            <InputMessageChat isActive={true}/>
        </ChatContainerMessages>
    )
}
function funcToOrderByDate(array:[]){
    const orderedByTimeMessages  = array.sort((a:DataMessagesType, b:DataMessagesType) => {
                 return new Date( a.time).getTime() - new Date(b.time).getTime();
             })
    return orderedByTimeMessages.reverse() as []
}
