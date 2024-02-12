import { WrapperScreens } from "@/Componets/WrapperScreens";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { extendedConfig } from "@/theme/config";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function profile(){
    
    return(
            
 
                <VStack p={8} bgColor="$white" flex={1}>
                <ScrollView>
                    <ProfileScreen/>
                </ScrollView>
                </VStack>
              

      
    )
}