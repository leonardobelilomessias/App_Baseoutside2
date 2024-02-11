import { useDataAgent } from "@/context/UserContext";
import { HStack, Avatar, AvatarFallbackText,Text } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { string } from "yup";

type DataMessagesType ={
    userId : string
    userName: string
    text: string
    time: Date
    
}
export function ChatMessages({messagesData}:{messagesData:DataMessagesType[]}){
    const {dataAgent} = useDataAgent()
    return(
        <FlatList 
            contentContainerStyle={{paddingVertical:8}}
            data={messagesData}
            renderItem={({item})=>(
                <HStack   alignSelf={item.userId===dataAgent.id?"flex-end":"flex-start" } flexDirection={item.userId!==dataAgent.id?"row-reverse":"row" } margin={4} space="xs">
                <Text p={8} borderRadius={'$lg'} alignSelf={item.userName==='eu'?"flex-end":"flex-start" }bg="$green400"  maxWidth={'85%'} >
                    <Text color="$white" >{item.text}</Text>
                    {"\n"}
                    <Text  flex={1} size="2xs" color="white" alignSelf="flex-start" justifyContent="flex-start" textAlign="center">20:21</Text>
                   
                </Text>
                <Avatar bg='$green600' size="xs" alignSelf="flex-end">
                    <AvatarFallbackText>{item.userName}</AvatarFallbackText>
                </Avatar>
                </HStack>
            )}
            />
    )
}