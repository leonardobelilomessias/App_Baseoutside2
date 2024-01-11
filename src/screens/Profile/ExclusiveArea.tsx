import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import ImagePhoto from '@/assets/develop.jpg'
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import { extendedConfig } from "@/theme/config";
export function ExclusiveArea(){
    return(
        <VStack space="md">
           
            <ExclusiveGroups/>
        
        </VStack>
    )
}

function ExclusiveGroups(){
    return(
        <>
        <HStack justifyContent="space-between" padding={10}borderBottomWidth={1} borderBottomColor="$gray200" paddingBottom={10}>
            <Text bold color="$gray600">Grupos de conversa</Text>
            <Octicons name="diff-added" size={20} color={extendedConfig.tokens.colors.green500} />
        </HStack>
        <VStack space="xs">

            <Box borderRadius={'$md'} bgColor="$green400" padding={10}>
            <Text color="$white" bold>Entendendo o chat</Text>
            </Box>

            <Box borderRadius={'$md'} bgColor="$green400" padding={10}>
            <Text color="$white" bold>Entendendo o chat</Text>
            </Box>

            <Box borderRadius={'$md'} bgColor="$green400" padding={10}>
            <Text color="$white" bold>Novas regras</Text>
            </Box>
            <Box borderRadius={'$md'} bgColor="$green400" padding={10}>
            <Text color="$white" bold>Qaundo começa a nova temporada?</Text>
            </Box>
        
            <Box borderRadius={'$md'} bgColor="$white" borderWidth={1} borderColor="$green400" padding={10}>
            <Text textAlign="center" color="$green400" bold>Ver todas conversar</Text>
            </Box>
        </VStack>
        </>
    )
}



function ExclusiveVideos(){
    return(
        <VStack marginVertical={24} space="md">
            <HStack space="xs" alignItems="center">
            <FontAwesome name="group" size={14} color="black" />
                <Text fontWeight="$medium"  >Comunidade</Text>
            </HStack>
            <HStack space="lg" alignItems="center" justifyContent="center">
                <Image  source={ImagePhoto} size="lg" height={150}/>
                <Image   source={ImagePhoto} size="lg" height={150}/>
                <ImageBackground  style={{alignContent:'center', justifyContent:'center',alignItems:'center'}}  source={ImagePhoto} >
                <Image  source={ImagePhoto} size="lg" height={150}/>
                <Box bg="white" opacity={0.78} flex={1} width={110} zIndex={99} position="absolute" height={150}></Box>
                    <Text  position="absolute" zIndex={100} textAlign="center" size="sm" color="$green500" bold>Ver todos videos</Text>
                </ImageBackground>
                
            </HStack>
        </VStack>
    )
}