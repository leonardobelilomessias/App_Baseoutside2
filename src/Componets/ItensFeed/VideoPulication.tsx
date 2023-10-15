import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { Badge, BadgeIcon, BadgeText, Box, Button, ButtonText, GlobeIcon, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Dimensions, FlatList, ImageBackground, useWindowDimensions } from "react-native";
import ImageVideo from '@/assets/develop.jpg'
import { FontAwesome5 } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useEffect, useRef, useState } from "react";
export function VideoPublication(){

    return(
        <VStack space="md" p={8}>
        <ImageBackground source={ImageVideo}
        
        width={300}
        height={600}
        borderRadius={8}
        >
            <Box height={400} alignContent="center" justifyContent="center" alignItems="center">
            <FontAwesome5 name="play-circle" size={94} color={extendedConfig.tokens.colors.green400} />
            </Box>
        </ImageBackground>
        <Text size="xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora ratione unde ... <Text fontWeight="$bold" size="xs"> ver mais</Text></Text>
        <BottonItemFeed/>
        </VStack>
    )
}