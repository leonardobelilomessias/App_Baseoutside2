import { Box, Button, ButtonText, HStack, Heading, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { useState } from "react";

export function SponsorScreen(){
    const firstValues = [5,10,15,20]
    const secondValues = [25,30,35,50]
    const [selectedValue,setSelectedValue] = useState(firstValues[0])

    return(
        <>
        <VStack alignItems="center" space="lg">
            <Heading> Pratiocine Jerry</Heading>
            <Text> Ao patriocinar Mike Jerry você terá acesso a area esclusiva 
                e terá os seguindes beneficios adicionais.
            </Text>
            <VStack alignItems="center" space="md" >
                <HStack alignItems="center" space="sm">
                    <Box width={'$1'} height={'$1'} bg="$green400" borderRadius={'$full'}/>
                    <Text>
                    Acesso ao Dayly post diario
                    </Text>
                </HStack>
                <HStack flexWrap="wrap" space="sm">
                    {firstValues.map(value=>(
                                    <Pressable 
                                    key={value}
                                    backgroundColor={selectedValue===value?'$green100':'$white'}
                                    borderRadius={'$full'} 
                                    width={'$20'} 
                                    paddingVertical={8} 
                                    borderWidth={'$1'} 
                                    borderColor="$green400"
                                    onPress={()=>{setSelectedValue(value)}}>
                                            <Text fontWeight="$bold" color="$green400" textAlign="center">
                                                ${value}
                                            </Text>
                                        </Pressable>
                    ))}
                </HStack>
                <HStack flexWrap="wrap" space="sm">
                {secondValues.map(value=>(
                                    <Pressable key={value} backgroundColor={selectedValue===value?'$green100':'$white'} 
                                    borderRadius={'$full'} 
                                    width={'$20'} 
                                    paddingVertical={8} 
                                    borderWidth={'$1'} 
                                    borderColor="$green400"
                                    onPress={()=>{setSelectedValue(value)}}
                                    >
                                            <Text fontWeight="$bold" color="$green400" textAlign="center">
                                                ${value}
                                            </Text>
                                        </Pressable>
                    ))}
                </HStack>
            </VStack>
            <Text alignSelf="flex-start" ml={12} fontWeight="$bold">TOTAL: R${selectedValue}</Text>
            <Link href={'/screens/transactionCredCardAgent' } asChild>
                    <Pressable borderRadius={'$full'} mt={'$20'} p={8} width={'$1/2'} bg="$green400">
                        <Text textAlign="center" color="$white"> Patriocinar</Text>
                    </Pressable>
            </Link>
        </VStack>
        </>
    )
}

