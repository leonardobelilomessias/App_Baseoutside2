import { ChatScreenProfile } from "@/screens/ChatScreenProfile";
import { Avatar, AvatarFallbackText, Box, HStack, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { FlatList } from "react-native";

export default function ChatProfile(){
    const navigation = useNavigation();
    const params = useLocalSearchParams();
  React.useEffect(() => {
    navigation.setOptions({title:'Léo' });
  }, [navigation]);
    return(
       <ChatScreenProfile/>
    )
}
