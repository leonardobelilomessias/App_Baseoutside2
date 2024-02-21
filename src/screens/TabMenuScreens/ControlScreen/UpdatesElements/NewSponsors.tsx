import { CardUserPressableSimple } from "@/Componets/Cards/CardUserPressableSimple";
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks";
import { VStack, HStack, Text, Pressable } from "@gluestack-ui/themed";

export function NewSponsors(){
    return(
        <>
        <VStack bg="$white" p={12} space="md" borderRadius={12}  borderBottomColor="$gray200" borderBottomWidth={1}>
            <HStack justifyContent="space-between">
                <Text fontWeight="$bold">
                    Novos Patriocinadores
                </Text>
                <Text fontWeight="$bold">
                    2
                </Text>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
                <CardUserPressableSimple id="01" image={null} label="Desenvolvedor" link={linkToProfileAgent} name="John"/>
                <VStack alignItems="center" >
                <Text fontWeight="$black" color="$green400">R$50</Text>
                <Text fontSize={'$xs'} color="$gray400" lineHeight={12} > recorrente</Text>
                </VStack>
            </HStack>
            <HStack justifyContent="space-between" alignContent="center" alignItems="center">
                 <CardUserPressableSimple id="01" image={null} label="Desenvolvedor" link={linkToProfileAgent} name="John"/>
                <VStack alignItems="center">
                    <Text fontWeight="$black" color="$green400">R$130</Text>
                    <Text fontSize={'$xs'}lineHeight={12} color="$gray400"> unica</Text>
                </VStack>
            </HStack>
            <Pressable>
                <Text textAlign="center" color="$green400" size="sm"> Ver todos Patriocinadores</Text>
            </Pressable>

        </VStack>
        </>
    )
}
