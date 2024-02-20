import { VStack, Avatar, AvatarFallbackText, AvatarImage, Heading, HStack, ButtonText, Image, Text, Button } from "@gluestack-ui/themed"
import { router } from "expo-router"
import React, { useState } from "react"
import cover from '@/assets/vl.jpg'
import imgDepoiment from '@/assets/vl.jpg'
import { linkToNewSponsorAgent } from "@/utils/aplicationRouterLinks"



export function AvatarProfileMission(){
    const [isFollower,setIsFollower] = useState(false)
    return(

        <VStack flex={1} bg="$white" >
            <Image source={cover} size="full" flex={1} resizeMode="cover" justifyContent="flex-start" alignItems="flex-start" height={100} position="absolute"/>
            <Avatar borderWidth={2} borderColor="white"   alignSelf="center" size="xl" mt={'$5'}>
                <AvatarFallbackText>Base outside</AvatarFallbackText>
            <AvatarImage source={imgDepoiment}></AvatarImage>
            </Avatar>

            <Heading textAlign="center" bg="white" >Base outside</Heading>
            <Text fontSize={'$sm'} bg="white" color="$gray400" textAlign="center" lineHeight={'$sm'}>Empreendedor social</Text>
            <HStack space="md" alignSelf="center" padding={8} marginVertical={8}>
            {
            isFollower?
            <Button bgColor="#F7FDF7"  borderColor="$green400" borderWidth={1} borderRadius={8} size="sm" onPress={()=>{setIsFollower(false)}}>
              <ButtonText color="$green400"> inscrito</ButtonText>
            </Button>:
            <Button bg="$green400" size="sm" borderRadius={8} onPress={()=>{setIsFollower(true)}}>
              <ButtonText color="$white" >inscrever-se</ButtonText>
            </Button>
            }

            <Button flex={4} action="secondary" variant="outline" borderColor="$green300" size="sm" borderRadius={8} onPress={()=>{router.push(linkToNewSponsorAgent)}}>
                <ButtonText color="$green400" >  Patriocinar Mensalmente </ButtonText>
            </Button>
            </HStack>
        </VStack>
    )
}