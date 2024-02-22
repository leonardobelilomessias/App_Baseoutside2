import { FlatList } from "react-native"
import { ChatCard } from "./ChatCard"
import { CardChatType } from "@/types/ComponetsTypes/chatTypes"
import { fakeApi } from "@/api/fakeApi"
import { useEffect, useState } from "react"


export function ChatCardList(){
    const [listChats, setListChats] = useState([] as CardChatType[])
    useEffect(()=>{
        const data = fakeApi.get("/chatsAgents").then((resnponse)=>{setListChats(resnponse.data)}).catch((err)=>{ console.log(err)})
    },[])
    console.log("roda")
    return(
        <FlatList data={listChats}
        renderItem={({item})=>(
            <ChatCard dataCard={item}/>
        )}
        />

    )
}
const dataCardMock :CardChatType[] = [
    {
    userId:"01",
    userName:"John Doe",
    avatar:null,
    lastMessage:{
        text:"Hello",
        time:new Date(),
    }

},
{
    userId:"01",
    userName:"John Doe",
    avatar:null,
    lastMessage:{
        text:"Hello",
        time:new Date(),
    }

},
{
    userId:"01",
    userName:"John Doe",
    avatar:null,
    lastMessage:{
        text:"Hello",
        time:new Date(),
    }

}
]