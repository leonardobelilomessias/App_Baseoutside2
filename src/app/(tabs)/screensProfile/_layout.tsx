import { Stack, useLocalSearchParams } from "expo-router";

export default function LayoutScreens(){
    const params = useLocalSearchParams();
    return(
        <Stack screenOptions={{
            headerShown:true
        }}>
            <Stack.Screen name="profile" options={{headerShown:false,title:"perfiles"}}/>
            <Stack.Screen name="agentProfile" options={{headerShown:false,}}/>
            <Stack.Screen name="sponsorAgent" options={{title:'Patriocinar',}}/>
            <Stack.Screen name="transactionCredCardAgent" options={{title:'Transação',}}/>
            <Stack.Screen name="successSponsorAgent" options={{title:'Sucesso',}}/>
            <Stack.Screen name="actionsAgent" options={{title:'Ações',}}/>
            <Stack.Screen name="chatProfile" options={{title:'chat',}}/>
            <Stack.Screen name="editProfile" options={{title:'Editar Perfil',}}/>
            <Stack.Screen name="chatsAgent" options={{title:'Conversas',}}/>
            <Stack.Screen name="photoPublication" options={{title:'Publicação',}}/>
            <Stack.Screen name="dailyPublication" options={{title:'Daily',}}/>
            <Stack.Screen name="missionsAgent" options={{title:'Missões',}}/>
            <Stack.Screen name="profileAgent" options={{title:'Perfil',}}/>
            <Stack.Screen name="colabsAgent" options={{title:'Collabs',}}/>
            <Stack.Screen name="tasksAgent" options={{title:'Tasks',}}/>










            
        </Stack>
    )
}
