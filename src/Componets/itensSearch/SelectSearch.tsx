import { HStack, Pressable, Text } from "@gluestack-ui/themed";
import { useState } from "react";

const itensToSelect = ['Agents', 'Missions', 'Actions', 'Tasks']
export function SelectSearch({itemSelected,setItemSelected}:{itemSelected:string,setItemSelected:(item:string)=>void}){
    
    return(
        <>
            <HStack justifyContent="space-around"  maxWidth={'100%'}>
                {
                    itensToSelect.map(item=>(
                        <Pressable  
                        flex={1}
                        key={item} 
                        borderWidth={1}
                        borderColor={item===itemSelected?'$white':'$green400'} 
                        minWidth={'$12'}
                        bg={item===itemSelected?'$green400':'$white'}
                        borderRadius={8}
                        p={2}
                        m={2}
                        onPress={()=>{setItemSelected(item)}}

                        >
                            <Text 
                            textAlign="center" 
                            color={itemSelected===item?'$white':"$green400"}
                            fontSize={'$sm'}
                            >
                                {item==="Actions"&& "Ação"}
                                {item==="Missions"&& "Missão"}
                                {item==="Tasks"&& "Tarefas"}
                                {item==="Agents"&& "Agentes"}


                            
                            </Text>
                        </Pressable>
                    ))
                }
                
            </HStack>

        </>
    )
}