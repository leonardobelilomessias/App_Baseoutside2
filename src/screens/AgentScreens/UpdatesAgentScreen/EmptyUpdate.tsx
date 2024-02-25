import { Text, VStack } from "@gluestack-ui/themed";

export function EmptyUpdate(){
    return(
        <VStack alignItems="center">
            <Text color="$green500">Voce ainda não tem atualizações.</Text>
        </VStack>
    )
}