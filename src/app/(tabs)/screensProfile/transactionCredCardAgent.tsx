import { Box, HStack, Input, InputField, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function TransactionCredCardSponsorAgent(){
    return(
        <>
        <VStack p={12} space="lg">
            <Text fontWeight="$bold" fontSize={20}  lineHeight={20} textAlign="center">
                Patriocinio Para Mike Jerry
            </Text >
            <Text fontWeight="$bold" fontSize={20}  lineHeight={20} textAlign="center">
                Valor Total
            </Text>
            <Text fontWeight="$bold" fontSize={35}  lineHeight={35} textAlign="center">
                R$50
            </Text>
            <VStack space="lg" mt={'$5'}>
                <Input>
                <InputField placeholder="Numero do cartão"/>
                </Input>
                <HStack space="lg">
                    <Input flex={1}>
                    <InputField placeholder="Validade"/>
                    </Input>
                    <Input flex={1}>
                    <InputField placeholder="Codigo"/>
                    </Input>
                </HStack>
                <Input>
                    <InputField placeholder="Nome(igual ao cartão)"/>
                </Input>
            </VStack>

            <Link href={'/screens/successSponsorAgent'} asChild>
           
                    <Pressable  alignSelf='center'  borderRadius={'$full'} mt={'$12'} p={8} width={'$1/2'} bg="$green400">
                            <Text textAlign="center" color="$white"> Patriocinar</Text>
                    </Pressable>
 
            </Link>
        </VStack>
        </>
    )
}