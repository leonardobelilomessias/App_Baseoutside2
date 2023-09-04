import { Image, KeyboardAvoidingView, Pressable } from "react-native";
import { Box, Button, ButtonText, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import {Logo} from '@/assets/logoSingin.png';
import { Link, router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Digite um email valido").email("Digite um email valido"),
    password: yup.string().required("Digite uma senha"),
  }).required();
export function Singin(){
    const { control, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data) => console.log(data)
    return(
                <KeyboardAvoidingView style={{flex:1}}>
        <VStack flex={1} alignItems="center" bg="$white" justifyContent="space-around">
                <VStack width={"80%"}  alignItems="center">
                            <Image 
                            style={{backgroundColor:'blue',width:200,height:200}}
                            width={50}
                            height={50}
                                
                                source={require('@/assets/logoSingin.png')}
                                
                />
                <Text size="2xl" textAlign="center" fontWeight="$bold">
                    Login</Text>
                <Controller
                control={control}
                rules={{required:true}}
                render={({ field: { onChange, onBlur, value } })=>(
                    <Input
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    
                    
                    >
                    <InputField placeholder="Email" onChangeText={onChange} value={value} />
                </Input>
                    
                )}
                name="email"
                />


                {errors.email ? <Text mb={4} fontSize={'$xs'} h={24} alignSelf="flex-start">Email required.</Text>:<Text h={24} fontSize={'$xs'} mb={4}></Text>}


            <Controller
                control={control}
                rules={{required:true}}
                render={({ field: { onChange, onBlur, value } })=>(
                <Input 
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    >
                    <InputField placeholder="Senha" onChangeText={onChange} value={value} />

                </Input>
                    
                )}
                name="password"
                />
 

                {errors.password ? <Text   alignSelf="flex-start"mb={8} fontSize={'$xs'} >Password is required.</Text>:<Text></Text>}


                
               
                
                    <Button 
                    bg="$green500" 
                    rounded={'$full'}
                    size="lg" 
                    width={"100%"} 
                    onPress={handleSubmit(onSubmit)}
                    mb={8}
                    >
                            <ButtonText >
                                Entrar
                            </ButtonText>
                </Button>
             <Pressable>

            <Text fontWeight="$bold" color="$green400" height={16} lineHeight={16} textAlign="center">Esqueceu sua senha? clique aqui.</Text>
             </Pressable>
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
        </KeyboardAvoidingView>
    )
}