import { useState } from "react";
import { MediaContainer } from "@/Componets/MediaContainer";
import { MenuTypeBox } from "@/Componets/Menus/MenuTypeBox";
import { ExclusiveArea } from "./ExclusiveArea";
import { InfoProfileAgent } from "./InfoProfileAgent";


export function ContentProfile(){
    const [selectContent,setSelectContent] = useState('Geral')
    const optionsMenu = ["Geral","Midias", "Groups" ]

    return(
        <>

            <MenuTypeBox itensMenu={optionsMenu} selectContent={selectContent} setSelectContent={setSelectContent}/>
        {
            selectContent==='Geral'&&<InfoProfileAgent/>        
        }
        {
            selectContent==='Groups'&&<ExclusiveArea/>
        }
        {
            selectContent==='Midias'&&<MediaContainer/>
        }
        </>
    )
}