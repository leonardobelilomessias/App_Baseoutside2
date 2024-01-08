import { Box, Image, Text, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import openImage from '@/assets/develop.jpg'
import { Axios } from "axios";
import { AxiosApi } from "@/api";
import { useEffect, useState } from "react";
import { baseURL } from "@/utils/params";
import { useDataAgent } from "@/context/UserContext";
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
            {
                !!resultPublication.photos&& resultPublication?.photos[0]?.url&&
                <Box width={450} height={450} bg="$green300">
                    <Image source={{uri:`${baseURL}/PhotosPublications/${resultPublication.photos[0].url}`}} resizeMode="cover" size="full"></Image>
                </Box>
            }
            <VStack p={4}>
            <Text bold>{dataAgent.name}</Text>
            <Text>{!!resultPublication?.publication?.description&& resultPublication?.publication?.description}</Text>
            </VStack>


        </VStack>
    )
}