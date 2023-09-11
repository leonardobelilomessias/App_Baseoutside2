import { DailyPostScreen } from "@/theme/screens/DailyPostScreen";
import { Heading, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export default function DailyPublication(){
    return(
        <ScrollView>
            <VStack p={8}>

            <DailyPostScreen/>
            </VStack>
        </ScrollView>
    )
}