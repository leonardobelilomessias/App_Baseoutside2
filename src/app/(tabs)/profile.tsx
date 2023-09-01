import { WrapperScreens } from "@/Componets/WrapperScreens";
import { extendedConfig } from "@/theme/config";
import { Profile } from "@/theme/screens/Profile";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function profile(){
    return(
            
            <WrapperScreens>
                
                <VStack p={8}>

                    <Profile/>
                </VStack>
              
            </WrapperScreens>
      
    )
}