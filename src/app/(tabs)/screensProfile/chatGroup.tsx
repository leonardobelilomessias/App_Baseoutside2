import { Text, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

export default function ChatGroup(){
    const {name} =useLocalSearchParams()
    return(
        <VStack>
            <Text size="lg" bold>   {name}</Text>
        </VStack>
    )
}