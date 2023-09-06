

import {  HStack, Icon, Input, InputField, InputIcon, Pressable, SearchIcon, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import { router } from "expo-router";
type TypeSearchInput={
    textSearch:string
    setTextSeatch:(text:string)=>void
}
export function TopSearchInput({textSearch,setTextSeatch}:TypeSearchInput){
    return(
    <HStack alignItems="center"  borderRadius={8} bgColor="$white" p={'$2'} space="md">
       <Pressable onPress={()=>{router.back()}}>

        <AntDesign name="arrowleft" size={24} color="black" />
       </Pressable>
        <Input flex={1}>
            <InputIcon pl="$3">
             <Text>
                <AntDesign 
                    name="search1" 
                    size={16} 
                    color={"black"} />
             </Text>
            </InputIcon>
         <InputField placeholder="Buscar..."  onChangeText={(text)=>{setTextSeatch(text)}}/>
    </Input>
    </HStack>
    )
}