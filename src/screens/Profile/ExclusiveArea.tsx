import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import ImagePhoto from '@/assets/develop.jpg'
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
export function ExclusiveArea(){
    return(
        <VStack>
            <ExclusicePhotos/>
            <ExclusiveVideos/>
        
        </VStack>
    )
}

function ExclusicePhotos(){
    return(
        <VStack marginVertical={24} space="md">
            <HStack space="xs" alignItems="center">
            <FontAwesome name="photo" size={14} color="black" />
                <Text fontWeight="$medium">Fotos</Text>
            </HStack>
            <HStack space="lg" alignItems="center" justifyContent="center">
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
            </HStack>
            <HStack space="lg" alignItems="center" justifyContent="center">
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
                <ImageBackground borderRadius={8} style={{alignContent:'center', justifyContent:'center',alignItems:'center'}}  source={ImagePhoto} >
                <Image borderRadius={8}  source={ImagePhoto} size="lg"/>
                <Box bg="white" opacity={0.78} flex={1} width={110} height={100} zIndex={99} position="absolute"></Box>
                    <Text size="sm" padding={8}  position="absolute" zIndex={100} textAlign="center" color="$green500" bold>Ver todas fotos</Text>
                </ImageBackground>
                
            </HStack>
        </VStack>
    )
}

function ExclusiveVideos(){
    return(
        <VStack marginVertical={24} space="md">
            <HStack space="xs" alignItems="center">
            <FontAwesome name="video-camera" size={14} color="black" />
                <Text fontWeight="$medium"  >Videos</Text>
            </HStack>
            <HStack space="lg" alignItems="center" justifyContent="center">
                <Image borderRadius={8}  source={ImagePhoto} size="lg" height={150}/>
                <Image borderRadius={8}  source={ImagePhoto} size="lg" height={150}/>
                <ImageBackground borderRadius={8} style={{alignContent:'center', justifyContent:'center',alignItems:'center'}}  source={ImagePhoto} >
                <Image borderRadius={8}  source={ImagePhoto} size="lg" height={150}/>
                <Box bg="white" opacity={0.78} flex={1} width={110} zIndex={99} position="absolute" height={150}></Box>
                    <Text  position="absolute" zIndex={100} textAlign="center" size="sm" color="$green500" bold>Ver todos videos</Text>
                </ImageBackground>
                
            </HStack>
        </VStack>
    )
}