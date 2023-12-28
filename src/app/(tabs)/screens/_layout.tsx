import { Stack } from "expo-router";

export default function LayoutScreens(){
    return(
        <Stack screenOptions={{
            
        }}>
            <Stack.Screen name="sponsorAgent" options={{title:'Patriocinar',}}/>
            <Stack.Screen name="transactionCredCardAgent" options={{title:'Transação',}}/>
            <Stack.Screen name="successSponsorAgent" options={{title:'Sucesso',}}/>
            <Stack.Screen name="agentProfile" options={{headerShown:true,}}/>

            
        </Stack>
    )
}
