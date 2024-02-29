import { ProfileAgentScreen } from "@/screens/AgentScreens/ProfileAgentScreen";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";

export default function agentProfile(){
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    console.log("nome", params.name)
    React.useLayoutEffect(() => {
        navigation.setOptions({title:params.name });
        console.log(params)
      }, [navigation, params]);
    return( <ProfileAgentScreen/> )
}