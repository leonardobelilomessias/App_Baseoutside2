import { useDataAgent } from "@/context/UserContext";
import { baseURL } from "@/utils/params";
import { HStack, Avatar, AvatarFallbackText,Text, AvatarImage, Spinner, Box } from "@gluestack-ui/themed";
import { FlatList, SectionList } from "react-native";
import {Feather} from '@expo/vector-icons'
import { format, isToday, isYesterday } from "date-fns";
import { DataMessagesType } from "@/types/ComponetsTypes/chatTypes";
import { formatDataExtensive } from "@/utils/functions/functionTimes";

export function ChatMessages({messagesData}:{messagesData:DataMessagesType[]}){
    const {dataAgent} = useDataAgent()
    const imageUser = `${baseURL}/Agent/${dataAgent.image_profile}`
    const result = [] as Date[]
    messagesData.forEach((data)=>{

        if(!result.includes(data.time)){
            result.push(data.time)
        }
    })
    const DATA = result.map((item)=>{
        
        const filtered = messagesData.filter((message)=>(message.time===item ))
        return{title:item, data:filtered}

    })

    return(
        <>
            <SectionList 
                        
                        sections={funcToOrderByDate(DATA).reverse()}
                        inverted
                        renderSectionFooter={({section: {title}})=>(
                            <Label title={title} />
                        )}

                        renderItem={({item,index})=>(
                            <HStack   alignSelf={item.send_by_id===dataAgent.id?"flex-end":"flex-start" } flexDirection={item.send_by_id!==dataAgent.id?"row-reverse":"row" } margin={4} space="xs">
                                <Text p={8} borderRadius={'$lg'} alignSelf={item.userName==='eu'?"flex-end":"flex-start" }bg={item.send_by_id===dataAgent.id?"$green300":"$gray100"}  maxWidth={'85%'} >
                                    <Text color={item.send_by_id===dataAgent.id?"$white":"$gray800"} >{item.text}</Text>
                                    {"\n"}
                                    <Text  flex={1} size="2xs" color={item.send_by_id===dataAgent.id?"$white":"$gray400"} alignSelf="flex-start" justifyContent="flex-start" textAlign="center">{formatHour(item.time)}</Text>
                                
                                </Text>
                                <Avatar bg={item.send_by_id===dataAgent.id?"$green300":"$gray100"}  size="xs" alignSelf="flex-end">
                                    
                                    {item.send_by_id===dataAgent.id&&
                                    <AvatarImage source={{uri:imageUser}}/>
                                    }
                                    {item.send_by_id!==dataAgent.id&&
                                    <Feather size={16} name="user"/>
                                }
                                </Avatar>
                            </HStack>
                        )}
            /> 
        </>
    )
}


function Label({title}:{title:Date}){
    return(
        <HStack  alignItems="center"  alignContent="center" justifyContent="center">
            <Text textAlign="center" size="2xs" bold marginVertical={8}  paddingHorizontal={8} color="$gray500" bg="$gray100"   >
            { (!isToday(title) && !isYesterday(title))&&formatDataExtensive(title).extensive}
            {isToday(title)&&<>Hoje</>}
            {isYesterday(title)&&<>Ontem</>}
            </Text>
        </HStack>
    )
}
function formatHour(time:Date){
    return format(time, "hh:mm")
}

function funcToOrderByDate(array:any[]){
    const orderedByTimeMessages  = array.sort((a:DataMessagesType, b:DataMessagesType) => {
                 return new Date( a.time).getTime() - new Date(b.time).getTime();
             })
    return orderedByTimeMessages.reverse() as []
}
