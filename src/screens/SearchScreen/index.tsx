import { TopSearchInput } from "@/Componets/itensSearch/TopSearchInput";
import {  Box, Center, Icon, Image, Input, InputField, InputIcon, SearchIcon, Text, VStack } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import { SelectSearch } from "@/Componets/itensSearch/SelectSearch";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";
import { SearchCardUser } from "@/Componets/itensSearch/SearchCard";
import { ContentSearch } from "@/Componets/itensSearch/ContentSearch";
import Empty from '@/assets/searchInit1.png'
import { Stack } from "expo-router";
import { MissionContentSearch } from "@/Componets/itensSearch/MissonContentSearch";
import { ActionContentSearch } from "@/Componets/itensSearch/ActionContentSearch";
import { TaksContentSearch } from "@/Componets/itensSearch/TaskContentSearch";


export function SearchScreen(){

    const [itemSelected,setItemSelected]= useState('Agents')
    const [textSearch,setTextSeatch] = useState('')
    const [resultApi,setResultApi] =useState([] as FullAgentDTO[])
    useEffect(()=>{

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
    <VStack space="md"   p={8}   flex={1} bg="white" >
        <VStack  flex={1} space="xs" >
        <TopSearchInput textSearch={textSearch} setTextSeatch={setTextSeatch}/>
{       <SelectSearch itemSelected={itemSelected} setItemSelected={setItemSelected}/>}

        {
            (resultApi.length>0 &&itemSelected=='Agents')&&
        <ContentSearch  content={resultApi} selecCardRender={itemSelected}/>
        }
       {
        (resultApi.length>0 &&itemSelected=='Missions')&&
        <MissionContentSearch content={resultApi} selecCardRender=""/>
        }
               {
        (resultApi.length>0 &&itemSelected=='Actions')&&
        <ActionContentSearch content={resultApi} selecCardRender=""/>
        }
         {
        (resultApi.length>0 &&itemSelected=='Tasks')&&
        <TaksContentSearch content={resultApi} selecCardRender=""/>
        }
        {!textSearch&&
        <Box alignItems="center" flex={1} backgroundColor="$white" p={16} borderRadius={16}>
            <Image  width={100} mt={'$24'} height={110} source={Empty}></Image>
            <Text size="sm" m={8} mt={18} textAlign="center" color={'$green400'}>
                Digite no campo de busca para encontrarmos algo 
                relacionado a sua pesquisa </Text>
        </Box>
        }
        
        </VStack>

    </VStack>
    )
}

