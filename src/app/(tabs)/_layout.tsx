import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { extendedConfig } from '@/theme/config';



export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'home',
  };

export default function LayoutTabs(){
    const colorSelected = extendedConfig.tokens.colors.green400
    return(
        <WrapperScreens>
            <Tabs screenOptions={{tabBarShowLabel:false,tabBarHideOnKeyboard:true } } initialRouteName='home'>
                <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon:({color,focused})=>
                    <Entypo 
                    name="home" 
                    size={24} 
                    color={focused? colorSelected :"black"} />,
                    headerRight:()=><Feather name="send" style={{marginHorizontal:18}} size={24} color="black" />,
                    title:'Home'
                }}
                />
            <Tabs.Screen
                name="search"
                options={{
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
                    <Pressable  onPress={()=>{console.log('oi')}}>

                    <Feather 
                    name="share" 
                    size={24} 
                    color={focused? colorSelected :"black"}/>
                    </Pressable>,
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
                    title:"Perfil"
                }}
            />

            </Tabs>
        </WrapperScreens>
    )
}