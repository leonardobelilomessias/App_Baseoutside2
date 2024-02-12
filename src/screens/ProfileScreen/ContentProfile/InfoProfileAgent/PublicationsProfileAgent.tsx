import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { extendedConfig } from "@/theme/config";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import ImageVideo from '@/assets/develop.jpg'
import { router } from "expo-router";



export function PublicationsProfileAgent(){
    return(
        <VStack space="md">
            <Text bold marginBottom={24}>Timeline</Text>
                <Quote/>
                <DailyPost/>
                <VidePublication/>
        </VStack>
    )
}

function Quote(){
    return(
       <>
       <VStack space="xl" borderBottomColor={extendedConfig.tokens.colors.gray100} borderBottomWidth={1} paddingBottom={'$10'}>
       <HStack alignItems="center">
               <Box width={'$8'} borderRadius={'$full'} height={'$8'} bg="$green300" marginRight={8}></Box>
               <Text fontWeight="$medium">Mike JHerry</Text>
           </HStack>
           <Text textAlign="center" fontSize={'$xl'} fontWeight="$normal">
           Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!
           </Text>
           <BottonItemFeed/>
       </VStack>
   </>
    )
   }

   function VidePublication(){
    return(
        <VStack space="md">
        <ImageBackground source={ImageVideo}
        width={300}
        height={600}
        borderRadius={8}
        >
            <Box height={400} alignContent="center" justifyContent="center" alignItems="center">
            <FontAwesome5 name="play-circle" size={94} color={extendedConfig.tokens.colors.green400} />
            </Box>
        </ImageBackground>
        <BottonItemFeed/>
        </VStack>
    )
}

function DailyPost(){
    return(
        <VStack space="xl" paddingBottom={32}  borderBottomColor="$gray200" borderBottomWidth={1} >
            <HStack  space="xl" p={8} alignContent="center" alignItems="center">
                <VStack >
                    <Text color="$gray400" fontWeight="$bold" fontSize={'$lg'} >
                        25
                    </Text>
                    <Text color="$gray400" fontWeight="$bold" size="xs" lineHeight={12} >out</Text>
                </VStack>
            <Text  fontWeight="$bold" color="$green400" textAlign="center" size="xl" >Dias de lutas dias de gloria</Text>
            </HStack>
            <Text>
            Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens...
            </Text>
            <BottonItemFeed/>
            <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/dailyPublication')}}>
                <Text textAlign="center" fontWeight="bold" color="$green400" borderWidth={1} borderColor="$green400" padding={4} borderRadius={'$md'}>Ver Completo</Text>
            </Pressable>
        </VStack>
    )
}