import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { extendedConfig } from '@/theme/config';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, ButtonText, HStack, Pressable, Text } from '@gluestack-ui/themed';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonShare } from '@/Componets/ButtonShare';



export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'home',
  };



const colorSelected = extendedConfig.tokens.colors.green400
export default function Root(){
    const {setTest,setTokenAgent,handleLogout} = useDataAgent()
    return(


     
            <Tabs screenOptions={{
                tabBarShowLabel:false,
                tabBarHideOnKeyboard:true,
                headerStatusBarHeight:-1
                } } >
                <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon:({color,focused})=>
                    <Entypo 
                    name="home" 
                    size={24} 
                    color={focused? colorSelected :"black"} />,
                    headerRight:()=><Pressable  onPress={()=>{ handleLogout()}}><Feather name="power" style={{marginHorizontal:18}} size={24} color="black" /></Pressable>,
                    title:'BaseOutside',
                }}
                />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown:false
                    ,
                    tabBarIcon:({color,focused})=>
                    <AntDesign 
                    name="search1" 
                    size={24} 
                    color={focused? colorSelected :"black"} />,
                    title:'Buscar'}}
                    />

            <Tabs.Screen 
                name="share"
                options={{
                    tabBarIcon:({color,focused})=>
                    <ButtonShare focused={focused}/>,
                    title:'Compartilhar'
                }}
                />
            <Tabs.Screen
                name="control"
                options={{
                    tabBarIcon:({focused,color})=>
                    <Ionicons 
                    name="game-controller-outline" 
                    size={24} 
                    color={focused? colorSelected :"black"}/>,
                    title:'Painel de controle'
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon:({focused,color})=>
                    <FontAwesome 
                    name="user-circle-o" 
                    size={24} 
                    color={focused? colorSelected :"black"} />,
                    title:"Perfil",
                    headerShown:false
                }}
            />
            <Tabs.Screen
                name="otherProfile" 
                options={{
                    title:"Profile", 
                    tabBarButton:()=>null
                }}
                
            />
                        <Tabs.Screen
                name="dailyPublication" 
                options={{
                    title:"Daily", 
                    tabBarButton:()=>null
                }}
                
            />
 
            <Tabs.Screen
                name="screens" 
                options={{
                    headerShown:false, 
                    tabBarButton:()=>null
                }}
                
            />
                     <Tabs.Screen
                name="screensMission"  
                options={{
                    headerShown:false, 
                    tabBarButton:()=>null
                }}
                
            />
            
            </Tabs>
            


    )
}

