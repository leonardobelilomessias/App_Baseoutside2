import { Center, Spinner, Text } from "@gluestack-ui/themed";

export function LoadingAuthRoutes(){
    return(
        <Center flex={1}>
            <Spinner size={"large"} color={"$green400"}/>
            <Text fontWeight="$medium" color="$green400">Carregando...</Text>
        </Center>
    )
}