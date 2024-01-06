import { Avatar, AvatarFallbackText, HStack, Text, VStack } from "@gluestack-ui/themed";

export function InitialSearch(){
    return(

            <VStack>
                <TopAgents/>
            </VStack>        

    )
}

function TopAgents(){
    return(
        <VStack>
            <Text bold>Top Agentes</Text>
            <HStack>
                <Avatar>
                    <AvatarFallbackText>Agent Top</AvatarFallbackText>
                </Avatar>
                <Text> Agent loren</Text>
            </HStack>
        </VStack>
    )
}
