import { Avatar, AvatarFallbackText, Badge, BadgeText, HStack, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed/build/components/Badge/styled-components";

export function DailyPublication(){
    return(
        <>
            <VStack>
                <HStack 
                p={8}
                zIndex={1}
                alignItems="center"
                space={'md'}>
                    <Avatar 
                    bgColor="$amber600"
                    size="sm"
                    borderRadius="$full">
                        <AvatarFallbackText>
                            Sandeep Srivastava
                        </AvatarFallbackText>
                    </Avatar>
                    <Text>
                        Mike Jery
                    </Text>
                    <Badge
                    size="sm" 
                    variant="solid" 
                    borderRadius="$none" 
                    action="success">
                        <BadgeText>New feature</BadgeText>
                    </Badge>
                </HStack>
            </VStack>
        </>
    )
}