
import { VStack} from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { MissionCard } from "@/Componets/Cards/MissionCard";
import { listMissionMock } from "@/mocks/missions/missionMock";

export function ListMissions(){
    return(
        <VStack flex={1} bg="white" paddingHorizontal={16} borderRadius={16}  >
            <FlatList contentContainerStyle={{paddingVertical:18}} scrollEnabled={true} showsVerticalScrollIndicator={false} 
                data={listMissionMock} 
                keyExtractor={(mission)=>mission.id}
                renderItem={({item})=>(
                <MissionCard name={item.name} id={item.id} field={item.field} 
                image={item.image}local={item.local} numberActions={item.numberActions} numberColabs={item.numberColabs} numberTasks={item.numberColabs}   />)}
                />
        </VStack>
    )
}
