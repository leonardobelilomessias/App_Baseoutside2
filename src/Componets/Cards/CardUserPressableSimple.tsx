import { linkNotFoundImageAvatar, linkToProfileAgent } from "@/utils/aplicationRouterLinks"
import { baseURL } from "@/utils/params"
import { Avatar, AvatarFallbackText, AvatarImage, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import { router } from "expo-router"



type CardUserPressableSimpleProps={
    name:string
    link:string
    label:string
    id:string
    image:string |null
}
export function CardUserPressableSimple({name, label, link,id,image}:CardUserPressableSimpleProps){
    const imageAvatar = (image=== null || image === undefined)?linkNotFoundImageAvatar:baseURL+"/"+image
    return(
        <>
        <Pressable paddingVertical={12} onPress={()=>{router.push(linkNotFoundImageAvatar)}} borderBottomWidth={0.7} borderBottomColor="$gray100">
            <HStack alignItems="center"space="lg">
                <Avatar 

                        bgColor="$black"
                        size="md"
                        borderRadius="$full">
                            <AvatarFallbackText>
                                {name}
                            </AvatarFallbackText>
                            <AvatarImage source={{uri:imageAvatar}}/>
                </Avatar>
                 <VStack>
                        <Text fontWeight="$bold">
                           {name}
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            {label}
                        </Text>
                </VStack>
            </HStack>
        </Pressable>
        </>
    )
}