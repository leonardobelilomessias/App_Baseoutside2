import { extendedConfig } from "@/theme/config";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { Children, ReactElement } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function WrapperScreens({children}:{children:ReactElement}){
    return(
<GluestackUIProvider config={extendedConfig}>
<SafeAreaView style={styles.container}>
  <VStack  flex={1} space='md'>
  <StatusBar   backgroundColor="white" style="dark"  />
    {children}
  </VStack>
</SafeAreaView>
</GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: extendedConfig.tokens.colors.white,
      
    },
  });
  
  