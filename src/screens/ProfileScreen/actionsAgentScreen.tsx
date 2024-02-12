import { VStack } from "@gluestack-ui/themed"
import { useState } from "react"
import { MenuTypeUnderline } from "@/Componets/Menus/MenuTypeUnderline"
import { actionsMock } from "@/mocks/actions/actionsAgentMocks"
import { ActionCardsContainer } from "@/Componets/Cards/ActionCardsContainer"

export default function ActionsAgentScreen(){
    const [menuSelected,setSelectedMenu] = useState('Em andamento')
    const optionsMenu = ["Em andamento","Concluidas", "Proximas" ]
    return(

        <VStack bg="$white" flex={1}>
            <MenuTypeUnderline itemSelected={menuSelected} itensMenu={optionsMenu} setItenSelected={setSelectedMenu}  />
            <ActionCardsContainer menuSelected={menuSelected} ArrayToRender={actionsMock}/>
        </VStack>
    )
}
