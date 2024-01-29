import { Avatar, AvatarFallbackText, Box, HStack, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { FlatList } from "react-native";

export default function ChatProfile(){
    const navigation = useNavigation();
    const params = useLocalSearchParams();
  React.useEffect(() => {
    navigation.setOptions({title:'Léo' });
  }, [navigation]);
    return(
        <VStack flex={1} bg="white">
            <FlatList 
            contentContainerStyle={{paddingVertical:8}}
            data={messages}
            renderItem={({item})=>(
                <HStack   alignSelf={item.user==='eu'?"flex-end":"flex-start" } flexDirection={item.user!=='eu'?"row-reverse":"row" } margin={4} space="xs">
                <Text p={8} borderRadius={'$lg'} alignSelf={item.user==='eu'?"flex-end":"flex-start" }bg="$green400"  maxWidth={'85%'} >
                    
                    <Text color="$white" >{item.message}</Text>
                    {"\n"}
                    <Text  flex={1} size="2xs" color="white" alignSelf="flex-start" justifyContent="flex-start" textAlign="center">20:21</Text>
                   
                </Text>
                <Avatar bg='$green600' size="xs" alignSelf="flex-end">
                    <AvatarFallbackText>Meu nome</AvatarFallbackText>
                </Avatar>
                </HStack>
            )}
            />
        <Box  bg="white" bottom={0} width={'$full'}  >
            <Input    marginHorizontal={4} marginVertical={4}>
                <InputField placeholder="enviar mensagem"  fontSize={'$sm'}/>
            </Input>
        </Box>
        </VStack>
    )
}

const messages = [
    {user:'eu',message:"oi tudo bem?", time:1},
    {user:'ele',message:"Bem sim e vc??", time:2},
    {user:'eu',message:"Tudo bem tambem,Graças a Deus", time:3},
    {user:'ele',message:"Que bom!", time:4},
    {user:'eu',message:"Aqui... não sei se você esta sabendo. amanha é uma data especial para a nossa missão. Então gostaria de te convidar para participar da nossa reunião especial de comemoração", time:5},
    {user:'eu',message:"oi tudo bem?", time:6},
    {user:'ele',message:"oi tudo bem?", time:7},
    {user:'ele',message:"oi tudo bem?", time:8},
    {user:'ele',message:"oi tudo bem?", time:7}

]