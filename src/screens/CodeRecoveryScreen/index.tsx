import { Image, Input, InputField, Pressable, Text, VStack } from "@gluestack-ui/themed";
import ImageCodeRecouvery from '@/assets/coderecoveryImage.png'
import { router } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export function CodeRecouveryScreen(){
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <VStack flex={1} bg="white" padding={20} alignItems="center">
            <KeyboardAvoidingView behavior="position" contentContainerStyle={{  alignItems:'center', }} >
            <Text fontSize={30} alignSelf="center" fontWeight="$bold" lineHeight={30} textAlign="center" marginVertical={20}> Codigo de recuperação </Text>
            <Image source={ImageCodeRecouvery}
            width={250}
            height={250}
            />
            <VStack width={'100%'} >
            <Text color="$green300" fontSize={14} textAlign='center' fontWeight="$medium">
            Digite o codigo recebido no seu email, para resrauração da sua conta.
            </Text>

            <Input paddingLeft={30} bgColor="$gray100" borderColor="$gray100" size="xl" marginVertical={30}>
            <InputField placeholder="codigo" fontSize={14} />
            </Input>
            <Pressable bgColor="$green400"  p={16} borderRadius={8}  onPress={()=>{router.push('/coderecouvery')}}>
                    <Text color="white" textAlign="center" fontWeight="$medium">
                        Enviar
                    </Text>
                </Pressable>
            </VStack>
            </KeyboardAvoidingView>
        </VStack>
        </ScrollView>
    )
}