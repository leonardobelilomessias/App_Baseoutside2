import { Image } from "react-native";
import { Button, ButtonText, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import {Logo} from '@/assets/logoSingin.png';
import { Link, router } from "expo-router";
export function Singin(){
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
                <Text size="2xl" textAlign="center" fontWeight="$bold">
                    Login</Text>
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
                <Link href={'/home'} asChild>
                
                    <Button 
                    bg="$green500" 
                    rounded={'$full'}
                    size="lg" 
                    width={"100%"} 
                    >
                            <ButtonText >
                                Entrar
                            </ButtonText>
                </Button>
                </Link>
                <Text fontWeight="$bold" color="$green400" textAlign="center">Esqueceu sua senha? clique aqui.</Text>
            </VStack>
            <Button width={"80%"} 
            borderColor="$green400" 
            bg="$white" 
            borderWidth={1} 
            rounded={'$full'} 
            size="lg" 
            onPress={()=> router.push("singup")} >
                        <ButtonText 
                        color="$green400">
                            Criar conta
                        </ButtonText>
            </Button>

            </VStack>
        </>
    )
}