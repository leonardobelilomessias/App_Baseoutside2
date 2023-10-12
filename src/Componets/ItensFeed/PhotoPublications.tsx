import { Avatar, AvatarFallbackText, Badge, BadgeIcon, BadgeText, Box, HStack, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import vl from '@/assets/vl.jpg'
import { AgentDTO, AgentsFake } from "@/mocks/agents/fakerAgents";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { BottonItemFeed } from "../BottonItemFeed";


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
export function PhotoPublications({id_colab}:{id_colab:string}){
    const {dataAgent} = useDataAgent()
   const [content,setContent] = useState([] as ContentDTO[])
    async function getContent() {
        try{
            console.log(dataAgent.id)

            const result = (await AxiosApi.get('/agent/feedColab',{params:{id_agent:dataAgent.id}})).data
            console.log(result)
            setContent(result)
        }catch(e){
            console.log(e)
        }
    }
 
    useEffect(()=>{
        getContent()
    },[])
    return(
        <>
            {content.map((publication)=>(
                <CardPublication publication={publication} key={publication.publication_id}/>
            ))}
        </>
    )
}

function CardPublication({publication}:{publication:ContentDTO}){
    return(
        <>
        <Box borderBottomColor="$gray300" borderBottomWidth={0.35}>
            <VStack bg="$white"  borderRadius={'$2xl'} p={12}  width={'100%'} >
                <Pressable onPress={()=>{router.push('/screens/agentProfile')}}>

                <HStack p={8}  zIndex={1} alignItems="center" space={'md'} justifyContent="space-between">
                    <HStack alignItems="center" space="md">
                    <Avatar bgColor="$green400" size="sm" borderRadius="$full">
                        <AvatarFallbackText>{publication.name}</AvatarFallbackText>
                    </Avatar>
                    <Text>{publication.name}</Text>
                    </HStack>
                    <Badge  size="sm" variant="solid" borderRadius="$none" action="success">
                        <BadgeText>New feature</BadgeText>
                    </Badge>
                </HStack>
                </Pressable>
                <Image source={vl} w={'100%'}  h={300}>
                </Image>
                <Text fontSize={'$sm'} sx={{overflow:'hidden'}}>
                    {publication.description}
            </Text>
            <BottonItemFeed/>
            </VStack>

            </Box>
        </>
    )
}