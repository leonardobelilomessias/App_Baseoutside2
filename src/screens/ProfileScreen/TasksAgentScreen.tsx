import { VStack, Box, HStack, Text, Pressable } from "@gluestack-ui/themed"
import React from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from "react-native"
import { extendedConfig } from "@/theme/config";




export function TaskAgentScreen(){
    const numbers = [1,2,5,4,8,9,6,10]
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={numbers}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.toString()
            }
            renderItem={({item})=>(
                <TaskCardSearch name=""/>
            )}
            />
            </VStack>

    )
}

function TaskCardSearch({name}:{name:string}){
    return(
        <>
        <Pressable  flexWrap="wrap" paddingVertical={12} borderBottomWidth={1} borderBottomColor="$gray200" >
            <HStack alignItems="center"
            flexWrap="wrap"
            space="lg" 
            >
                    <VStack space="1">
                        <Text  fontWeight="$bold">
                           Nova Atividade
                        </Text>
                        <Text   lineHeight={16} flex={0}  fontWeight="$medium"  fontSize={'$sm'} color="$gray300">
                            @Baseoutside
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                            Habilidades:Escrita,Portugues
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                            Departamento:Midias Sociais
                        </Text>

                        <FooterTaskCard/>
                    </VStack>
            </HStack>
        </Pressable>
        </>
    )
}

function FooterTaskCard(){
    return(
        <HStack alignContent="center"  flexWrap="wrap">
            <HStack alignContent="center" alignItems="center" justifyContent="center" mr={12}>
                
            <MaterialCommunityIcons name="lightning-bolt" size={14} color={extendedConfig.tokens.colors.gray500} />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                Criando em 27/08/23 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} flexWrap="wrap" >
            <FontAwesome name="group" size={12} color={extendedConfig.tokens.colors.gray500} />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                 6 pessoas 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" flexWrap="wrap">
            <FontAwesome5  name="tasks" size={12} color={extendedConfig.tokens.colors.gray500} />
            <Text   lineHeight={16}    fontSize={'$xs'} color="$gray400">
                 Prazo 3 dias
            </Text>
            </HStack>

        </HStack>
    )

}