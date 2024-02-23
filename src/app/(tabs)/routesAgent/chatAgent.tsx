import { ChatAgentScreen } from "@/screens/AgentScreens/ChatAgentScreen";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";

export default function chatAgent(){
    const navigation = useNavigation();
    const {name }= useLocalSearchParams()
  useLayoutEffect(() => {
    navigation.setOptions({title:name});
  }, [navigation]);
    return(
       <ChatAgentScreen/>
    )
}
