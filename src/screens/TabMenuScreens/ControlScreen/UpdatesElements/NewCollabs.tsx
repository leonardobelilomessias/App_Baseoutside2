import { CardUserPressableSimple } from "@/Componets/Cards/CardUserPressableSimple";
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks";
import { VStack, HStack, Text, Pressable } from "@gluestack-ui/themed";

export function NewCollabs(){
    return(
        <VStack bg="$white" p={16} space="md" borderRadius={12}   borderBottomColor="$gray200" borderBottomWidth={1}>
            <HStack justifyContent="space-between">
                <Text fontWeight="$bold"> Ultimas solicitaçoes de colab</Text>
                <Text fontWeight="$bold">2</Text>
            </HStack>
            <CardUserPressableSimple id="01" image={null} label="Desenvolvedor" link={linkToProfileAgent} name="John"/>
            <Pressable>
                <Text textAlign="center" color="$green400" size="sm"> Ver todos colabs</Text>
            </Pressable>
        </VStack>
    )
}