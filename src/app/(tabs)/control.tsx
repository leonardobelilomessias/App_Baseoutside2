import { Box, Text, VStack } from "@gluestack-ui/themed"
import { FlatList } from "react-native-gesture-handler"

export default function Control(){
    const numbers = [1,2,5,4,8,9,6,6,6,6,8,7,7,8,9,]
    return(
        <VStack>
        <VStack>
            <FlatList
            data={numbers}
            keyExtractor={(number)=>number.toString()
            }
            renderItem={({item})=>(
                <Box h={24} m={15}>
                    <Text fontSize={'$xl'}> {String(item)}</Text>
                </Box>
            )}
            />
        </VStack>
        </VStack>
    )
}