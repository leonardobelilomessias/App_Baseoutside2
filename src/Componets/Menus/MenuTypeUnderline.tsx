import { MenuTypeUndelineProps } from "@/types/ComponetsTypes/menuTypes";
import { HStack, Pressable,Text} from "@gluestack-ui/themed"
import React, { useState } from "react"
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export function MenuTypeUnderline({itensMenu, itemSelected,setItenSelected, ...rest}:MenuTypeUndelineProps):JSX.Element{
    
    return(

            <HStack  justifyContent="space-around" {...rest}>
                {
                    itensMenu.map((item)=>(
                    <Pressable key={item} onPress={()=>{setItenSelected(item)}} p={8} borderBottomColor={itemSelected===item? "$green400":'$white'} borderBottomWidth={1}> 
                        <Text textAlign="center" size="sm" color={itemSelected===item? "$green400":'$gray400'}>
                            {item}
                        </Text>
                    </Pressable>  
                    ))
                }
                     
            </HStack>

    )
}