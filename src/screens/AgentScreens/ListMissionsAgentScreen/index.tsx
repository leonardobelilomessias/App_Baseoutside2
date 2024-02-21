
import { VStack} from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { MissionCard } from "@/Componets/Cards/MissionCard";
import { listMissionMock } from "@/mocks/missions/missionMock";
import { ListMissions } from "@/Componets/ListMissions";

export function ListMissionsAgentScreen(){
    return(<ListMissions/>)
}
