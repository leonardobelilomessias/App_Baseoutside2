import { SponsorScreen } from "@/screens/SponsorScreen";
import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";


export default function SponsorAgent(){
    function onBackPress(){
        router.push('/profile')
        return true

    }

    return(
        <>
        <VStack flex={1}>

        <SponsorScreen/>

        </VStack>

        </>
    )
}