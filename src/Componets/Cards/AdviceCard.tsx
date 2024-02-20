import { AdviceCardProps } from "@/types/ComponetsTypes/cardTypes";
import { HStack, Text, VStack } from "@gluestack-ui/themed";

export function AdviceCard({creator,date,id,priority, text,title}:AdviceCardProps){
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iusto! Numquam voluptates cumque eveniet voluptatibus ratione. Eius ipsam exercitationem placeat "
    return(
        

            <VStack marginHorizontal={4}   width={240} height={120} borderRadius={'$md'} borderColor="$red500" p={8} borderWidth={1}>
                <Text fontWeight="$medium"> Tempo prazo de inscrição </Text>
                <Text size="sm" color="$gray400">{description.slice(0,80)}</Text>
                <HStack  borderTopColor="$gray300" borderTopWidth={0.7} justifyContent="space-between" width={'$full'} p={4}>
                    <Text size="2xs" color="$gray500">@baseoutside</Text>
                    <Text size="2xs" color="$gray500">seg 12 jan  08:25</Text>
                </HStack>
            </VStack>
            

    )
}