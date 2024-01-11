import { Avatar, AvatarImage, Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import openImage from '@/assets/develop.jpg'
import { Axios } from "axios";
import { AxiosApi } from "@/api";
import { useEffect, useState } from "react";
import { baseURL } from "@/utils/params";
import { useDataAgent } from "@/context/UserContext";
import {Dimensions} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

type IPublication={
    publication:{
        id:string
        description:string
    }
    photos:{
        url:string
    }[]
}
export default function photoPublication(){
    const {dataAgent}  = useDataAgent()
    const [resultPublication,setResultPublication] = useState({} as IPublication)
    const {publication_id} = useLocalSearchParams();
    const windowWidth = Dimensions.get('window').width;
    
    useEffect(()=>{
        fetchPublication()
    },[])
    async function fetchPublication(){
        const publication = await AxiosApi.get('/agent/fetchPublicationAgentById',{params:{publication_id:publication_id}})
        const data = publication.data as IPublication
        setResultPublication(publication.data)
        console.log(publication.data.photos[0])

    }
    return(
        <VStack flex={1} bg="$white">
            <HStack space="md" alignContent="center" justifyContent="space-between" alignItems="center"  p={8} mt={16}>
                <HStack alignContent="center" alignItems="center">
                <Avatar size="sm">
                    <AvatarImage source={{uri:`${baseURL}/Agent/${dataAgent.image_profile}`}}/>
                </Avatar>
                <Text bold> {dataAgent.name}</Text>
                </HStack>
                <Box  >
                <SimpleLineIcons name="options-vertical" size={14} color="black" />
                </Box>
            </HStack>
            {
                (!!resultPublication.photos&& resultPublication?.photos[0]?.url)&&
                <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/PhotosPublications/${resultPublication.photos[0].url}`}} resizeMode="cover" size="full"/>
                
                </Box>
            }
            {
                (Object.keys(resultPublication).length===0 )&&
             <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/NotFound/not_found_image.jpg`}} resizeMode="cover" size="full"/>
            </Box>
            }
            <VStack p={4}>
            <Text bold>{dataAgent.name}</Text>
            <Text>{!!resultPublication?.publication?.description&& resultPublication?.publication?.description}</Text>
            </VStack>


        </VStack>
    )
}