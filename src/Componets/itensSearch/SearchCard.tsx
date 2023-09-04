import { Avatar, AvatarFallbackText, HStack, Text, VStack } from "@gluestack-ui/themed";

export function SearchCardUser(){
    return(
        <>
            <HStack alignItems="center"
            space="md"
            >
            <Avatar 
                    bgColor="$amber600"
                    size="md"
                    borderRadius="$full">
                        <AvatarFallbackText>
                            Sandeep Srivastava
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack>
                        <Text fontWeight="$bold">
                            Mike Jery
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            Empreendedor
                        </Text>
                    </VStack>
            </HStack>
        </>
    )
}