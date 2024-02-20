import { FlatList } from "react-native-gesture-handler";
import { AdviceCard } from "../Cards/AdviceCard";
import { AdviceCardProps } from "@/types/ComponetsTypes/cardTypes";
import { AdvicesContainerProps } from "@/types/ComponetsTypes/containersTypes";
import { Text, VStack } from "@gluestack-ui/themed";

export function AdvicesHorizontalContainer({listAdvices}:AdvicesContainerProps){
    return(
        <VStack space="sm">
            <Text bold paddingHorizontal={8}>Avisos</Text>
            <FlatList data={listAdvices}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <AdviceCard creator={item.creator} date={item.date} id="" priority={item.priority} text={item.text} title={item.title}/>  
                )}
                />
        </VStack>
    )
}