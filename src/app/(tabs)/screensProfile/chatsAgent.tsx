import { ChatList } from "@/Componets/Chat/ChatList";
import { ChatCardList } from "@/Componets/Chat/ChatCardList";
import { Avatar, AvatarFallbackText, HStack, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Pressable } from "react-native";

export default function ChatsAgent(){
    return(
        <ChatList>
            <ChatCardList/>
        </ChatList>
    )
}
