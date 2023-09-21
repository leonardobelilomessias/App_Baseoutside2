import { Image } from "react-native";
import { Button, ButtonText, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import {Logo} from '@/assets/logoSingin.png'
import { router } from "expo-router";
export function SingUp(){
    return(
        <>
            <VStack flex={1} alignItems="center" bg="$white" justifyContent="space-around">
                <VStack width={"80%"} space={'lg'} alignItems="center">
                            <Image 
                            style={{backgroundColor:'blue',width:200,height:200}}
                            width={50}
                            height={50}
                                
                                source={require('@/assets/logoSingin.png')}
                                
                />
                <Text size="4xl" textAlign="center" fontWeight="$bold">
                    Criar nova conta
                </Text>
                <Input
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Email" />
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
                    <InputField placeholder="Senha" />

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
                    <InputField placeholder="Senha" />

                </Input>
                <Button bg="$green500" rounded={'$full'} size="lg" width={"100%"}>
                        <ButtonText>
                            Criar Conta
                        </ButtonText>
                </Button>
            </VStack>
            <Button 
            width={"80%"} 
            borderColor="$green400" 
            bg="$white" 
            borderWidth={1} 
            rounded={'$full'} 
            size="lg"
            onPress={()=>{router.back()}}>
                       
                     <ButtonText 
                     color="$green400">
                            Voltar
                        </ButtonText>
            </Button>

            </VStack>
        </>
    )
}