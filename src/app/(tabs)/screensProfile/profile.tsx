
import { ProfileScreen } from "@/screens/ProfileScreen";


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