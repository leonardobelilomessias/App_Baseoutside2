import { Box, Center, HStack, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import ImagePhoto from '@/assets/develop.jpg'
import {Dimensions} from 'react-native';
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { FlatList } from "react-native-gesture-handler";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { baseURL } from "@/utils/params";
import { router } from "expo-router";
import { useFocusEffect } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface MediaProps{
    publication:{
        id:string,
        description:string
    }
    photos:string[]
}
export function MediaContainer(){
    
    return(
        <VStack>
            <Audios/>
            <ExclusivePhotos/>
            <Files/>
        </VStack>
    )
}

function Audios(){
    return(
        <VStack space="xs">
            <Text bold>Audios</Text>
            <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
            <FontAwesome5 name="headphones-alt" size={32} color="white" />
            <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
            </Center>
        </VStack>
    )
}
function Files(){
    return(
        <VStack space="xs">
            <Text bold>Arquivos</Text>
            <HStack space="md">
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="pdffile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="wordfile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="pdffile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
            </HStack>
        </VStack>
    )
}

function ExclusivePhotos(){
    const {dataAgent} = useDataAgent()
    useFocusEffect(useCallback(()=>{
        console.log('react')
        try{
             AxiosApi.get('/agent/publications',{params:{id:dataAgent.id}}).then((result)=>{
                setDataPhoto(result.data.slice(0,8));
                console.log('rodour')
            })
        }catch{
    
        }
    },[]))

    const [dataPhoto,setDataPhoto] = useState([] as MediaProps[])
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
                       <Pressable key={data.publication.id}  onPress={()=>{ router.push({ pathname: '/(tabs)/screensProfile/photoPublication', params: { publication_id:data.publication.id,urlPhoto:data.photos[0],description:data.publication.description } }) }}>
                       <Image m={2}  source={{uri:`${baseURL}/PhotosPublications/${data.photos[0]}`}} height={sizeSquarePhoto}  width={sizeSquarePhoto} />
                       </Pressable>
                    ))
       
                }
                <ImageBackground   style={{alignContent:'center', justifyContent:'center',alignItems:'center',width:sizeSquarePhoto, height:sizeSquarePhoto,margin:2}}  source={ImagePhoto} >
                    <Image m={2}  source={ImagePhoto} size="lg"/>
                    <Box bg="white" m={2} opacity={0.78} flex={1} width={sizeSquarePhoto} height={sizeSquarePhoto} zIndex={99} position="absolute"></Box>
                    <Text size="sm" padding={8}  position="absolute" zIndex={100} textAlign="center" color="$green500" bold>Ver todas fotos</Text>
                </ImageBackground>
            </HStack>

        </VStack>
    )
}


function Videos(){
    return(
        <VStack>
            <Text bold>Videos</Text>
            <Center width={100} height={150} bg="$orange200" borderRadius={'$md'}>
            <FontAwesome5 name="headphones-alt" size={32} color="white" />
            <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
            </Center>
        </VStack>
    )
}