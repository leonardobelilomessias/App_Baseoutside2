import { VStack, HStack, Center, Text } from "@gluestack-ui/themed";
import React from "react";
import { AntDesign } from '@expo/vector-icons';


export function FilesList(){
    return(
        <VStack space="xs">
            <Text bold>Arquivos</Text>
            <HStack space="md">
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="pdffile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="wordfile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
                <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
                <AntDesign name="pdffile1" size={40} color="white" />
                <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
                </Center>
            </HStack>
        </VStack>
    )
}