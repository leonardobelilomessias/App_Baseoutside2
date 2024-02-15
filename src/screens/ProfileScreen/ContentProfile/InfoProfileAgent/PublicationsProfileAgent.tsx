import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { extendedConfig } from "@/theme/config";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import ImageVideo from '@/assets/develop.jpg'
import { router } from "expo-router";
import { DailyPostCard } from "@/Componets/Cards/DailyPostCard";
import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks";



export function PublicationsProfileAgent(){
    
    return(
        <VStack space="md">
            <Text bold marginBottom={24}>Timeline</Text>
                <Quote/>
                <DailyPostCard  amountComents={dailyPublicationMocks.amountComents} date={dailyPublicationMocks.date} 
                id={dailyPublicationMocks.id} isLike={dailyPublicationMocks.isLike} isSaved={dailyPublicationMocks.isSaved} userAvatar={dailyPublicationMocks.userAvatar}
                text={dailyPublicationMocks.text} title={dailyPublicationMocks.title} userName={dailyPublicationMocks.userName}
                />
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
           <BottonItemFeed amountComments={dailyPublicationMocks.amountComents}/>
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
        <BottonItemFeed amountComments={dailyPublicationMocks.amountComents}/>
        </VStack>
    )
}

