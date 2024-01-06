import { Stack, useLocalSearchParams } from "expo-router";

export default function LayoutScreens(){
    const params = useLocalSearchParams();
    return(
        <Stack screenOptions={{
            headerShown:true
        }}>
            <Stack.Screen name="profile" options={{headerShown:false,}}/>
            <Stack.Screen name="agentProfile" options={{headerShown:false,}}/>
            <Stack.Screen name="sponsorAgent" options={{title:'Patriocinar',}}/>
            <Stack.Screen name="transactionCredCardAgent" options={{title:'Transação',}}/>
            <Stack.Screen name="successSponsorAgent" options={{title:'Sucesso',}}/>
            <Stack.Screen name="actionsAgent" options={{title:'Ações',}}/>
            <Stack.Screen name="chatProfile" options={{title:'chat',}}/>
            <Stack.Screen name="editProfile" options={{title:'Editar Perfil',}}/>
            <Stack.Screen name="chatsAgent" options={{title:'Conversas',}}/>




            
        </Stack>
    )
}
