import { VStack } from "@gluestack-ui/themed";
import { TopHeaderProfile } from "../../Componets/Profile/TopHeaderProfile";
import { AvatarProfile } from "../../Componets/Profile/AvatarProfile";
import { ContentProfile } from "./ContentProfile";
import { MenuTypeBox } from "@/Componets/Menus/MenuTypeBox";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export function ProfileScreen(){
    const [selectContent,setSelectContent] = useState('Geral')
    const optionsMenu = [{name:"Geral"},{name:"Midias"},{name:"Groups" }]
    return(
        <VStack space="sm" flex={1} bgColor="white">
            <ScrollView>
            <TopHeaderProfile/>
            <AvatarProfile/>
            <MenuTypeBox optionsMenu={optionsMenu} selectContent={selectContent} setSelectContent={setSelectContent}/>
            <ContentProfile optionsMenu={optionsMenu} selectContent={selectContent} setSelectContent={setSelectContent}/>
            </ScrollView>
        </VStack>
    )
}