import { Box, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import ImageArea from '@/assets/vl.jpg'
import { FlatList } from "react-native";
export default function AreasMission(){
    const areas = ['Organização','Midia','Administrativo','Financeiro', 'Logistica',
'Geral']
    return(
        <VStack bg="$white" flex={1}>


            <FlatList
            data={areas}
            renderItem={(item)=>(
                <CardArea name={item.item} key={item.item}/>
            )}
            />
        </VStack>
    )
}

function CardArea({name}:{name:string}){
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