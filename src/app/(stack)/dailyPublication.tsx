import { DailyPostScreen } from "@/screens/DailyPostScreen";
import { Heading, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export default function DailyPublication(){
    return(
        <ScrollView>
            <VStack p={28}>
                <DailyPostScreen/>
            </VStack>
        </ScrollView>
    )
}