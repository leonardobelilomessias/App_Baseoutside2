import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function SearchCardUser({name}:{name:string}){
    return(
        <Box marginBottom={16}>
            <HStack alignItems="center"
            space="md"
            >
            <Avatar 
                    bgColor="$amber600"
                    size="md"
                    borderRadius="$full">
                        <AvatarFallbackText>
                            {name}
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack>
                        <Text fontWeight="$bold">
                           {name}
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            Empreendedor
                        </Text>
                    </VStack>
            </HStack>
        </Box>
    )
}