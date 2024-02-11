import { HStack, Avatar, AvatarFallbackText, VStack, Pressable,Text } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { FlatList } from "react-native"
import { ChatCard } from "./ChatCard"
import { CardChatType } from "@/types/ComponetsTypes/chatTypes"


export function ChatCardList(){

    return(
        <FlatList data={dataCardMock}
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