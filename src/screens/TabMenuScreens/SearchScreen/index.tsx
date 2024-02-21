import { TopSearchInput } from "@/Componets/itensSearch/TopSearchInput";
import { VStack } from "@gluestack-ui/themed";
import { SelectSearch } from "@/Componets/itensSearch/SelectSearch";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import {  ListAgentSearch } from "@/Componets/itensSearch/ContentSearch";
import { ListMissionSearch } from "@/Componets/itensSearch/MissonContentSearch";
import { ActionContentSearch } from "@/Componets/itensSearch/ActionContentSearch";
import { ListTaksSearch } from "@/Componets/itensSearch/TaskContentSearch";
import { InitialSearch } from "@/Componets/itensSearch/InitialSearch";
import { CardUserPressableSimpleProps } from "@/types/ComponetsTypes/cardTypes";
import { listMissionMock } from "@/mocks/missions/missionMock";
import { actionsMock } from "@/mocks/actions/actionsAgentMocks";
import { tasksAgentMock } from "@/mocks/tasksMocks";


export function SearchScreen(){

    const [itemSelected,setItemSelected]= useState('Agents')
    const [textSearch,setTextSeatch] = useState('')
    const [resultApi,setResultApi] =useState([] as CardUserPressableSimpleProps[])
    const listMission = listMissionMock
    const listAction = actionsMock
    const listTasks = tasksAgentMock
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
    return(
    <VStack space="md"   p={8}   flex={1} bg="white" >
        <VStack  flex={1} space="xs" >
            <TopSearchInput textSearch={textSearch} setTextSeatch={setTextSeatch}/>
    {       <SelectSearch itemSelected={itemSelected} setItemSelected={setItemSelected}/>}

            {
                (resultApi.length>0 &&itemSelected=='Agents')&&
            <ListAgentSearch  content={resultApi}/>
            }
        {
            (resultApi.length>0 &&itemSelected=='Missions')&&
            <ListMissionSearch content={listMission} />
            }
                {
            (resultApi.length>0 &&itemSelected=='Actions')&&
            <ActionContentSearch content={listAction} />
            }
            {
            (resultApi.length>0 &&itemSelected=='Tasks')&&
            <ListTaksSearch content={listTasks} />
            }
            {!textSearch&&
            <InitialSearch/>
            }
        </VStack>

    </VStack>
    )
}

