import { Box, HStack, Image, Text, VStack,Pressable, Button, ButtonText } from "@gluestack-ui/themed";
import ImagePhoto from '@/assets/develop.jpg'
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import { extendedConfig } from "@/theme/config";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from "expo-router";
export function ExclusiveArea(){

    return(
        <VStack >
            <Teams/>
            <Advices/>
            <ExclusiveGroups/>
        
        </VStack>
    )
}
function Teams(){
    const teams = ['Geral','Financeiro', 'Midia', "Organização"]

    return(
        <VStack space="md" borderBottomWidth={1} borderColor="$gray200" paddingVertical={18}>
            <Text bold>Equipes</Text>
            <HStack space="lg">
                <FlatList data={teams} horizontal showsHorizontalScrollIndicator={false} renderItem={(item)=>(
                                    <VStack alignItems="center" marginRight={8} >
                                    
                                    <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/teamsAgent')}} width={70} height={70} bgColor="$green100" borderRadius={'$full'} alignItems="center" justifyContent="center" borderColor="$green400" borderWidth={1}>
                                    <FontAwesome name={'camera'} size={24} color={extendedConfig.tokens.colors.green400}/>
                                    </Pressable>
                                    <Text fontWeight="$medium" size="xs" >{item.item}</Text>

                                    
                                </VStack>
                )}/>


            </HStack>
        </VStack>
    )
}
function ExclusiveGroups(){
    const navigation = useNavigation
    const chatGroups = [{name:'Entendendo o chat', users:12},{name:'Mais sorbre a missão', users:26},{name:'Rezenha de leve', users:39}]
    return(
        <>
        <HStack justifyContent="space-between" padding={10}borderBottomWidth={1} borderBottomColor="$gray200" paddingBottom={10}>
            <Text bold color="$gray600">Grupos de conversa</Text>
            <Octicons name="diff-added" size={20} color={extendedConfig.tokens.colors.green500} />
        </HStack>
        <VStack space="xs">
            {
                chatGroups.map((element)=>(
                    <Pressable onPress={()=>{ router.push({pathname:'/(tabs)/screensProfile/chatGroup',params:{name:element.name}})}}>
                    <HStack borderRadius={'$md'} bgColor="$green400" padding={20}  alignItems="center"   justifyContent="space-between">
                          <Text color="$white" bold>{element.name}</Text>
                            <HStack alignItems="center" space="xs">
                             <FontAwesome name="group" color='white' size={12}/>
                            <Text color="white" bold>{element.users}</Text>    
                            </HStack>
                    </HStack>
                    </Pressable>
                ))
            }
    
            <Box borderRadius={'$md'} bgColor="$white" borderWidth={1} borderColor="$green400" padding={10}>
            <Text textAlign="center" color="$green400" bold>Ver todas conversar</Text>
            </Box>
        </VStack>
        </>
    )
}



function Advices(){
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iusto! Numquam voluptates cumque eveniet voluptatibus ratione. Eius ipsam exercitationem placeat "

    return(
        <VStack borderBottomColor="$gray200" borderBottomWidth={1} paddingVertical={12}>
            <Text bold>
                Avisos 
            </Text>
            <VStack alignItems="center"width={240} height={120} borderRadius={'$md'} borderColor="$gray200" p={8} borderWidth={1}>
                <Text fontWeight="$medium"> Tempo prazo de inscrição </Text>
                <Text size="sm" color="$gray500" fontWeight="$light">{description.slice(0,80)}</Text>
                <HStack  borderTopColor="$gray300" borderTopWidth={0.7} justifyContent="space-between" width={'$full'} p={4}>
                    <Text size="2xs" color="$gray500">@baseoutside</Text>
                    <Text size="2xs" color="$gray500">seg 12 jan  08:25</Text>
                </HStack>
            </VStack>
            
        </VStack>
    )
}