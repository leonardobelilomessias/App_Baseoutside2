import { FlatList } from "react-native"
import { ChatCard } from "./ChatCard"
import { CardChatType } from "@/types/ComponetsTypes/chatTypes"
import { useEffect, useState } from "react"
import { Spinner } from "@gluestack-ui/themed"
import { fetchDataApi } from "@/api/handlerApi"


export function ChatCardList(){
    const [listChats, setListChats] = useState([] as CardChatType[])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
       fetchDataApi({path:"/chatsAgents", funcSetArray:setListChats,funcLoad:setLoading})
        },[])
    return(
        <>
            {!!loading &&<Spinner size="large" />}
            <FlatList data={listChats} renderItem={({item})=>(<ChatCard dataCard={item}/>)}/>
        </>
    )
}

