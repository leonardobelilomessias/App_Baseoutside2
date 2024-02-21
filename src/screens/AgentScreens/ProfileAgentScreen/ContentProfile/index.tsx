import { useState } from "react";
import { MediaContainer } from "@/Componets/MediaContainer";
import { MenuTypeBox } from "@/Componets/Menus/MenuTypeBox";
import { ExclusiveArea } from "./ExclusiveArea";
import { InfoProfileAgent } from "./InfoProfileAgent";
import { Groups } from "@/Componets/Groups";

type ContentProfileProps ={
    selectContent:string
    setSelectContent:(selected:string)=>void
    optionsMenu:{
    name:string    
    }[]
}

export function ContentProfile({selectContent,setSelectContent,optionsMenu}:ContentProfileProps){

    return(
        <>

        {
            selectContent===optionsMenu[0].name &&<InfoProfileAgent/>        
        }
        {
            selectContent===optionsMenu[1].name &&<MediaContainer/>
        }
        {
            selectContent===optionsMenu[2].name&&<Groups/>
        }
        </>
    )
}