import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type TypeSelectCardRender = {
    selecCardRender:string
    content:FullAgentDTO[]
}

export function TaksContentSearch({selecCardRender,content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={content}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id
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
        <Box marginBottom={16} flexWrap="wrap">
            <HStack alignItems="center"
            flexWrap="wrap"
            space="lg" 
            >
                    <VStack >
                        <Text  fontWeight="$bold">
                           Nova Atividade
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            @Baseoutside
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            Habilidades:Escrita,Portugues
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            Departamento:Midias Sociais
                        </Text>

                        <FooterTaskCard/>
                    </VStack>
            </HStack>
        </Box>
        </>
    )
}

function FooterTaskCard(){
    return(
        <HStack alignContent="center"  flexWrap="wrap">
            <HStack alignContent="center" alignItems="center" justifyContent="center" mr={12}>
                
            <MaterialCommunityIcons name="lightning-bolt" size={14} color="black" />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray500">
                Criando em 27/08/23 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} flexWrap="wrap" >
            <FontAwesome name="group" size={12} color="black" />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray500">
                 6 pessoas 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" flexWrap="wrap">
            <FontAwesome5  name="tasks" size={12} color="black" />
            <Text   lineHeight={16}    fontSize={'$xs'} color="$gray500">
                 Prazo 3 dias
            </Text>
            </HStack>

        </HStack>
    )

}