import { CardChatType } from "@/types/ComponetsTypes/chatTypes"
import { HStack, Avatar, AvatarFallbackText, VStack, Pressable, Text } from "@gluestack-ui/themed"
import { router } from "expo-router"

export function ChatCard({dataCard}:{dataCard:CardChatType}){
    const formatedText = formatText(dataCard.lastMessage.text) 
    const formatedTime = formatTime(dataCard.lastMessage.time)
    return(
        <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/chatProfile')}}>
            <HStack space="lg" paddingVertical={16} borderBottomWidth={1} borderColor="$gray200"  flex={1}>
                <Avatar>
                    <AvatarFallbackText>{dataCard.userName}</AvatarFallbackText>
                </Avatar>
                <VStack space="2xs"  flex={1}>
                    <HStack alignContent="space-between" justifyContent="space-between" flex={1} >
                        <Text bold>{dataCard.userName}</Text>
                        <Text size="xs">{ formatedTime}</Text>
                    </HStack>
                    <Text size="sm"  color="$gray500">{formatedText}</Text>
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
    return time.toLocaleTimeString().slice(0,5)
}