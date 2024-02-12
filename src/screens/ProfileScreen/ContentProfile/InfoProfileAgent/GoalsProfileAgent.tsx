import { Image, Pressable, Progress, ProgressFilledTrack, Text, VStack } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import ImageTeaser from '@/assets/develop.jpg'


export function GoalsProfileAgent(){
    const itens = ['item1','item2', 'item3', 'item4', 'item5']
    return(
        <VStack space="md" borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={32} >
        <Text fontWeight="$bold" >
            Objetivos
        </Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={itens}
        renderItem={(itens)=>(
            <VStack alignContent="center" justifyContent="center" alignItems="center" width={130}marginRight={8}  >
            <Pressable key={itens.item} width={130}  borderRadius={'$lg'} height={130} bgColor="$green200" >
                <Image source={ImageTeaser} size="full" borderRadius={10}    />
            </Pressable>
                <Text size="xs" lineHeight={'$2xs'} flexWrap="wrap" textAlign="center"  fontWeight="$medium">Criação de nova sede </Text>
                <VStack space="xs">

                <Progress value={55} w={120} h="$1">
                    <ProgressFilledTrack h="$1" bgColor="$green500" />
                </Progress>
                </VStack>
            </VStack>
        )}
        >
        
        </FlatList>
        </VStack>
    )
 }