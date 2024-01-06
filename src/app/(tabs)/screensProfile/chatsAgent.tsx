import { Avatar, AvatarFallbackText, HStack, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Pressable } from "react-native";

export default function ChatsAgent(){
    return(
        <>
        <VStack bg="white" flex={1} padding={8}>
            <CardChat/>
            <CardChat/>
            <CardChat/>
            <CardChat/>
            <CardChat/>
            <CardChat/>
            <CardChat/>

        </VStack>

        </>
    )
}

function CardChat(){
    return(
        <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/chatProfile')}}>

        <HStack space="lg"  paddingVertical={16} borderBottomWidth={1} borderColor="$gray200">
            <Avatar>
                <AvatarFallbackText>Leo Belilo</AvatarFallbackText>
            </Avatar>
            <VStack space="2xs">
                <Text bold>Nome usuario</Text>
                <Text size="sm" color="$gray500">mensagem escrita</Text>
            </VStack>
        </HStack>
        </Pressable>
    )
}