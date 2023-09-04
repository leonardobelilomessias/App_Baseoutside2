import { DailyPublication } from "@/Componets/ItensFeed/DailyPublication";
import { PhotoPublication } from "@/Componets/ItensFeed/PhotoPublication";
import { VStack } from "@gluestack-ui/themed";
import { Stack } from "expo-router";

export function Feed(){
    return(
        <VStack space={'md'}>
        <PhotoPublication/>
        <DailyPublication/>
        </VStack>
    )
}