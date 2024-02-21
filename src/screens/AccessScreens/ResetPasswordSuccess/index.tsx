import { Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import ImageSuccess from '@/assets/success.png'
import { router } from "expo-router";
export function ResetPasswordSuccess(){
    return(
        <>
        <VStack p={20} bg='$white' flex={1} justifyContent="space-around">
            <Image source={ImageSuccess} width={300} height={300}/>

            <Text fontWeight="$bold" color="$green400" fontSize={24}textAlign="center" lineHeight={32}>
                Senha redefinida com sucesso.
                </Text>
            <Pressable bgColor="$white" borderColor="$green300" borderWidth={1}  p={16} borderRadius={8}  onPress={()=>{router.push('/')}}>
                <Text color="$green300" textAlign="center" fontWeight="$medium">
                        Ir para login
                </Text>
            </Pressable>
        </VStack>
        </>
    )
}