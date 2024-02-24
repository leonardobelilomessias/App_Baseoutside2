import { useDataAgent } from "@/context/UserContext";
import { baseURL } from "@/utils/params";
import { HStack, Avatar, Text, AvatarImage,  } from "@gluestack-ui/themed";
import {  SectionList } from "react-native";
import {Feather} from '@expo/vector-icons'
import { DataMessagesType } from "@/types/ComponetsTypes/chatTypes";
import { formatHourAndMinutes } from "@/utils/functions/functionTimes";
import { useEffect, useState } from "react";
import { LabelSeparatorDates } from "./LabelSeparatorDates";
import { formatToSectionList, funcToOrderByDate } from "../chatFunctions";

type FormatToSectionListTypes= {
    title: string;
    data: DataMessagesType[];
}[]

export function ChatMessages({messagesData}:{messagesData:DataMessagesType[]}){
    const {dataAgent} = useDataAgent()
    const imageUser = `${baseURL}/Agent/${dataAgent.image_profile}`
    const [listchats,setListChats] = useState([] as FormatToSectionListTypes)
    useEffect(()=>{
        const formatedTosectionList = formatToSectionList(messagesData)
        setListChats(formatedTosectionList)
    },[messagesData])
     
    return(
            <SectionList 
                sections={funcToOrderByDate(listchats).reverse()}
                inverted
                renderSectionFooter={({section: {title}})=>(<LabelSeparatorDates title={title} />  )}
                renderItem={({item,index})=>(
                    <HStack   alignSelf={item.send_by_id===dataAgent.id?"flex-end":"flex-start" } flexDirection={item.send_by_id!==dataAgent.id?"row-reverse":"row" } margin={4} space="xs">
                        <Text p={8} borderRadius={'$lg'} alignSelf={item.userName==='eu'?"flex-end":"flex-start" }bg={item.send_by_id===dataAgent.id?"$green300":"$gray100"}  maxWidth={'85%'} >
                            <Text color={item.send_by_id===dataAgent.id?"$white":"$gray800"} >{item.text}</Text>
                            {"\n"}
                            <Text  flex={1} size="2xs" color={item.send_by_id===dataAgent.id?"$white":"$gray400"} alignSelf="flex-start" justifyContent="flex-start" textAlign="center">{formatHourAndMinutes(item.time)}</Text>
                        </Text>
                        <Avatar bg={item.send_by_id===dataAgent.id?"$green300":"$gray100"}  size="xs" alignSelf="flex-end">
                            {item.send_by_id===dataAgent.id&& <AvatarImage source={{uri:imageUser}}/>}
                            {item.send_by_id!==dataAgent.id&&<Feather size={16} name="user"/>}
                        </Avatar>
                    </HStack>
                )}
            /> 
    )
}

