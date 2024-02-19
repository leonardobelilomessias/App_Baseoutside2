import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { baseURL } from "@/utils/params";
import { VStack, HStack, Box, Text, Image, Spinner, Center } from "@gluestack-ui/themed";
import { router, useFocusEffect } from "expo-router";
import { Dimensions, Pressable, ImageBackground } from "react-native";
import ImagePhoto from '@/assets/develop.jpg'
import { useCallback, useState } from "react";
import { linkToPhotoPublication } from "@/utils/aplicationRouterLinks";


interface MediaProps{
    publication:{
        id:string,
        description:string
    }
    photos:string[]
}
export function PhotoList(){

    const [dataPhoto,setDataPhoto] = useState([] as MediaProps[])
    const windowWidth = Dimensions.get('window').width;
    const sizeSquarePhoto = (windowWidth-32)/3
    const [loadPhoto,setLoadPhoto] = useState(false)
    console.log(dataPhoto.length===0 && loadPhoto ===true)
    const {dataAgent} = useDataAgent()
    useFocusEffect(useCallback(()=>{
        AxiosApi.get('/agent/publications',{params:{id:dataAgent.id}})
        .then((result)=>{
                setLoadPhoto(true)
                setDataPhoto(result.data.slice(0,8) );
            })
        .finally(()=>console.log("finaly"))

    },[]))

    
    return(
        <VStack marginVertical={2} space="sm"  paddingBottom={10} flexWrap="wrap">
            <HStack space="xs" alignItems="center">
                <Text fontWeight="$medium">Fotos e Videos</Text>
            </HStack>
            <HStack     flexWrap="wrap" justifyContent="center">
   
                { // Render list photos
                   dataPhoto[0]?.publication?.id&& dataPhoto.map(data=>(
                       <Pressable key={data.publication.id}  onPress={()=>{ router.push({ pathname: linkToPhotoPublication, params: { publication_id:data.publication.id,urlPhoto:data.photos[0],description:data.publication.description } }) }}>
                       <Image m={2}  source={{uri:`${baseURL}/PhotosPublications/${data.photos[0]}`}} height={sizeSquarePhoto}  width={sizeSquarePhoto} />
                       </Pressable>
                    ))}
                { // render Last item to go full galery
                 dataPhoto[0]?.publication?.id&& <LastIten message="Ver todas fotos" sizeSquarePhoto={sizeSquarePhoto}/>
                }
                { //Render Container like a skeleton while fetch data images
                    (  dataPhoto.length ===0 ) && <LoadingImages  message="Carregando imagens" sizeSquarePhoto={sizeSquarePhoto}/>
                }
            </HStack>
        </VStack>
    )
}

function LastIten({sizeSquarePhoto,  message}:{ sizeSquarePhoto:number, message:string}){
    return(
        <ImageBackground   style={{alignContent:'center', justifyContent:'center',alignItems:'center',width:sizeSquarePhoto, height:sizeSquarePhoto,margin:2}}  source={ImagePhoto} >
        <Image m={2}  source={ImagePhoto} size="lg"/>
        <Box bg="white" m={2} opacity={0.78} flex={1} width={sizeSquarePhoto} height={sizeSquarePhoto} zIndex={99} position="absolute"></Box>
        <Text size="sm" padding={8}  position="absolute" zIndex={100} textAlign="center" color="$green500" bold>{message}</Text>
        </ImageBackground>
    )
}

function LoadingImages({sizeSquarePhoto,  message}:{ sizeSquarePhoto:number, message:string}){
    const exmaplePhoto = [0,1,2,3,4,5] 
    return(
             <HStack   position="relative"  flexWrap="wrap" justifyContent="center">
                {
                   exmaplePhoto.map(data=>(
                       <Pressable key={data}  >
                       <Box  m={2}  bgColor="$gray100" height={sizeSquarePhoto}  width={sizeSquarePhoto} />
                       </Pressable>
                    ))
       
                }
                <Center position="absolute" width={sizeSquarePhoto*3} height={sizeSquarePhoto*2} alignSelf="center" >
                    <Spinner size={'large'} />
                    <Text color="$green400" bold size="sm">Carregado fotos</Text>
                </Center>
            </HStack>
    )
}