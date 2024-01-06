import { extendedConfig } from "@/theme/config"
import { VStack, HStack, Box, Avatar, AvatarFallbackText, ButtonText, Text,Pressable,Button } from "@gluestack-ui/themed"
import React from "react"

import { Feather,FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { UpdateItens } from "./UpdatesItens";

export function ContentControl( {selectMenu,setSelectMenu}:{selectMenu:string,setSelectMenu:(iten:string)=>void}){
    return(
        <VStack bg="white" flex={1}>
        {
            selectMenu==='updates'&&
            <UpdateItens/>
        }
                {
            selectMenu==='community'&&
            <Text>Community</Text>
        }
                {
            selectMenu==='wallet'&&
            <Text>Wallelt</Text>
        }
                {
            selectMenu==='config'&&
            <Text>Config</Text>
        }
        </VStack>
    )
}