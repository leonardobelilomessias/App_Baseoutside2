import { Center, Heading, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
export function ErrorToLoadScreen(){
    return(
        <>
                <Center flex={1}  bg="white">
            <VStack width={"90%"} bgColor="white" space="xl" alignItems="center">
                    <MaterialIcons name="error-outline" size={80} color={extendedConfig.tokens.colors.danger400} />
                    <Heading textAlign="center">
                        Houve algo errrado
                    </Heading>
                <Text textAlign="center" color="$gray500">Ops .. parece que algo deu errado! {'\n'}Não foi possível exibir o conteúdo.
                    Tente novamaente mais tarde.
                </Text>
                <Pressable  borderWidth={1} onPress={()=> router.push('/(tabs)')} borderRadius={"$md"} borderColor="$green300" padding={8}>
                    <Text color="$green300" bold>Voltar Para o inicio</Text>
                </Pressable>
            </VStack>
                </Center>
        </>
    )
}