import { VStack, Text } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import { DepoimentCard } from "@/Componets/Cards/DepoimentCard"
import { depoimentsAgentMock } from "@/mocks/actions/depoimentsMock"

export function DepoimentsProfileAgent(){
    return(
        <VStack borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={32}>
        <Text marginBottom={12} fontWeight="$bold">Depoimentos</Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={depoimentsAgentMock}
        renderItem={({item})=>(<DepoimentCard  id={item.id} imageCover={item.imageCover} text={item.text} userName={item.userName}/>)}
        />
        </VStack>
    )
}