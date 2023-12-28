import { Avatar,Text, AvatarFallbackText, Badge, BadgeText, Box, Button, HStack, Heading, VStack, ButtonText, Pressable } from "@gluestack-ui/themed";
import { BottonItemFeed } from "../BottonItemFeed";
import { router } from "expo-router";


export function DailyPublications(){
    return(
        <Box bg="$white" p={12}  borderColor="$gray200" borderTopWidth={0.45} borderBottomWidth={0.4} softShadow="1" >
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
                        <BadgeText>Daily Post</BadgeText>
                    </Badge>
                </HStack>
        <VStack space="xl" paddingBottom={18} >
            <HStack backgroundColor="$green100" space="xl" p={8} alignContent="center" alignItems="center">
                <VStack >
                    <Text color="$gray400" fontWeight="$bold" fontSize={'$lg'} >
                        25
                    </Text>
                    <Text color="$gray400" fontWeight="$bold" size="xs" lineHeight={12} >out</Text>
                </VStack>
            <Text  fontWeight="$bold" color="$green400" textAlign="center" >Dias de lutas dias de gloria</Text>
            </HStack>
            <Text>
            Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens...
            </Text>
            <Pressable>
                <Text textAlign="center" fontWeight="bold" color="$green400">Ver Completo</Text>
            </Pressable>
            <BottonItemFeed/>
        </VStack>
            </VStack>
        </Box>
    )
}