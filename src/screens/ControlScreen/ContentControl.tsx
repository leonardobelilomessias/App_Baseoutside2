import { VStack, Text } from "@gluestack-ui/themed"
import React from "react"
import { UpdateElements } from "./UpdatesElements";

export function ContentControl( {selectMenu,setSelectMenu}:{selectMenu:string,setSelectMenu:(iten:string)=>void}){
    return(
        <VStack bg="white" flex={1}>
            {
                selectMenu==='updates'&&
                <UpdateElements/>
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