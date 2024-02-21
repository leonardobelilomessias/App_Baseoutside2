import { VStack } from "@gluestack-ui/themed";

import { ContentProfile } from "./ContentProfile";
import { MenuTypeBox } from "@/Componets/Menus/MenuTypeBox";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TopHeaderProfile } from "@/Componets/Profile/TopHeaderProfile";
import { AvatarProfile } from "@/Componets/Profile/AvatarProfile";

export function ProfileAgentScreen(){
    const [selectContent,setSelectContent] = useState('Geral')
    const optionsMenu = [{name:"Geral"},{name:"Midias"},{name:"Groups" }]
    return(
        <VStack space="sm" flex={1} bgColor="white">
            <ScrollView  showsVerticalScrollIndicator={false}>
            <TopHeaderProfile/>
            <AvatarProfile/>
            <MenuTypeBox optionsMenu={optionsMenu} selectContent={selectContent} setSelectContent={setSelectContent}/>
            <ContentProfile optionsMenu={optionsMenu} selectContent={selectContent} setSelectContent={setSelectContent}/>
            </ScrollView>
        </VStack>
    )
}