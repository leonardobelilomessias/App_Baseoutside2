import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks";
import { extendedConfig } from "@/theme/config";
import { VStack, Box } from "@gluestack-ui/themed";
import React from "react";
import { ImageBackground } from "react-native";
import { BottonItemFeed } from "../BottonItemFeed";
import ImageVideo from '@/assets/develop.jpg'
import { FontAwesome5 } from '@expo/vector-icons';



export    function VidePublicationCard(){
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