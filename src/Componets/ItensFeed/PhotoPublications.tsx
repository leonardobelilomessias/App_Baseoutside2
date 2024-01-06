import { Avatar, AvatarFallbackText, AvatarImage, Badge, BadgeIcon, BadgeText, Box, HStack, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import vl from '@/assets/vl.jpg'
import { AgentDTO, AgentsFake } from "@/mocks/agents/fakerAgents";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { BottonItemFeed } from "../BottonItemFeed";
import {ImageProfile} from '@/assets/images.jpeg'


type ContentDTO={
    

		name: string,
		id_colab: string
		image_profile:string
		description: string
		publication_id: string
		url: string
	}
const publications =[
    {
    

		name: 'string',
		id_colab: 'string',
		image_profile:'string',
		description: 'string',
		publication_id: 'string',
		url: 'string'
	}
] 
export function PhotoPublications(publication:ContentDTO){
   
 

    return(

                <CardPublication publication={publication} key={publication.publication_id}/>


    )
}

function CardPublication({publication}:{publication:ContentDTO}){
    return(
        <>
        <Box borderBottomColor="$gray300" borderBottomWidth={0}>
            <VStack bg="$white"  p={12}  width={'100%'}  borderColor="$gray200" borderTopWidth={0.35}  borderBottomWidth={0.45} softShadow="1">
                <Pressable onPress={()=>{router.push('/(tabs)/otherProfile')}}>

                <HStack p={8}  zIndex={1} alignItems="center" space={'md'} justifyContent="space-between">
                    <HStack alignItems="center" space="sm">
                    <Avatar bgColor="$green400" size="sm" borderRadius="$full" >
                        <AvatarImage source={{uri:`http://192.168.15.169:3333/Agent/${publication.image_profile?publication.image_profile:'images.jpeg'}`}}/>
                        <AvatarFallbackText>{publication.name}</AvatarFallbackText>
                    </Avatar>
                    <Text bold size="sm"> {publication.name}</Text>
                    </HStack>
                    <Badge  size="sm" variant="solid" borderRadius="$none" action="success">
                        <BadgeText>New feature</BadgeText>
                    </Badge>
                </HStack>
                </Pressable>
                <Image source={{uri:`http://192.168.15.169:3333/PhotosPublications/${publication.url}`}} w={'100%'}  h={300}>
                </Image>

            <BottonItemFeed>
            <Text fontSize={'$sm'} sx={{overflow:'hidden'}}>
                    <Text size="sm" color="$gray500" bold marginRight={8}>leobelilo </Text> {publication.description}
            </Text>
            </BottonItemFeed>

            </VStack>

            </Box>
        </>
    )
}