import { DepoimentCardProps } from "@/types/ComponetsTypes/cardTypes";
import { linkNotFoundImageAvatar, linkToProfileAgent } from "@/utils/aplicationRouterLinks";
import { baseURL } from "@/utils/params";
import { VStack, HStack, Avatar, AvatarFallbackText, AvatarImage, Text } from "@gluestack-ui/themed";
import { HeaderPublication } from "../HeaderPublication";


export function DepoimentCard({image_profile,text,userName,id,created_by,created_to}:DepoimentCardProps){
    return(
        <VStack bg="white" borderColor="$gray200" borderRadius={8} height={150} width={260} borderWidth={1} key={id} marginRight={8} p={12}>
            <HeaderPublication user_name={userName} image_profile={image_profile} infoRoute={{pathName:linkToProfileAgent, params:{id:created_by, name:userName}} } />
            <Text size="sm" fontWeight="$light">
                {!!text&& text.slice(0,160)}
                {(!!text && text?.length) && " ..." }
            </Text>
        </VStack>
    )
}