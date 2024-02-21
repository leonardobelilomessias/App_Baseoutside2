import { useDataAgent } from "@/context/UserContext";
import { ProfileAgentScreen } from "@/screens/AgentScreens/ProfileAgentScreen";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";

export default function agentProfile(){
    const navigation = useNavigation();
    const {dataAgent} = useDataAgent()
    const params = useLocalSearchParams();

    React.useLayoutEffect(() => {
        navigation.setOptions({title:params.name });
        console.log(params)
      }, [navigation]);
    return( <ProfileAgentScreen/> )
}