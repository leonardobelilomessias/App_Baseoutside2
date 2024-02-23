import { useDataAgent } from "@/context/UserContext";
import { linkNotFoundImageAvatar } from "@/utils/aplicationRouterLinks";
import { baseURL } from "@/utils/params";
import { HStack, Avatar, AvatarFallbackText,Text, AvatarImage } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { string } from "yup";
import {Feather} from '@expo/vector-icons'
import { useRef } from "react";
import { format } from "date-fns";

type DataMessagesType ={
    userId : string
    userName: string
    text: string
    time: Date
    
}
export function ChatMessages({messagesData}:{messagesData:DataMessagesType[]}){
    const {dataAgent} = useDataAgent()
    const imageUser = `${baseURL}/Agent/${dataAgent.image_profile}`
    const lastIndex = messagesData.length - 1;
    const flatListRef = useRef();
  
    return(
        <FlatList 

            inverted={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingVertical:8}}
            data={messagesData}
            renderItem={({item})=>(
                <HStack   alignSelf={item.userId===dataAgent.id?"flex-end":"flex-start" } flexDirection={item.userId!==dataAgent.id?"row-reverse":"row" } margin={4} space="xs">
                <Text p={8} borderRadius={'$lg'} alignSelf={item.userName==='eu'?"flex-end":"flex-start" }bg={item.userId===dataAgent.id?"$green300":"$gray100"}  maxWidth={'85%'} >
                    <Text color={item.userId===dataAgent.id?"$white":"$gray800"} >{item.text}</Text>
                    {"\n"}
                    <Text  flex={1} size="2xs" color={item.userId===dataAgent.id?"$white":"$gray400"} alignSelf="flex-start" justifyContent="flex-start" textAlign="center">{formatHour(item.time)}</Text>
                   
                </Text>
                <Avatar bg={item.userId===dataAgent.id?"$green300":"$gray100"}  size="xs" alignSelf="flex-end">
                    
                    {item.userId===dataAgent.id&&
                    <AvatarImage source={{uri:imageUser}}/>
                    }
                    {item.userId!==dataAgent.id&&
                    <Feather size={16} name="user"/>
                    }
                </Avatar>
                </HStack>
            )}
            />
    )
}
function formatHour(time:Date){
    return format(time, "hh:mm")
}