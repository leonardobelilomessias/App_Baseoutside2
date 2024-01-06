import { ControlScreen } from "@/screens/ControlScreen"
import { Box, Text, VStack } from "@gluestack-ui/themed"
import { ScrollView } from "react-native"
import { FlatList } from "react-native-gesture-handler"

export default function Control(){
    const numbers = [1,2,5,4,8,9,6,6,6,6,8,7,7,8,9,]
    return(
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
            
            <ControlScreen/>
 
        </ScrollView>
    )
}