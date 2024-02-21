import { AxiosApi } from "@/api"
import { Menu, MenuItem, MenuItemLabel } from "@gluestack-ui/themed"
import { router } from "expo-router"
import React from "react"
import { Pressable } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function OptionsPhoto({publicationId}:{publicationId:string}){
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
                    <Menu placement="top"
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
                        <MenuItem key="Theme" textValue="Theme" onPress={()=>{deletePublication(publicationId)}}>
                            <FontAwesome name="trash-o" size={18} color="red" />
                            <MenuItemLabel size="sm"> Excluir</MenuItemLabel>
                        </MenuItem>

                        </Menu>
    )
}

