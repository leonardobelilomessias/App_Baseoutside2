import { Box, Image, Pressable, Progress, ProgressFilledTrack, Text, VStack } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import { linkNotFoundImageCoverMidia } from "@/utils/aplicationRouterLinks"
import { goalsMocks } from "@/mocks/agents/dataProfileMocks"
import { extendedConfig } from "@/theme/config"

export function GoalsProfileAgent(){
    const image = linkNotFoundImageCoverMidia
    return(
        <VStack space="md" borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={32} >
        <Text paddingHorizontal={extendedConfig.defaulPaddingToCompanents} fontWeight="$bold" >
            Objetivos
        </Text>
        <FlatList 
        contentContainerStyle={{padding:extendedConfig.defaulPaddingToCompanents}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={goalsMocks}
        renderItem={({item})=>(
            <Pressable alignContent="center" justifyContent="center" alignItems="center"  width={130}marginRight={8}  >
                <VStack space="xs">
                    <Box key={item.id} width={130}  borderRadius={'$lg'} height={130} bgColor="$green200" >
                        <Image source={{uri:image}} size="full" borderRadius={10}    />
                    </Box>
                    <Progress value={item.Progress} w={130} h="$2">
                        <ProgressFilledTrack h="$2" bgColor="$green500" />
                    </Progress>
                    <Text size="xs" lineHeight={'$2xs'} flexWrap="wrap" textAlign="center" minHeight={36} fontWeight="$medium">{item.title} </Text>
                </VStack>
            </Pressable>
        )}>
        </FlatList>
        </VStack>
    )
 }