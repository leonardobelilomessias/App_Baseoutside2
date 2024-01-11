import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import ImagePhoto from '@/assets/develop.jpg'
import {Dimensions} from 'react-native';
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { baseURL } from "@/utils/params";

interface MediaProps{
    publication:{
        id:string
    }
    photos:string[]
}
export function MediaContainer(){
    
    return(
        <VStack>
            <ExclusivePhotos/>
        </VStack>
    )
}

function ExclusivePhotos(){
    const {dataAgent} = useDataAgent()
    const [dataPhoto,setDataPhoto] = useState([] as MediaProps[])
    useEffect(()=>{
        console.log('react')
        try{
             AxiosApi.get('/agent/publications',{params:{id:dataAgent.id}}).then((result)=>{
                setDataPhoto(result.data.slice(0,8));
                console.log('rodour')
            })
        }catch{
    
        }
    },[])

    
    const windowWidth = Dimensions.get('window').width;
    const sizeSquarePhoto = (windowWidth-32)/3
    
    return(
        <VStack marginVertical={2} space="sm"  paddingBottom={10} flexWrap="wrap">
            <HStack space="xs" alignItems="center">

                <Text fontWeight="$medium">Fotos e Videos</Text>
            </HStack>
            <HStack     flexWrap="wrap">
                {
                   dataPhoto[0]?.publication?.id&& dataPhoto.map(data=>(
                        <Image m={2}  source={{uri:`${baseURL}/PhotosPublications/${data.photos[0]}`}} height={sizeSquarePhoto} key={data.publication.id}  width={sizeSquarePhoto} />
                    ))
       
                }
                <ImageBackground  m={2} style={{alignContent:'center', justifyContent:'center',alignItems:'center',width:sizeSquarePhoto, height:sizeSquarePhoto,margin:2}}  source={ImagePhoto} >
                    <Image m={2}  source={ImagePhoto} size="lg"/>
                    <Box bg="white" m={2} opacity={0.78} flex={1} width={sizeSquarePhoto} height={sizeSquarePhoto} zIndex={99} position="absolute"></Box>
                    <Text size="sm" padding={8}  position="absolute" zIndex={100} textAlign="center" color="$green500" bold>Ver todas fotos</Text>
                </ImageBackground>
            </HStack>

        </VStack>
    )
}