import { extendedConfig } from "@/theme/config"
import { HStack, VStack, Box, Text, Pressable } from "@gluestack-ui/themed"
import { useNavigation, router } from "expo-router"
import React from "react"
import { FontAwesome, Octicons } from '@expo/vector-icons';


export function PrivateGroups(){
    const navigation = useNavigation
    const chatGroups = [{name:'Entendendo o chat', users:12},{name:'Mais sorbre a missão', users:26},{name:'Rezenha de leve', users:39}]
    return(
        <>
        <HStack justifyContent="space-between" padding={10}borderBottomWidth={1} borderBottomColor="$gray200" paddingBottom={10}>
            <Text bold color="$gray600">Grupos de conversa</Text>
            <Octicons name="diff-added" size={20} color={extendedConfig.tokens.colors.green500} />
        </HStack>
        <VStack space="xs">
            {
                chatGroups.map((element)=>(
                    <Pressable key={element.name} onPress={()=>{ router.push({pathname:'/(tabs)/screensProfile/chatGroup',params:{name:element.name}})}}>
                    <HStack borderRadius={'$md'} bgColor="$green400" padding={20}  alignItems="center"   justifyContent="space-between">
                          <Text color="$white" bold>{element.name}</Text>
                            <HStack alignItems="center" space="xs">
                             <FontAwesome name="group" color='white' size={12}/>
                            <Text color="white" bold>{element.users}</Text>    
                            </HStack>
                    </HStack>
                    </Pressable>
                ))
            }
    
            <Box borderRadius={'$md'} bgColor="$white" borderWidth={1} borderColor="$green400" padding={10}>
            <Text textAlign="center" color="$green400" bold>Ver todas conversar</Text>
            </Box>
        </VStack>
        </>
    )
}
