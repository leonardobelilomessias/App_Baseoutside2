import { Box, HStack, Image, Pressable, Text, VStack } from "@gluestack-ui/themed"
import ImageArea from '@/assets/vl.jpg'
import { useState } from "react"
import { FlatList } from "react-native-gesture-handler"

export default function ActionsAgentScreen(){
    const menu = []
    const [menuSelected,setSelectedMenu] = useState('Em andamento')
    const actions = ['Desenvolvimento Social', 'Cadastro de moradores', 'Visita Solidaria', 'Impactto Vila','Dia da Criança', 'Cafe Da manhã com mebros']
    return(

        <VStack bg="$white" flex={1}>
            <HStack  justifyContent="space-around">
                <Pressable onPress={()=>{setSelectedMenu('Em andamento')}} p={8} borderBottomColor={menuSelected==='Em andamento'? "$green400":'$white'} borderBottomWidth={1}> 
                    <Text textAlign="center" color={menuSelected==='Em andamento'? "$green400":'$gray400'}>
                        Em andamento
                    </Text>
                </Pressable> 
                <Pressable onPress={()=>{setSelectedMenu('Concluidas')}}  p={8} borderBottomColor={menuSelected==='Concluidas'? "$green400":'$white'}  borderBottomWidth={1}> 
                    <Text textAlign="center" color={menuSelected==='Concluidas'? "$green400":'$gray400'}>
                        Concluidas
                    </Text>
                </Pressable>           
                <Pressable onPress={()=>{setSelectedMenu('Proximas')}}  p={8} borderBottomColor={menuSelected==='Proximas'? "$green400":'$white'}  borderBottomWidth={1}> 
                    <Text textAlign="center" color={menuSelected==='Proximas'? "$green400":'$gray400'}>
                        Proximas
                    </Text>
                </Pressable>                          
            </HStack>
            <FlatList
            data={actions}
            renderItem={(item)=>(
                <CardActions name={item.item}/>
            )}
            />
            
        </VStack>
    )
}



function CardActions({name}:{name:string}){
    return(
        <>
         <HStack borderBottomWidth={1} borderColor="$gray300" marginHorizontal={8} space="md" paddingVertical={12}>
                <Image borderRadius={12} source={ImageArea} size='lg'></Image>
                <VStack display="flex" flex={1} justifyContent="space-between">
                    <Text fontWeight="$bold">{name}</Text>
                    <Box >
                        <Text flexWrap="wrap" >
                        Realização de  tarefas 
                        para o desenvolvimento da ação
                        </Text>
                    </Box>
                    <HStack justifyContent="space-between">
                        <Text color="$green400" fontSize={'$sm'} fontWeight="$bold">
                            5 vagas
                        </Text>
                        <Text color="$green400" fontSize={'$sm'} fontWeight="$bold">
                            11 Tasks
                        </Text>
                        <Text color="$green400" fontSize={'$sm'} fontWeight="$bold">
                            25 participantes
                        </Text>
                    </HStack>
                </VStack>
            </HStack>
        </>
    )
}