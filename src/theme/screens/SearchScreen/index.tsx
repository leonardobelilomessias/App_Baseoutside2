import { TopSearchInput } from "@/Componets/itensSearch/TopSearchInput";
import {  Icon, Input, InputField, InputIcon, SearchIcon, Text, VStack } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import { SelectSearch } from "@/Componets/itensSearch/SelectSearch";
import { ContentSearch } from "@/Componets/itensSearch/ContentSearch";
import { useState } from "react";


export function SearchScreen(){
    const [itemSelected,setItemSelected]= useState('Agents')
    return(
    <VStack space="md" >
        <TopSearchInput/>
        <SelectSearch itemSelected={itemSelected} setItemSelected={setItemSelected}/>
        <ContentSearch selecCardRender={itemSelected}/>
    </VStack>
    )
}