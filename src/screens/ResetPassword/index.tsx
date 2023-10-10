import { Box, Image, Input, InputField, Pressable, Text, VStack } from "@gluestack-ui/themed";
import ImageRedefinePassword from '@/assets/ps.png'
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
export function ResetPassword(){
    return(
        <ScrollView style={{backgroundColor:'white', padding:20}} >
                <KeyboardAvoidingView behavior="position"  keyboardVerticalOffset={50}>
            <VStack bgColor="white" flex={1} alignItems="center">
                <Text fontSize={30} textAlign="center" lineHeight={30} fontWeight="$bold" marginVertical={20}>
                    Redefinir senha
                </Text>
                <Image source={ImageRedefinePassword}
                width={250}
                height={250}
                />
                    <Box flex={1} width={'100%'} >


                <Input paddingLeft={20} bg="$gray100" size="xl"  borderColor="$gray100" marginVertical={20}>
                    <InputField placeholder="Nova Senha" fontSize={16}/>
                </Input>
                <Input paddingLeft={20} size="xl" bg="$gray100" borderColor="$gray100">
                    <InputField fontSize={16} placeholder="Repita nova senha"/>
                </Input>
                <Pressable  bgColor="$green400" width={'$full'} p={16} borderRadius={8} marginVertical={20} onPress={()=>{router.push('/resetpasswordsuccess')}}>
                    <Text color="white" textAlign="center" fontWeight="$medium">
                        Enviar
                    </Text>
                 </Pressable>
                    </Box>
            </VStack>
            </KeyboardAvoidingView>
        </ ScrollView>
    )
}