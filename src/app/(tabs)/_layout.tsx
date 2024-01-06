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
    function verify(){
        console.log('verifing')
    }
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
                    headerRight:()=>
                    <>
                    <HStack style={{marginHorizontal:18}} space='sm'>
                    <Pressable  onPress={()=>{ handleLogout()}}>
                    <Feather name="heart" style={{marginHorizontal:8}} size={24} color="black" />
                    </Pressable>
                    <Pressable   onPress={()=>{ router.push('/(tabs)/screensProfile/chatsAgent')}}>
                    <Feather name="send" style={{marginHorizontal:8}} size={24} color="black" />
                    </Pressable>
                    <Pressable  onPress={()=>{ handleLogout()}}>
                    <Feather name="settings" style={{marginHorizontal:8}} size={24} color="black" />
                    </Pressable>
                    </HStack>
                    
                    </>
                    ,
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
                    tabBarIcon:()=>null,
                    tabBarButton:()=>null
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
                name="screensProfile" 
                options={{
                    tabBarIcon:({focused,color})=>
                    <Pressable   width={'$full'} justifyContent='center' alignItems='center' height={'$full'} onPress={()=> router.push('/(tabs)/screensProfile/profile')}>
                    <FontAwesome 
                    name="user-circle-o" 
                    size={24} 
                    color={focused? colorSelected :"black"} />
                    </Pressable>
                    ,
                    title:"Perfil",
                    headerShown:true,
                    header:()=>null,
                    headerStatusBarHeight:0,
                    headerStyle:false,
                }}
                
            />
            <Tabs.Screen
                name="screensMission"  
                options={{
                    headerShown:true,
                    headerStatusBarHeight:0,
                    headerStyle:false,
                    headerTitle:()=>null,
                    header:()=>null,
                    tabBarButton:()=>null
                }}
                
            />
            
            </Tabs>
            


    )
}

