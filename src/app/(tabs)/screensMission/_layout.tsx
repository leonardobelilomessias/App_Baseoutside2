import { Stack } from "expo-router";

export default function LayoutMissionScreens(){
    return(
        <Stack >
            <Stack.Screen name="profileMission" options={{title:'Perfil'}}/>
            <Stack.Screen name="areasMission" options={{title:'Areas'}}/>
            <Stack.Screen name="actionsMission" options={{title:'Ações'}}/>
            <Stack.Screen name="tasksMission" options={{title:'Tarefas'}}/>


        </Stack>
    )
}