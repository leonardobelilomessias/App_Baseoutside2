import { VStack, HStack, Text, Pressable } from "@gluestack-ui/themed"
import { AvatarImageAgent } from "../AvatarImageAgent"
import { router } from "expo-router"
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks"

type HeaderPublicationType={
    image_profile:string | null | undefined,
     user_name:string, 
     direction?:"horizontal"| "vertical", 
     infoRoute:{
        pathName:string
        params:any
     }
}
export function HeaderPublication({image_profile,user_name, direction, infoRoute}:HeaderPublicationType){
    if(direction==="vertical")return(
    <VStack alignItems="center">
        <AvatarImageAgent  image_profile={image_profile} sizeAvatar="sm" sizeIcon={10}/>
        <Text bold>{user_name}</Text>
    </VStack>)
    return(
    <Pressable onPress={()=>{router.push({pathname:infoRoute.pathName, params:infoRoute.params})}}>
        <HStack space="md" alignItems="center">
                <AvatarImageAgent  image_profile={image_profile} sizeAvatar="sm" sizeIcon={20}/>
                <Text bold>{user_name}</Text>
        </HStack>
    </Pressable>
    )
}