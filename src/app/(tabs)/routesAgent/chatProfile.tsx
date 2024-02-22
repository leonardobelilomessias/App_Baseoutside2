import { ChatAgentScreen } from "@/screens/AgentScreens/ChatAgentScreen";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";

export default function ChatProfile(){
    const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({title:'Léo' });
  }, [navigation]);
    return(
       <ChatAgentScreen/>
    )
}
