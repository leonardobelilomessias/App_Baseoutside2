import { TopSearchInput } from "@/Componets/itensSearch/TopSearchInput";
import {  Box, Icon, Input, InputField, InputIcon, SearchIcon, Text, VStack } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import { SelectSearch } from "@/Componets/itensSearch/SelectSearch";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";
import { SearchCardUser } from "@/Componets/itensSearch/SearchCard";
import { ContentSearch } from "@/Componets/itensSearch/ContentSearch";
import Empty from '@/assets/searchInit1.svg'


export function SearchScreen(){
    const [itemSelected,setItemSelected]= useState('Agents')
    const [textSearch,setTextSeatch] = useState('')
    const [resultApi,setResultApi] =useState([] as FullAgentDTO[])
    useEffect(()=>{
        console.log('aqui')
        async function fetchData(){
            
            if(textSearch){
                const result = await AxiosApi.get('/agent/searchAgentsByName',{params:{name:textSearch}})
                console.log('resultado',result.data)
                setResultApi(result.data)
            }
            if(!textSearch){
                setResultApi([])
            }
        }
        fetchData()
    },[textSearch])
    const numbers = [1,2,5,4,8,9,6,6,6,6,8,7,7,8,9,10]
    return(
    <VStack space="md"   p={8}   flex={1} >
        <Box>
        <TopSearchInput textSearch={textSearch} setTextSeatch={setTextSeatch}/>
        <SelectSearch itemSelected={itemSelected} setItemSelected={setItemSelected}/>
        <Text>{textSearch}</Text>
        <ContentSearch  content={resultApi} selecCardRender={itemSelected}/>
        </Box>
   
    </VStack>
    )
}

