import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import { useState } from "react"
import { FlatList } from "react-native"

export default function TasksMission(){
    const menu = []
    const [menuSelected,setSelectedMenu] = useState('Em andamento')
    const tasks = ['Desenvolvimento Social', 'Cadastro de moradores', 'Visita Solidaria', 'Impactto Vila','Dia da Criança', 'Cafe Da manhã com mebros']
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
            data={tasks}
            renderItem={(item)=>(
                <CarTask name={item.item}/>
            )}
            />
            
        </VStack>
    )
}


function CarTask({name}:{name:string}){
    return(
        <>
         <HStack borderBottomWidth={1} borderColor="$gray100" marginHorizontal={8} space="md" paddingVertical={12}>
                
                <VStack display="flex" flex={1} justifyContent="space-between" p={4}>
                    <Text fontWeight="$bold">{name}</Text>
                    <Box >
                        <Text flexWrap="wrap" >
                        Realização de  tarefas 
                        para o desenvolvimento da ação
                        </Text>
                    </Box>
                    <Text color="$green400" fontSize={'$sm'} fontWeight="$bold">
                    Dia 15/09/23  as 15hrs, 8 vagas disponiveis
                    </Text>
                 
                </VStack>
            </HStack>
        </>
    )
}