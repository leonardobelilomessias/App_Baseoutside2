

import {  HStack, Icon, Input, InputField, InputIcon, SearchIcon, Text } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
export function TopSearchInput(){
    return(
    <HStack alignItems="center" flex={1} borderRadius={8} bgColor="$white" p={'$2'} space="md">
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
         <InputField placeholder="Buscar..." />
    </Input>
    </HStack>
    )
}