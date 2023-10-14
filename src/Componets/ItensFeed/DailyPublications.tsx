import { Avatar,Text, AvatarFallbackText, Badge, BadgeText, Box, Button, HStack, Heading, VStack, ButtonText } from "@gluestack-ui/themed";
import { BottonItemFeed } from "../BottonItemFeed";
import { router } from "expo-router";


export function DailyPublications(){
    return(
        <Box bg="$white" p={12} borderRadius={'$xl'} borderColor="$gray200" borderWidth={0.45} >
            <VStack space="md">
                <HStack 
                p={8}
               
                zIndex={1}
                alignItems="center"
                justifyContent="space-between"
                space={'md'}>
                    <HStack alignItems="center" space="md">

                    <Avatar 
                    bgColor="$green400"
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
                <VStack space="md">

                <HStack >
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
                onPress={()=>{router.push('/dailyPublication')}}
                borderColor="$green400"
                rounded={'$full'}>
                    <ButtonText 
                    color="$green400">
                        Ler Completo
                    </ButtonText>
                </Button>
                <BottonItemFeed/>
                        </VStack>
            </VStack>
        </Box>
    )
}