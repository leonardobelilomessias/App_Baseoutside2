import { ChatContainerMessages } from "@/Componets/Chat/ChatContainerMessages"
import { ChatMessages } from "@/Componets/Chat/ChatMessages"
import { InputMessageChat } from "@/Componets/Chat/InputMessageChat"
import { useDataAgent } from "@/context/UserContext"

type DataMessagesType ={
    userId : string
    userName: string
    text: string
    time: Date
    
}

export function ChatAgentScreen(){
    const {dataAgent} = useDataAgent()
    const messagesMock :DataMessagesType[] = [
        {userId: dataAgent.id, userName:'eu',text:"oi tudo bem?", time:new Date()},
        {userId:"02",userName:'ele',text:"Bem sim e vc??", time:new Date()},
        {userId:dataAgent.id,userName:'eu',text:"Tudo bem tambem,Graças a Deus", time:new Date()},
        {userId:"02",userName:'ele',text:"Que bom!", time:new Date()},
        {userId:dataAgent.id,userName:'eu',text:"Aqui... não sei se você esta sabendo. amanha é uma data especial para a nossa missão. Então gostaria de te convidar para participar da nossa reunião especial de comemoração", time:new Date()},
        {userId:dataAgent.id,userName:'eu',text:"oi tudo bem?", time:new Date()},
        {userId:"02",userName:'ele',text:"oi tudo bem?", time:new Date()},
        {userId:dataAgent.id,userName:'ele',text:"oi tudo bem?", time:new Date()},
        {userId:dataAgent.id, userName:'ele',text:"oi tudo bem?", time:new Date()}
    
    ]
    return(
        <ChatContainerMessages>
            <ChatMessages  messagesData={messagesMock} />
            <InputMessageChat isActive={true}/>
        </ChatContainerMessages>
    )
}
