import { Avatar, AvatarFallbackText, AvatarImage, Box, Button, ButtonText, Center, HStack, Heading, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useDataAgent } from "@/context/UserContext";
import { baseURL } from "@/utils/params";
export function SponsorScreen(){
    const firstValues = [5,10,15,20]
    const secondValues = [25,30,35,50]
    const [selectedValue,setSelectedValue] = useState({type:'diamond', value:100})
    const {dataAgent} = useDataAgent()

    return(
        <>
        <VStack alignItems="center" space="lg" flex={1} bgColor="white">
            <ScrollView style={{ flex:1}}  >
            <VStack alignItems="center" alignContent="center" space="md">
            <Heading textAlign="center"> Pratiocine Jerry</Heading>
            <Avatar size="lg">
                <AvatarFallbackText>
                    Simond teste
                </AvatarFallbackText>
                <AvatarImage source={{uri:`${baseURL}/Agent/${dataAgent.image_profile}`}}/>
            </Avatar>
            <Text size="sm"> Ao patriocinar Mike Jerry você terá acesso a area esclusiva 
                e terá os seguindes beneficios adicionais:
            </Text>
            </VStack>
            <VStack alignItems="center" space="md" >
                <HStack alignItems="center" space="sm">
                    <Box width={'$1'} height={'$1'} bg="$green400" borderRadius={'$full'}/>
                    <Text size="sm">
                    Acesso ao Dayly post diario
                    </Text>
                </HStack>
                <Button borderWidth={1}  width={'$full'} borderColor={selectedValue.type==='brown'?'$green400':'$gray400'} bgColor={selectedValue.type==='brown'? extendedConfig.tokens.colors.green100:'white'} onPress={()=>setSelectedValue({type:'brown',value:10})} >

                <MaterialCommunityIcons name="medal-outline" size={18} color={selectedValue.type==='brown'? extendedConfig.tokens.colors.green400:'gray'}/>
                    <ButtonText color={selectedValue.type==='brown'?'$green400':'$gray400'}> Bronze - R$10 / mês</ButtonText>
                </Button>
                <Button borderWidth={1}  width={'$full'} borderColor={selectedValue.type==='silver'?'$green400':'$gray400'} bgColor={selectedValue.type==='silver'? extendedConfig.tokens.colors.green100:'white'} onPress={()=>setSelectedValue({type:'silver',value:30})}>
                <MaterialCommunityIcons name="medal-outline" size={18} color={selectedValue.type==='silver'? extendedConfig.tokens.colors.green400:'gray'} />
                    <ButtonText color={selectedValue.type==='silver'?'$green400':'$gray400'}> Prata - R$30 / mês</ButtonText>
                </Button>
                <Button borderWidth={1}  width={'$full'} borderColor={selectedValue.type==='gold'?'$green400':'$gray400'} bgColor={selectedValue.type==='gold'? extendedConfig.tokens.colors.green100:'white'}  onPress={()=>setSelectedValue({type:'gold',value:60})}>
                <MaterialCommunityIcons name="medal-outline" size={18} color={selectedValue.type==='gold'? extendedConfig.tokens.colors.green400:'gray'} />
                    <ButtonText color={selectedValue.type==='gold'?'$green400':'$gray400'}> Ouro - R$60 / mês</ButtonText>
                </Button>
                <Button borderWidth={1}  width={'$full'} borderColor={selectedValue.type==='diamond'? extendedConfig.tokens.colors.green400:'gray'} bgColor={selectedValue.type==='diamond'? extendedConfig.tokens.colors.green100:'white'}onPress={()=>setSelectedValue({type:'diamond',value:100})}>
                <MaterialCommunityIcons name="diamond-stone" size={18} color={selectedValue.type==='diamond'? extendedConfig.tokens.colors.green400:'gray'}/>
                    <ButtonText color={selectedValue.type==='diamond'? extendedConfig.tokens.colors.green400:'gray'}> Diamante - R$100 / mês</ButtonText>
                </Button>
            </VStack>
  

                    <Pressable borderRadius={'$md'} mt={'$20'} p={8} width={'$full'} onPress={()=>{router.push('/(tabs)/screensProfile/transactionCredCardAgent')}} bg="$green400">
                        <Text textAlign="center" bold color="$white"> Patriocinar</Text>
                    </Pressable>

        </ScrollView>
        </VStack>
        </>
    )
}

