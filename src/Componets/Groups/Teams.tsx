import { extendedConfig } from "@/theme/config"
import { VStack, HStack, Text, Pressable } from "@gluestack-ui/themed"
import { FontAwesome } from '@expo/vector-icons';

import { router } from "expo-router"
import React from "react"
import { FlatList} from "react-native"

export function Teams(){
    const teams = ['Geral','Financeiro', 'Midia', "Organização"]
    return(
        <VStack space="md" borderBottomWidth={1} borderColor="$gray200" paddingVertical={18}>
            <Text bold>Equipes</Text>
            <HStack space="lg">
                <FlatList data={teams} horizontal showsHorizontalScrollIndicator={false} 
                renderItem={(item)=>(
                    <VStack  key={item.item} alignItems="center" marginRight={8} >
                    <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/teamsAgent')}} width={70} height={70} bgColor="$green100" borderRadius={'$full'} alignItems="center" justifyContent="center" borderColor="$green400" borderWidth={1}>
                    <FontAwesome name={'camera'} size={24} color={extendedConfig.tokens.colors.green400}/>
                    </Pressable>
                    <Text fontWeight="$medium" size="xs" >{item.item}</Text>
                    </VStack>
                )}/>
            </HStack>
        </VStack>
    )
}