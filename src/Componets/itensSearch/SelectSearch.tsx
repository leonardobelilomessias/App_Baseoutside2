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
                        minWidth={'$16'}
                        bg={item===itemSelected?'$green600':'$white'}
                        borderRadius={'$full'}
                        p={2}
                        m={2}
                        onPress={()=>{setItemSelected(item)}}

                        >
                            <Text 
                            textAlign="center" 
                            color={itemSelected===item?'$white':"$green400"}
                            >
                                {item==="Actions"&& "Ação"}
                                {item==="Missions"&& "Missão"}
                                {item==="Tasks"&& "Tasks"}
                                {item==="Agents"&& "Agentes"}


                            
                            </Text>
                        </Pressable>
                    ))
                }
                
            </HStack>

        </>
    )
}