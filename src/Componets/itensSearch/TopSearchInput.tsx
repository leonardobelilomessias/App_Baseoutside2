

import {  HStack, Icon, Input, InputField, InputIcon, SearchIcon, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
type TypeSearchInput={
    textSearch:string
    setTextSeatch:(text:string)=>void
}
export function TopSearchInput({textSearch,setTextSeatch}:TypeSearchInput){
    return(
    <HStack alignItems="center"  borderRadius={8} bgColor="$white" p={'$2'} space="md">
        <AntDesign name="arrowleft" size={24} color="black" />
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