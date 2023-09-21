import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function TopHeaderProfile(){
    return(
        
        <HStack hardShadow="4"  borderRadius={'$lg'} bgColor="$white" justifyContent="space-between" p={8} paddingHorizontal={16} softShadow="3">
          <ItemTopHeader  name="Açoes" number="0" />
          <ItemTopHeader name="Missoes" number="0" />
          <ItemTopHeader name="Colabs" number="0" />
          <ItemTopHeader name="Tasks" number="0" />

        </HStack>
        
    )
}

function ItemTopHeader({number,name}:{number:string,name:string}){
    return(
    <VStack alignItems="center">
        <Text fontSize={'$xl'} fontWeight="$bold">{number}</Text>
        <Text fontSize={'$sm'} fontWeight="$bold">{name}</Text>
    </VStack>
    )
}