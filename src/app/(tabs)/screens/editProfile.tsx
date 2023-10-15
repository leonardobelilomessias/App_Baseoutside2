import { Avatar, AvatarImage, Input, InputField, Pressable, Text, Textarea, TextareaInput, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";


export default function editProfile(){
    return(
        <ScrollView>

        <VStack alignItems="center" padding={12} space="md">
        <Avatar size="2xl">
            <AvatarImage 
                        source={{
                            uri: "https://images.unsplash.com/profile-fb-1597267794-eb023d64bf1d.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
                          }}
                          
                          ></AvatarImage>
        </Avatar>
        <Text color="$green400" bold>Trocar Foto</Text>
        <VStack width={'$full'}>

        <Text size="xs" width={'$full'}>Nome</Text>
        <Input>

                          <InputField placeholder="Digite seu nome"/>
        </Input>
        </VStack>
    <VStack width={'$full'}>

        <Text size="xs" width={'$full'}>Vocação</Text>
        <Input>

                          <InputField placeholder="Digite sua vocação"/>
        </Input>
        </VStack>
    
    <VStack width={"$full"}>
        
    <Text size="xs" width={'$full'}>Sobre</Text>
        <Textarea
            size="md"
            isReadOnly={false}
            isInvalid={false}
            isDisabled={false}
            
            >
            <TextareaInput placeholder="Digite algo sobre você..." />
        </Textarea>
        </VStack>
        <Pressable bg={'$green400'} borderRadius={8} width={'$full'} padding={12}>
            <Text color="$white" textAlign="center"> Salvar</Text>
        </Pressable>
        <Pressable onPress={()=> router.push('/')} borderWidth={1} borderRadius={8} padding={12} borderColor="$green400" width={'$full'}>
            <Text color="$green400" textAlign="center"> Cancelar</Text>
        </Pressable>
        </VStack>
    </ScrollView>
    )
}