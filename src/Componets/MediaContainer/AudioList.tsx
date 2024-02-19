import { VStack, Center, Text } from "@gluestack-ui/themed";
import { FontAwesome5 } from '@expo/vector-icons';

import React from "react";

export function AudioList(){
    return(
        <VStack space="xs">
            <Text bold>Audios</Text>
            <Center width={100} height={100} bg="$green200" borderRadius={'$md'}>
            <FontAwesome5 name="headphones-alt" size={32} color="white" />
            <Text color="$white" bold fontSize={'$sm'}>Let's code</Text>
            </Center>
        </VStack>
    )
}