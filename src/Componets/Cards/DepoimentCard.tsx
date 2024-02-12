import { DepoimentCardProps } from "@/types/ComponetsTypes/cardTypes";
import { linkNotFoundImageAvatar } from "@/utils/aplicationRouterLinks";
import { baseURL } from "@/utils/params";
import { VStack, HStack, Avatar, AvatarFallbackText, AvatarImage, Text } from "@gluestack-ui/themed";


export function DepoimentCard({imageCover,text,userName,id}:DepoimentCardProps){
    const image = (imageCover === null || imageCover === undefined)?linkNotFoundImageAvatar:imageCover
    return(
        <VStack borderColor="$gray200" borderRadius={8} height={150} width={260} borderWidth={1} key={id} marginRight={8} p={12}>
            <HStack alignItems="center">
                
                <Avatar size="sm" bgColor="$green400" marginRight={8}>
                    <AvatarFallbackText >name user</AvatarFallbackText>
                    <AvatarImage source={{uri:image}}></AvatarImage>

                </Avatar>
                <Text fontWeight="$bold">{userName}</Text>
            </HStack>
            <Text size="sm" fontWeight="$light">
                {text}
            </Text>
        </VStack>
    )
}