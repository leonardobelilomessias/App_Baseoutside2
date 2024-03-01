import { WrapperScreens } from "@/Componets/WrapperScreens";
import { AgentDataProvider, useDataAgent } from "@/context/UserContext";
import { extendedConfig } from "@/theme/config";
import { SingUp } from "@/screens/AccessScreens/SingUp";
import { Singin } from "@/screens/AccessScreens/Singin";
import { Button, ButtonText, GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView,  StyleSheet} from "react-native";
import Home from "../(tabs)";
import { useEffect, useState } from "react";

import { Redirect } from "expo-router";

export default function Page() {
  const {dataAgent,loading,test,setTest}= useDataAgent()


  return (  
      <Singin/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: extendedConfig.tokens.colors.gray100,
    padding:8
  },
});

