import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

export function DailyPostScreen(){
    const {idPublication} = useLocalSearchParams();
    console.log(idPublication)
    return(
        <VStack bg="$white" p={12}>
        <Heading textAlign="center">
            Title Daily publication
        </Heading>
        <Text>
            Texto criado para Daily publication
        </Text>
        </VStack>
    )
}