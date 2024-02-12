import { WrapperScreens } from "@/Componets/WrapperScreens";
import { extendedConfig } from "@/theme/config";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function profile(){
    
    return(
            
 
                <ScrollView>
                <VStack p={8} bgColor="$white">
                    <Profile/>
                </VStack>
                </ScrollView>
              

      
    )
}