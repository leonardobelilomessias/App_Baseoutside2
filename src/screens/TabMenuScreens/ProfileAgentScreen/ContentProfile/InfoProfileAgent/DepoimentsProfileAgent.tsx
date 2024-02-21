import { VStack, Text } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import { DepoimentCard } from "@/Componets/Cards/DepoimentCard"
import { depoimentsAgentMock } from "@/mocks/actions/depoimentsMock"
import { extendedConfig } from "@/theme/config"

export function DepoimentsProfileAgent(){
    return(
        <VStack borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={24}>
            <Text marginBottom={12} fontWeight="$bold" paddingHorizontal={extendedConfig.defaulPaddingToCompanents}>Depoimentos</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding:extendedConfig.defaulPaddingToCompanents}}
            horizontal
            data={depoimentsAgentMock}
            renderItem={({item})=>(<DepoimentCard  id={item.id} imageCover={item.imageCover} text={item.text} userName={item.userName}/>)}
            />
        </VStack>
    )
}