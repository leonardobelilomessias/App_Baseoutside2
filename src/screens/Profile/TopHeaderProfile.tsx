import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function TopHeaderProfile(){
    return(
        
        <HStack hardShadow="4"  borderRadius={'$lg'} bgColor="$white" justifyContent="space-between" p={8} paddingHorizontal={16} softShadow="3">
          <ItemTopHeader  name="Seguidores" number="10" />
          <ItemTopHeader name="Seguindo" number="245" />
          <ItemTopHeader name="Colabs" number="26" />
          <ItemTopHeader name="Tasks" number="9" />

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