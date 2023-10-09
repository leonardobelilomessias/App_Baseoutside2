import { Button, ButtonText, Image, Input, InputField, Pressable, Text, VStack } from "@gluestack-ui/themed";
import RecouveryImage from "@/assets/recouveryImage.png"
import { KeyboardAvoidingView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
export function RecouveryScreen(){
    return(
        
        <VStack bg="$white" p={20}  alignItems="center" height={'$full'} >
            <KeyboardAvoidingView behavior="position" contentContainerStyle={{ paddingBottom:20}} >
            <Text fontSize={26} fontWeight="$bold" lineHeight={26} textAlign="center" marginVertical={20}>
                Recuperar conta
            </Text>
            
            <Image source={RecouveryImage}
            style={{width:250,height:220}}
              />
              <Text color="$green400" textAlign="center" fontWeight="$medium" marginVertical={10}>
              Digite o email para enviar o codigo para recuperação de conta.
              </Text>

     
            <VStack  width={'100%'} >

              <Input size="xl" bgColor="$gray100" borderColor="$gray100" marginVertical={20}>
              <InputField paddingLeft={30} placeholder="Email" fontSize={16} borderRadius={8}/>
              </Input>
                <Pressable bgColor="$green400"  p={16} borderRadius={8} marginVertical={20} onPress={()=>{router.push('/coderecouvery')}}>
                    <Text color="white" textAlign="center" fontWeight="$medium">
                        Enviar
                    </Text>
                </Pressable>

            </VStack>
           </KeyboardAvoidingView>
         
        </VStack>
    
    )
}