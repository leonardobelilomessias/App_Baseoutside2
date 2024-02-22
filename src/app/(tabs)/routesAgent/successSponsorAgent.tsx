import { Button, ButtonText, Center, Heading, VStack } from "@gluestack-ui/themed";

export default function  SuccessSponsorAgent(){
    return(
        <>
        <VStack p={12} flex={1} bgColor="$white">
            <Center p={32} flex={1}>
                <Heading textAlign="center" size="xl">Pagamento Efetuado com Sucesso</Heading>
            <Button action="positive" bg="$green400" rounded={'$md'} width={'$full'} mt={32}>
                <ButtonText>Ir para pagina de mebros</ButtonText>
            </Button>
            </Center>
        </VStack>
        </>
    )
}