import { extendedConfig } from "@/theme/config";
import { AdviceCardProps } from "@/types/ComponetsTypes/cardTypes";
import { Avatar, AvatarFallbackText, Badge, BadgeIcon, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Tags } from "../Tags";

export function AdviceCard({creator,date,id,priority, text,title}:AdviceCardProps){
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iusto! Numquam voluptates cumque eveniet voluptatibus ratione. Eius ipsam exercitationem placeat "
    const prioriryColor = selectPriorityCard(priority)
    return(
        

            <VStack marginHorizontal={4} bgColor={"$white"}   width={240} height={150} borderRadius={'$md'} borderColor={"$gray200"} p={8} borderWidth={2}>
               <HStack alignContent="center" alignItems="center"  borderBottomColor="$gray200" borderBottomWidth={1} justifyContent="space-between">
                    <HStack space="md" paddingVertical={4} >
                        <Avatar size="xs" bgColor="$green400">
                            <AvatarFallbackText>
                                {creator}
                            </AvatarFallbackText>
                        </Avatar>
                        <Text size="sm">{creator}</Text>
                        </HStack>
                    <Label color={prioriryColor} />
               </HStack>
                <Text fontWeight="$extrabold">Tempo prazo de inscrição </Text>
                <Text size="sm" color="$gray400">{description.slice(0,80)}</Text>
                <HStack  borderTopColor="$gray300" borderTopWidth={0.7} justifyContent="space-between" width={'$full'} p={4}>
                    <Text size="2xs" color="$gray500">@baseoutside</Text>
                    <Text size="2xs" color="$gray500">seg 12 jan  08:25</Text>
                </HStack>
            </VStack>
            

    )
}

function Label({color}:{color:"error" | "success" | "info" | "warning" | "muted"}){
    return(
        <Badge size="sm" variant="solid" borderRadius="$none" height={'$5'} action={color} >
            <BadgeText>New feature</BadgeText>
        </Badge>
    )
}

function selectPriorityCard(prioriry:string){
    switch (prioriry) {
        case "high":
            return "error"
            break;
        case "medium":
            return  "success"
            break;
        case "normal":
            return "info"
            break;
        default:
            return "info"
            break;
    }
}