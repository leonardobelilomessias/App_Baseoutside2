import { HStack, Pressable, VStack,Text } from "@gluestack-ui/themed";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { format } from "date-fns";
import { FooterTaskCartProps, TaskCartProps } from "@/types/ComponetsTypes/cardTypes";


export function TaskCard({ title,userName,requiredSkills,area,date,wage,deadlineTime,id}:TaskCartProps){
    return(
        <Pressable  flexWrap="wrap" paddingVertical={12} borderBottomWidth={1} borderBottomColor="$gray200" >
            <HStack alignItems="center"
            flexWrap="wrap"
            space="lg" 
            >
                    <VStack space="xs">
                        <Text  fontWeight="$extrabold" color="$green400">{title}</Text>
                        <Text   lineHeight={16} flex={0}  fontWeight="$medium"  fontSize={'$sm'} color="$gray300">@{userName} </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300"> {requiredSkills.map((item)=> item+" ")} </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                            Departamento:{ area}
                        </Text>

                        <FooterTaskCard date={date} deadlineTime={deadlineTime} wage={wage} />
                    </VStack>
            </HStack>
        </Pressable>
    )
}


function FooterTaskCard({date,deadlineTime,wage}:FooterTaskCartProps){
    const formateDate =  format(date,"dd/MM/yyyy")
    return(
        <HStack alignContent="center"  flexWrap="wrap">
            <HStack alignContent="center" alignItems="center" justifyContent="center" mr={12}>
                
            <MaterialCommunityIcons name="lightning-bolt" size={14} color={extendedConfig.tokens.colors.gray500} />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                Criando em {formateDate}
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} flexWrap="wrap" >
            <FontAwesome name="group" size={12} color={extendedConfig.tokens.colors.gray500} />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                 {wage} pessoas 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" flexWrap="wrap">
            <FontAwesome5  name="tasks" size={12} color={extendedConfig.tokens.colors.gray500} />
            <Text   lineHeight={16}    fontSize={'$xs'} color="$gray400">
                 Prazo {deadlineTime} dias
            </Text>
            </HStack>

        </HStack>
    )

}