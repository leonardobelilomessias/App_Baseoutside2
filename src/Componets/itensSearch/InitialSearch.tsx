import { Avatar, AvatarFallbackText, Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Imageselect from '@/assets/images.jpeg'
import RandoImage from '@/assets/develop.jpg'

export function InitialSearch(){
    return(

            <ScrollView>
               <LastUpdates/>
            </ScrollView>        

    )
}

function TopAgents(){
    return(
        <VStack >
            <Text bold>Top Agentes</Text>
            <HStack space="md"marginVertical={8} >
                <VStack alignItems="center" borderWidth={1} borderColor="$green200" borderRadius={8} width={'$1/3'} p={4} >
                    <Avatar bgColor="$green200" size="sm">
                        <AvatarFallbackText>Agent Top</AvatarFallbackText>
                    </Avatar>
                    <Text marginTop={8} textAlign="center" bold size="sm"> Agent lorentwo</Text>
                </VStack>
            </HStack>
            <LastUpdates/>
        </VStack>
    )
}

function LastUpdates(){
    return(
        <>
        <Text bold>Ultimas atualizaçoes</Text>
            <HStack   height={100} >
                <Box m={2}  flex={1} bg="$green300" >
                <Image source={RandoImage} flex={1} ></Image>
                </Box>         
                <Box m={2} flex={1} bg="$green300">
                <Image source={Imageselect} flex={1} ></Image>
                </Box>         
                <Box  m={2} flex={1} bg="$green300" >
                <Image source={RandoImage} flex={1} ></Image>
                </Box>
            </HStack>
            <HStack   height={200}  >
                <Box m={3}  flex={2} bg="$green400" >
                        <Image source={RandoImage} flex={1} ></Image>
                </Box>         
                <VStack flex={1}>
                <Box m={2} flex={1} bg="$green300">
                <Image source={Imageselect} flex={1} ></Image>
                </Box>  
                <Box m={2} flex={1} bg="$green300">
                <Image source={RandoImage} flex={1} ></Image>
                </Box>  
                </VStack>       
            </HStack>
            <HStack   height={100} >
                <Box m={2}  flex={1} bg="$green500" >
                <Image source={Imageselect} flex={1} ></Image>
                </Box>         
                <Box m={2} flex={1} bg="$green300">
                <Image source={RandoImage} flex={1} ></Image>
                </Box>         
                <Box  m={2} flex={1} bg="$green300" >
                <Image source={RandoImage} flex={1} ></Image>
                </Box>
            </HStack>
            <HStack   height={200} flexDirection="row-reverse" >
                <Box m={3}  flex={2} bg="$green300" >
                <Image source={Imageselect} flex={1} ></Image>
                </Box>         
                <VStack flex={1}>
                <Box m={2} flex={1} bg="$green300">
                <Image source={RandoImage} flex={1} ></Image>
                </Box>  
                <Box m={2} flex={1} bg="$green300">
                <Image source={Imageselect} flex={1} ></Image>
                </Box>  
                </VStack>       
            </HStack>
        </>
    )
}