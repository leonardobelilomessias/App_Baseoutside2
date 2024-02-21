import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { ContentControl } from "./ContentControl";
import { MenuControlPanel } from "./MenuControlPanel";
import { ScrollView } from "react-native-gesture-handler";

export function ControlScreen(){
    const [selectMenu,setSelectMenu] = useState('updates')
    return(

            <VStack p={8}  bgColor="white" flex={1}>
                <MenuControlPanel selectMenu={selectMenu} setSelectMenu={setSelectMenu}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ContentControl selectMenu={selectMenu} setSelectMenu={setSelectMenu}/>
                </ScrollView>
            </VStack>
    )
}