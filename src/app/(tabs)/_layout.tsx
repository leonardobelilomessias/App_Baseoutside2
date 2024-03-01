import { Redirect, Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { extendedConfig } from '@/theme/config';
import { Pressable, Text } from '@gluestack-ui/themed';
import React from 'react';
import { ButtonShare } from '@/Componets/ButtonShare';
import { ButtonsHeaderHome } from '@/Componets/ButtonsHeaderHome';
import { useDataAgent } from '@/context/UserContext';
import { View } from 'react-native';

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: '(tabs)',
  };

const colorSelected = extendedConfig.tokens.colors.green400

export default function Root(){
const {dataAgent,tokenAgent, loading} = useDataAgent()

    
if(loading)return(
    <View>
      <Text>Loading</Text>
    </View>
  )
  if(!tokenAgent){
    return(
      <Redirect href={'/sign-in'}/>
    )
  }
    return(
            <Tabs screenOptions={{tabBarShowLabel:false, tabBarHideOnKeyboard:true, headerStatusBarHeight:-1}}>
                    <Tabs.Screen
                    name="index"
                    options={{
                        tabBarIcon:({color,focused})=><Entypo name="home" size={24} color={focused? colorSelected :"black"} />,
                        headerRight:()=>(<ButtonsHeaderHome/>),
                        title:'BaseOutside',}} />
                    <Tabs.Screen
                        name="search"
                        options={{
                            headerShown:false, tabBarIcon:({color,focused})=><AntDesign name="search1" size={24} color={focused? colorSelected :"black"} />,
                            title:'Buscar'}}
                    />

                    <Tabs.Screen name="share" options={{
                        tabBarIcon:({color,focused})=>
                        <ButtonShare focused={focused}/>,
                        title:'Compartilhar'}}
                    />
                    <Tabs.Screen name="control"
                        options={{
                            tabBarIcon:({focused,color})=><Ionicons name="game-controller-outline" size={24} color={focused? colorSelected :"black"}/>,
                            title:'Painel de controle'
                        }}
                    />

                    <Tabs.Screen name="profile" options={{ tabBarIcon:()=>null, tabBarButton:()=>null }} />
        
                    <Tabs.Screen name="routesAgent" 
                        options={{
                            tabBarIcon:({focused,color})=>
                            <Pressable   width={'$full'} justifyContent='center' alignItems='center' height={'$full'} onPress={()=> router.push('/(tabs)/routesAgent/profile')}>
                                <FontAwesome name="user-circle-o" size={24} color={focused? colorSelected :"black"} />
                            </Pressable>,
                            title:"Perfil",
                            headerShown:true,
                            header:()=>null,
                            headerStatusBarHeight:0,
                            headerStyle:false,
                        }}
                        
                    />
                    <Tabs.Screen name="routesMission" options={{ headerShown:true, headerStatusBarHeight:0, headerStyle:false, headerTitle:()=>null,header:()=>null,tabBarButton:()=>null }}/>            
            </Tabs>
    )
}

