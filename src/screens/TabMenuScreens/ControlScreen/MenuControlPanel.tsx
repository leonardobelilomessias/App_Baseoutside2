import { extendedConfig } from "@/theme/config"
import { HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import React from "react"
import { FontAwesome, FontAwesome5, Feather} from "@expo/vector-icons"


export function MenuControlPanel({selectMenu,setSelectMenu}:{selectMenu:string,setSelectMenu:(iten:string)=>void}){
    return(
        <HStack alignContent="space-between" justifyContent="space-around" borderBottomColor="$gray100" borderBottomWidth={1} paddingBottom={8} >
            <Pressable  onPress={()=>{setSelectMenu('updates')}}  flex={1}>
                <VStack alignItems="center">
                    <FontAwesome5 name="history" size={20} color={selectMenu==='updates'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400} />
                    <Text color={selectMenu==='updates'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400} size="2xs">Recentes</Text>
                </VStack>
            </Pressable>
            <Pressable onPress={()=>{setSelectMenu('community')}}  flex={1}>
                <VStack alignItems="center">
                    <FontAwesome name="group" size={20} color={selectMenu==='community'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400} />
                    <Text color={selectMenu==='community'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400}  size="2xs">Comunidade</Text>
                </VStack>
            </Pressable>
            <Pressable onPress={()=>{setSelectMenu('wallet')}}  flex={1}>
                 <VStack alignItems="center">
                    <FontAwesome5  name="wallet" size={20} color={selectMenu==='wallet'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400}  />
                    <Text alignItems="center" color={selectMenu==='wallet'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400}  size="2xs">Carteira</Text>
                </VStack>
            </Pressable>
            <Pressable onPress={()=>{setSelectMenu('config')}}  flex={1}>
                <VStack alignItems="center">
                    <Feather name="settings" size={20} color={selectMenu==='config'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400} />
                    <Text color={selectMenu==='config'?extendedConfig.tokens.colors.green400:extendedConfig.tokens.colors.gray400}  size="2xs">Config</Text>
                </VStack>
            </Pressable>
        </HStack>
    )
}