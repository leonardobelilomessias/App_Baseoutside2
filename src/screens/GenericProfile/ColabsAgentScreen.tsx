import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native-gesture-handler";



export function ColabsAgentScreen(){
    const numbers = [1,2,5,4,8,9,6,10]

    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={numbers}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.toString()
            }
            renderItem={({item})=>(
                <ColabCard name={'item.name'} />
            )}
            />
            </VStack>

    )
}
export function ColabCard({name}:{name:string}){
    return(
        <Box marginVertical={8}>
            <HStack alignItems="center"space="md">
                <Avatar 
                        bgColor="$black"
                        size="md"
                        borderRadius="$full">
                            <AvatarFallbackText>
                                {name}
                            </AvatarFallbackText>
                </Avatar>
                 <VStack>
                        <Text fontWeight="$bold">
                           {name}
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            Empreendedor
                        </Text>
                </VStack>
            </HStack>
        </Box>
    )
}