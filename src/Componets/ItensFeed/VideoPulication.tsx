import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { Avatar, AvatarFallbackText, Badge, BadgeIcon, BadgeText, Box, Button, ButtonText, GlobeIcon, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Dimensions, FlatList, ImageBackground, useWindowDimensions } from "react-native";
import ImageVideo from '@/assets/develop.jpg'
import { FontAwesome5 } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useEffect, useRef, useState } from "react";
export function VideoPublication(){

    return(
        <VStack space="md" p={8} softShadow="1" bg="white">
            <HStack 
                p={8}
               
                zIndex={1}
                alignItems="center"
                justifyContent="space-between"
                space={'md'}>
                    <HStack alignItems="center" space="md">

                    <Avatar 
                    bgColor="$green400"
                    size="sm"
                    borderRadius="$full">
                        <AvatarFallbackText>
                            Sandeep Srivastava
                        </AvatarFallbackText>
                    </Avatar>
                    <Text>
                        Mike Jery
                    </Text>
                </HStack>
                    <Badge
                    size="sm" 
                    variant="solid" 
                    borderRadius="$none" 
                    action="success">
                        <BadgeText>Daily Post</BadgeText>
                    </Badge>
                </HStack>
            
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