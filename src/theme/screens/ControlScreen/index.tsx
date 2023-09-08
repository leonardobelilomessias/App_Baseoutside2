import { Avatar, AvatarFallbackText, Box, Button, ButtonText, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Feather } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";


export function ControlScreen(){
    return(
        <>
            <VStack p={8} space="md">
                <RequireColab/>
                <NewSponsors/>
                <Warnings/>
                <Balance/>
            </VStack>
        </>
    )
}

function RequireColab(){
    return(
        <VStack bg="$white" p={16} space="md" borderRadius={12}>
            <HStack justifyContent="space-between">
                <Text fontWeight="$bold">
                    Solicitaçoes de colab 
                </Text>
                <Text fontWeight="$bold">
                    2
                </Text>
            </HStack>
            <CardAgent/>
            <CardAgent/>

        </VStack>
    )
}

function NewSponsors(){
    return(
        <>
        <VStack bg="$white" p={12} space="md" borderRadius={12}>
            <HStack justifyContent="space-between">
                <Text fontWeight="$bold">
                    Novos Patriocinadores
                </Text>
                <Text fontWeight="$bold">
                    2
                </Text>
            </HStack>
            <HStack justifyContent="space-between">
                <CardAgent/>
                <VStack alignItems="center">
                <Text fontWeight="$black" color="$green400">R$50</Text>
                <Text fontSize={'$xs'} color="$gray400" lineHeight={12} > recorrente</Text>
                </VStack>
            </HStack>
            <HStack justifyContent="space-between">
                <CardAgent/>
                <VStack alignItems="center">
                <Text fontWeight="$black" color="$green400">R$130</Text>
                <Text fontSize={'$xs'}lineHeight={12} color="$gray400"> unica</Text>
                </VStack>
            </HStack>

        </VStack>
        </>
    )
}

function CardAgent(){
    return(
        <Box marginBottom={16}>
            <HStack alignItems="center"
            space="md"
            >
            <Avatar 
                    bgColor="$black"
                    size="md"
                    borderRadius="$full">
                        <AvatarFallbackText>
                            Angel Loker
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack>
                        <Text fontWeight="$bold">
                        Angel Loker
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            Empreendedor
                        </Text>
                    </VStack>
            </HStack>
        </Box>
    )

}

function Balance(){
    return(
        <>
        <VStack  bg="$white" p={16} space="lg" borderRadius={12}>
                <Text textAlign="center" fontWeight="$bold">
                    Balancço Financeiro
                </Text>
                <Box>

                <Text textAlign="center" lineHeight={36} color="$green400" fontWeight="$bold" fontSize={36}>R$4800</Text>
                </Box>
   
                <HStack justifyContent="space-around"  alignContent="center">
                    <VStack >
                        <HStack justifyContent="center" space="xs">
                        <Feather name="trending-up" size={18} color={extendedConfig.tokens.colors.green400} />
                        <Text textAlign="center" fontWeight="$semibold" fontSize={24} lineHeight={24}>36%</Text>
                        </HStack>
                            <Text color="$gray400"  textAlign="center">Novas Entradas</Text>
                    </VStack>
                    <VStack >
                    <HStack justifyContent="center" space="xs">
                        <Feather name="trending-down" size={18} color={extendedConfig.tokens.colors.red400} />
                        <Text textAlign="center" fontWeight="$semibold" fontSize={24} lineHeight={24}>25%</Text>
                        </HStack>
                        <Text textAlign="center" color="$gray400">investimentos</Text>
                    </VStack>

                </HStack>
                <Button variant="outline" borderColor="$green400">
                     <ButtonText color="$green500">
                                Gerenciar
                    </ButtonText>
                </Button>
 

        </VStack>
        </>
    )
}

function Warnings(){
    return(
        <>
                <VStack bg="$white" p={16} space="md" borderRadius={12}>
            <HStack justifyContent="space-between">
                <Text fontWeight="$bold">
                    Avisos
                </Text>
                <Text fontWeight="$bold">
                    5
                </Text>
            </HStack>
            <VStack>
                <Text color="$green400"  fontWeight="$bold" fontSize={18}>Comparecer a sa de reuniãos as 9hrs</Text>
                <HStack justifyContent="space-between">
                    <Text fontSize={'$sm'}>@baseoutside</Text>
                    <Text fontSize={'$sm'}>Por:Lucas Vinicius</Text>
                </HStack>
            </VStack>
            <VStack>
                <Text color="$green400"  fontWeight="$bold" fontSize={18}>Comparecer a sa de reuniãos as 9hrs</Text>
                <HStack justifyContent="space-between">
                    <Text fontSize={'$sm'}>@baseoutside</Text>
                    <Text fontSize={'$sm'}>Por:Lucas Vinicius</Text>
                </HStack>
            </VStack>

        </VStack>
        </>
    )
}