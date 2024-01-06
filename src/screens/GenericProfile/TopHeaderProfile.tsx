import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";

export function TopHeaderProfile(){
    return(
        
        <HStack hardShadow="4"  borderRadius={'$lg'} bgColor="$white" justifyContent="space-between" p={8} paddingHorizontal={16} softShadow="3">
          <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/missionsAgent')}}>
            <ItemTopHeader  name="Missões" number="10" />
          </Pressable>
          <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/actionsAgent')}}>
            <ItemTopHeader name="Ações" number="245" />
          </Pressable>
          <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/colabsAgent')}}>
            <ItemTopHeader name="Colabs" number="26" />
          </Pressable>
          <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/tasksAgent')}}>
            <ItemTopHeader name="Tarefas" number="9" />
          </Pressable>
  
        </HStack>
        
    )
}

function ItemTopHeader({number,name}:{number:string,name:string}){
    return(
    <VStack alignItems="center" >
        <Text fontSize={'$xl'} fontWeight="$bold">{number}</Text>
        <Text fontSize={'$sm'} fontWeight="$bold">{name}</Text>
    </VStack>
    )
}
