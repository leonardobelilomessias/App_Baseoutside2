import { linkActionsAgent, linkColabsAgent, linkMissionAgent, linkTasksAgent } from "@/utils/aplicationRouterLinks";
import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { ItemTopHeader } from "./ItemTopHeader";

export function TopHeaderProfile(){
    return(
        
        <HStack hardShadow="4"  borderRadius={'$lg'} bgColor="$white" justifyContent="space-between" p={8} paddingHorizontal={16} softShadow="3">
          {
            itens.map((item)=>(
            <Pressable key={item.name} onPress={()=>{router.push(item.link)}}>
              <ItemTopHeader  name={item.name} number="10" />
            </Pressable>
            ))
          }

        </HStack>
        
    )
}


const itens = [ 
  {
  name:"Missões",
  link:linkMissionAgent
  }, 
  {
  name:"Ações",
  link:linkActionsAgent
  },
  {
    name:"Colabs",
    link:linkColabsAgent
  },
  {
  name:"Tarefas",
  link:linkTasksAgent
}]