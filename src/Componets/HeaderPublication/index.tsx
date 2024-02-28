import { VStack, HStack, Text } from "@gluestack-ui/themed"
import { AvatarImageAgent } from "../AvatarImageAgent"

export function HeaderPublication({image_profile,user_name, direction}:{image_profile:string | null, user_name:string, direction?:"horizontal"| "vertical"}){
    if(direction==="vertical")return(
    <VStack alignItems="center">
        <AvatarImageAgent  image_profile={image_profile} sizeAvatar="sm" sizeIcon={10}/>
        <Text bold>{user_name}</Text>
    </VStack>)
    return(
    <HStack space="md" alignItems="center">
            <AvatarImageAgent  image_profile={image_profile} sizeAvatar="sm" sizeIcon={20}/>
            <Text bold>{user_name}</Text>
    </HStack>)
}