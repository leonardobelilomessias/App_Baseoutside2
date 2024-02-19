import { VStack, HStack, Text } from "@gluestack-ui/themed"

export function AdvicesGroups(){
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iusto! Numquam voluptates cumque eveniet voluptatibus ratione. Eius ipsam exercitationem placeat "

    return(
        <VStack borderBottomColor="$gray200" borderBottomWidth={1} paddingVertical={12}>
            <Text bold>
                Avisos 
            </Text>
            <VStack alignItems="center"width={240} height={120} borderRadius={'$md'} borderColor="$gray200" p={8} borderWidth={1}>
                <Text fontWeight="$medium"> Tempo prazo de inscrição </Text>
                <Text size="sm" color="$gray500" fontWeight="$light">{description.slice(0,80)}</Text>
                <HStack  borderTopColor="$gray300" borderTopWidth={0.7} justifyContent="space-between" width={'$full'} p={4}>
                    <Text size="2xs" color="$gray500">@baseoutside</Text>
                    <Text size="2xs" color="$gray500">seg 12 jan  08:25</Text>
                </HStack>
            </VStack>
            
        </VStack>
    )
}