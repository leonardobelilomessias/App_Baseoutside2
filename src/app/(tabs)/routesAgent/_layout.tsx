import { Stack, useLocalSearchParams } from "expo-router";

export default function LayoutScreens(){
    return(
        <Stack screenOptions={{headerShown:true }}>
            <Stack.Screen name="profile" options={{headerShown:false,title:"perfiles"}}/>
            <Stack.Screen name="sponsorAgent" options={{title:'Patriocinar',}}/>
            <Stack.Screen name="transactionCredCardAgent" options={{title:'Transação',}}/>
            <Stack.Screen name="successSponsorAgent" options={{title:'Sucesso',}}/>
            <Stack.Screen name="actionsAgent" options={{title:'Ações',}}/>
            <Stack.Screen name="chatAgent" options={{title:'chat',}}/>
            <Stack.Screen name="editProfile" options={{title:'Editar Perfil',}}/>
            <Stack.Screen name="listchatsAgent" options={{title:'Conversas',}}/>
            <Stack.Screen name="photoPublication" options={{title:'Publicação',}}/>
            <Stack.Screen name="dailyPublication" options={{title:'Daily',}}/>
            <Stack.Screen name="missionsAgent" options={{title:'Missões',}}/>
            <Stack.Screen name="colabsAgent" options={{title:'Collabs',}}/>
            <Stack.Screen name="tasksAgent" options={{title:'Tasks',}}/>
            <Stack.Screen name="agentProfile" options={{title:"",}}/>
        </Stack>
    )
}
