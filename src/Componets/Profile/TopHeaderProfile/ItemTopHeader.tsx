import { Text, VStack } from "@gluestack-ui/themed";

export function ItemTopHeader({number,name}:{number:string,name:string}){
    return(
    <VStack alignItems="center" >
        <Text fontSize={'$xl'} fontWeight="$bold">{number}</Text>
        <Text fontSize={'$sm'} fontWeight="$bold">{name}</Text>
    </VStack>
    )
}