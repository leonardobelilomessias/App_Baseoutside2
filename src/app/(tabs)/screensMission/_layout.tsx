import { Stack } from "expo-router";

export default function LayoutMissionScreens(){
    return(
        <Stack>
            <Stack.Screen name="profileMission" options={{title:'Perfil'}}/>
        </Stack>
    )
}