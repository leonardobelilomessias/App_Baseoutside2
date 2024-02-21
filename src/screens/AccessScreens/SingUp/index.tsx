import { Image, KeyboardAvoidingView } from "react-native";
import { Button, ButtonText, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import {Logo} from '@/assets/logoSingin.png'
import { router } from "expo-router";
import { ScrollView } from "react-native";
export function SingUp(){
    return(
        <ScrollView>

        <KeyboardAvoidingView style={{flex:1}}>
            <VStack flex={1} alignItems="center" bg="$white" >
            <Text size="2xl" textAlign="center" fontWeight="$bold">
                    Criar nova conta
                </Text>
                <VStack width={"80%"} space={'lg'} alignItems="center">
                            <Image 
                            style={{width:200,height:250}}
                            
                            
                            source={require('@/assets/createcountImage.png')}
                                
                />

                <Input
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Email" fontSize={'$sm'}/>
                </Input>
                <Input 
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Nick" fontSize={'$sm'} />

                </Input>
                <Input 
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Senha"  fontSize={'$sm'}/>

                </Input>
                <Input 
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Confirmar Senha" fontSize={'$sm'} />

                </Input>
                <Button bg="$green500" rounded={'$md'} size="lg" width={"100%"}>
                        <ButtonText>
                            Criar Conta
                        </ButtonText>
                </Button>
            </VStack>
            <Button 
            marginVertical={40}
            width={"80%"} 
            borderColor="$green400" 
            bg="$white" 
            borderWidth={1} 
            rounded={'$md'} 
            size="lg"
            onPress={()=>{router.back()}}>
                       
                     <ButtonText 
                     color="$green400">
                            Voltar
                        </ButtonText>
            </Button>

            </VStack>
        </KeyboardAvoidingView>
</ScrollView>
    )
}