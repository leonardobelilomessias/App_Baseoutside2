import { extendedConfig } from "@/theme/config"
import { linkNotFoundImageAvatar, linkToProfileMission } from "@/utils/aplicationRouterLinks"
import { formatLinkAvatarImage } from "@/utils/functions/validadeFields"
import { Avatar, AvatarFallbackText, AvatarImage, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import { router } from "expo-router"
import React from "react"
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MissionCardProps } from "@/types/ComponetsTypes/cardTypes"

export function MissionCard({name,field,image,numberActions,numberColabs, numberTasks, local,id}:MissionCardProps){
    const formatImageAvatar = formatLinkAvatarImage(image)
    return(
        <Pressable paddingVertical={12} onPress={()=>{router.push(linkToProfileMission)}}  borderBottomWidth={1}  borderBottomColor="$gray100">
        <VStack paddingVertical={0} >
            <HStack alignItems="center" space="lg"  >
                <Avatar bgColor="$black" size="lg" borderRadius="$full" borderWidth={2} borderColor="$gray300">
                            <AvatarFallbackText >
                            {name}
                            </AvatarFallbackText>
                        <AvatarImage source={{uri:formatImageAvatar}}/>    
                </Avatar>
                <VStack >
                    <Text  fontWeight="$bold" size="sm">
                        {name}
                    </Text>
                    <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                        {field}
                    </Text>
                    <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                        {local}
                    </Text>

                    <FooterMissionCard numberActions={numberActions} numberColabs={numberColabs} numberTasks={numberTasks}/>
                </VStack>
            </HStack>
        </VStack>
        </Pressable>
    )
}

type footerMissonCardProps={
    numberActions:number | string
    numberColabs:number | string
    numberTasks : number | string
}
function FooterMissionCard({numberActions,numberColabs,numberTasks}:footerMissonCardProps){
    return(
        <HStack alignContent="center" space="md" flexWrap="wrap" >
            <HStack alignContent="center" alignItems="center" justifyContent="center" >
                <MaterialCommunityIcons name="lightning-bolt" size={12}color={extendedConfig.tokens.colors.gray500} />
                <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    {numberActions} Açoes 
                </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} >
                <FontAwesome name="group" size={8} color={extendedConfig.tokens.colors.gray500} />
                <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    {numberColabs} Colabs 
                </Text>
            </HStack>
            <HStack space="xs" alignItems="center">
                <FontAwesome5  name="tasks" size={10} color={extendedConfig.tokens.colors.gray500}/>
                <Text   lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    {numberTasks} Taks
                </Text>
            </HStack>

        </HStack>
    )

}