import { SponsorScreen } from "@/theme/screens/SponsorScreen";
import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";


export default function SponsorAgent(){
    function onBackPress(){
        router.push('/profile')
        return true

    }
    useEffect(()=>{
        const event =BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return ()=>event.remove()
    },[])
    return(
        <>
        <VStack>

        <SponsorScreen/>

        </VStack>

        </>
    )
}