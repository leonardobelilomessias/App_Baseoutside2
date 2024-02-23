import { CardChatType } from "@/types/ComponetsTypes/chatTypes"
import { linkToChatAgent } from "@/utils/aplicationRouterLinks"
import { HStack, VStack, Pressable, Text,  } from "@gluestack-ui/themed"
import { format } from "date-fns"
import { router } from "expo-router"
import { BadgeNotification } from "../BadgeNotification"
import { baseURL } from "@/utils/params"
import { AvatarImageAgent } from "../AvatarImageAgent"

export function ChatCard({dataCard}:{dataCard:CardChatType}){
    const formatedText = formatText(dataCard.lastMessage.text) 
    const formatedTime = formatTime(dataCard.lastMessage.time)
    const unviewedMessages = (!dataCard.unviewed)? false:true
    const imageChatUser = `${baseURL}/Agent/${dataCard.avatar}`
    return(
        <Pressable onPress={()=>{router.push({pathname:linkToChatAgent, params:{name:dataCard.userName}})}}>
            <HStack space="lg" paddingVertical={16} borderBottomWidth={1} borderColor="$gray200"  flex={1}>
                <AvatarImageAgent image_profile={dataCard.avatar} sizeIcon={24}/>
                <VStack space="2xs"  flex={1}>
                    <HStack alignContent="space-between" justifyContent="space-between" flex={1} >
                        <Text bold>{dataCard.userName}</Text>
                        <Text size="xs">{ formatedTime}</Text>
                    </HStack>
                    <HStack alignContent="space-between" justifyContent="space-between"  flex={1} >
                    <Text size="sm"  color="$gray500" height={26} flex={1} alignItems="center" justifyContent="center" >{formatedText}</Text>
                    {
                    unviewedMessages&&
                    <BadgeNotification amount={dataCard.unviewed}/>
                    }

                    </HStack>
                </VStack>
            </HStack>
        </Pressable>
    )
}

function formatText(text:string){
    if (text.length>15) return text.slice(0,40)+"..."
    return text
}

function formatTime(time:Date){
    return format(time,"hh:mm")
}