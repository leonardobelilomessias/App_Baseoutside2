import { Avatar, AvatarImage, Box, Button, ButtonText, GlobeIcon, HStack, Icon, Image, Menu, MenuItem, MenuItemLabel, Text, VStack } from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import openImage from '@/assets/develop.jpg'
import { Axios } from "axios";
import { AxiosApi } from "@/api";
import { useEffect, useState } from "react";
import { baseURL } from "@/utils/params";
import { useDataAgent } from "@/context/UserContext";
import {Dimensions, Pressable} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { FontAwesome } from '@expo/vector-icons';
type IPublication={
    publication:{
        id:string
        description:string
    }
    photos:{
        url:string
    }[]
}
export default function photoPublication(){
    const {dataAgent}  = useDataAgent()
    const [resultPublication,setResultPublication] = useState({} as IPublication)
    const {publication_id,description,urlPhoto} = useLocalSearchParams();
    const windowWidth = Dimensions.get('window').width;
    console.log(description)
    
    useEffect(()=>{
        fetchPublication()
    },[])
    async function fetchPublication(){
        const publication = await AxiosApi.get('/agent/fetchPublicationAgentById',{params:{publication_id:publication_id}})
        const data = publication.data as IPublication
        setResultPublication(publication.data)

    }
    async function deletePublication(id:string) {
        try{
            console.log(id)
            await AxiosApi.delete('/agent/deletePublication',{params:{id_publication:id}})
            router.back()
        }catch(e){
            console.log(e)
        }
    }
    return(
        <VStack flex={1} bg="$white">
            <HStack space="md" alignContent="center" justifyContent="space-between" alignItems="center"  p={8} mt={16}>
                <HStack alignContent="center" alignItems="center">
                <Avatar size="sm">
                    <AvatarImage source={{uri:`${baseURL}/Agent/${dataAgent.image_profile}`}}/>
                </Avatar>
                <Text bold> {dataAgent.name}</Text>
                </HStack>
                

                <Menu
                        placement="top"
                        trigger={({ ...triggerProps }) => {
                            return (
                            <Pressable {...triggerProps}>
                                <SimpleLineIcons name="options-vertical" size={16}/>
                            </Pressable>
                            )
                        }}
                        >
                        <MenuItem key="Plugins" textValue="Plugins">
                            <FontAwesome name="edit" size={18} color="black" />
                            <MenuItemLabel size="sm"> Editar</MenuItemLabel>
                        </MenuItem>
                        <MenuItem  key="Community" textValue="Community" >
                            <FontAwesome name="share-square-o" size={18} color="black" />
                            <MenuItemLabel size="sm"> Compartilhar</MenuItemLabel>
                        </MenuItem>
                        <MenuItem key="Theme" textValue="Theme" onPress={()=>{deletePublication(resultPublication.publication.id)}}>
                            <FontAwesome name="trash-o" size={18} color="red" />
                            <MenuItemLabel size="sm"> Excluir</MenuItemLabel>
                        </MenuItem>

                        </Menu>
    
            </HStack>
            {
                (!!urlPhoto)&&
                <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/PhotosPublications/${urlPhoto}`}} resizeMode="cover" size="full"/>
                
                </Box>
            }
            {
                (!urlPhoto)&&
             <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/NotFound/not_found_image.jpg`}} resizeMode="cover" size="full"/>
            </Box>
            }
            <VStack p={4}>
            <Text bold>{dataAgent.name}</Text>
            <Text>{description}</Text>
            </VStack>
            <BottonItemFeed/>


        </VStack>
    )
}

function ItenMenu(){
    return(
        <>

  <MenuItem key="Community" textValue="Community">
    <MenuItemLabel size="sm">Community</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Plugins" textValue="Plugins">
    {/* PuzzleIcon is imported from 'lucide-react-native' */}
    <MenuItemLabel size="sm">Plugins</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Theme" textValue="Theme">
    {/* PaintBucket is imported from 'lucide-react-native' */}
    <MenuItemLabel size="sm">Theme</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Settings" textValue="Settings">
    <MenuItemLabel size="sm">Settings</MenuItemLabel>
  </MenuItem>
  <MenuItem key="Add account" textValue="Add account">
    <MenuItemLabel size="sm">Add account</MenuItemLabel>
  </MenuItem>
</>
    )
}