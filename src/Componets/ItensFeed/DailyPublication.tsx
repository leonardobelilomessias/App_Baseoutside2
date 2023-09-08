import { Avatar,Text, AvatarFallbackText, Badge, BadgeText, Box, Button, HStack, Heading, VStack, ButtonText } from "@gluestack-ui/themed";


export function DailyPublication(){
    return(
        <Box bg="$white" p={24} borderRadius={'$xl'}>
            <VStack space="md">
                <HStack 
                p={8}
                zIndex={1}
                alignItems="center"
                justifyContent="space-between"
                space={'md'}>
                    <HStack alignItems="center" space="md">

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
                </HStack>
                    <Badge
                    size="sm" 
                    variant="solid" 
                    borderRadius="$none" 
                    action="success">
                        <BadgeText>New feature</BadgeText>
                    </Badge>
                </HStack>
                <HStack>
                    <Heading mr={'$10'}>25</Heading>
                    <Heading>Conquista do ano</Heading>
                </HStack>
                <Text>
                Como tinha  dito anteriormente estamos em uma fase de crescimento 
                aqui  em nossa equipe e cada dia nós temos tido  
                resultados surpreendentes, 
                mas hoje aconteceu algo incrivel ...[+]
                </Text>
                <Button 
                bgColor="$white" 
                borderWidth={1}
                borderColor="$green400"
                rounded={'$full'}>
                    <ButtonText 
                    color="$green400">
                        Ler Completo
                    </ButtonText>
                </Button>
            </VStack>
        </Box>
    )
}