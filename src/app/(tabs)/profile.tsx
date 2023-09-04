import { WrapperScreens } from "@/Componets/WrapperScreens";
import { extendedConfig } from "@/theme/config";
import { Profile } from "@/theme/screens/Profile";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";

export default function profile(){
    return(
            
            <WrapperScreens>
                <ScrollView>

                <VStack p={8}>

                    <Profile/>
                </VStack>
                </ScrollView>
              
            </WrapperScreens>
      
    )
}