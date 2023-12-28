import { Image, KeyboardAvoidingView,  } from "react-native";
import { Box, Button, ButtonText, HStack, Input, InputField, Pressable, Text, Toast, ToastDescription, ToastTitle, VStack, useToast } from "@gluestack-ui/themed";
import {Logo} from '@/assets/logoSingin.png';
import { Link, router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios, { AxiosError } from "axios";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import ImageLogo from '@/assets/baselogo.png'
import { AppError } from "@/utils/AppError";

const schema = yup.object({
    email: yup.string().required("Digite um email valido").email("Digite um email valido"),
    password: yup.string().required("Digite uma senha"),
  }).required();


export function Singin(){

    return(
        <VStack flex={1} alignItems="center" bg="$white" justifyContent="space-between">

            <KeyboardAvoidingView behavior="position" contentContainerStyle={{ alignItems:'center',width:"100%"}}>
                <Text bold size="2xl" marginVertical={20}>Login</Text>
                <Image source={ImageLogo} style={{width:200,height:36}} />
                <VStack width={"90%"} alignItems="center">
                    <Image 
                            style={{width:230,height:200}}
                            source={require('@/assets/LoginImage.png')}
                    />

               <FieldsSingIn/>
             <Pressable onPress={()=>{router.push('/recouvery')}} marginTop={10} >
                    <Text fontWeight="$bold" color="$green400" height={16} lineHeight={16} fontSize={'$sm'} textAlign="center">Esqueceu sua senha? clique aqui.</Text>
             </Pressable>
            </VStack>
            </KeyboardAvoidingView>

            <Button 
            width={"90%"} 
            borderColor="$green400" 
            bg="$white" 
            borderWidth={1} 
            rounded={12} 
            size="lg" 
            marginBottom={12}
            onPress={()=> {router.push('/singup')}} >
                        <ButtonText 
                        color="$green400">
                            Criar conta
                        </ButtonText>
            </Button>

            </VStack>
       
    )
}

function FieldsSingIn(){
    const toast = useToast()
    const {dataAgent,loading,handleSign}= useDataAgent()
    const { control, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(schema),
    defaultValues: {
      email: 'leo@email',
      password: '123'
    }
  });
  async function  onSubmit ({email, password}:{email:string,password:string}){
    try{

        await handleSign({email,password})
        
    }catch(e){
        if(e instanceof AppError){
            const id = "test-toast"
            const myerror = e.message ==='Error de Conexão'?{title:"Error de Conexão",message:"Houve um erro no servidor, tente novamente mais tarde!"}:{title:"Houve um erro",message:e.message}
            if (!toast.isActive(id)){
                console.log(id)
                toast.show({
                placement: "top",
                id:id,
                render: ({ id ,myerror:e}) => {
                  return (
                    <Toast nativeID={'toast'+id} variant="solid" action="success">
                      <VStack space="xs">
                        <ToastTitle>{myerror.title}</ToastTitle>
                        <ToastDescription>
                        {myerror.message}
                        
                        </ToastDescription>
                      </VStack>
                    </Toast>
                  )
                },
              })
            }
            
            console.log(e.message)
        }

    }
  }
    return(
    <VStack>
     <Controller
                control={control}
                rules={{required:true}}
                render={({ field: { onChange, onBlur, value } })=>(
                    <Input
                    borderColor="$white"
                    bg="$gray100"
                    variant="outline"
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    borderRadius={12}        
                    >
                    <InputField placeholder="Email"  onChangeText={onChange} fontSize={16} value={value} />
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
                    size="xl"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    borderRadius={12} 
                    >
                    <InputField placeholder="Senha" fontSize={'$md'} onChangeText={onChange} value={value} />

                </Input>
                    
                )}
                name="password"
                />
                {errors.password ? <Text   alignSelf="flex-start"mb={8} fontSize={'$xs'} >Password is required.</Text>:<Text></Text>}
                    <Button 
                    bg="$green400" 
                    rounded={12}
                    size="xl"
                    width={'$full'}
                    onPress={handleSubmit(onSubmit)}
                    mb={8}
                    >
                            <Text width={'$full'} textAlign="center" color="$white" bold>
                                Entrar
                            </Text>
                </Button>
    </VStack>
    
    )
        
    
}