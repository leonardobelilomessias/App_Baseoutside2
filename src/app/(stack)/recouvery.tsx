import { WrapperScreens } from "@/Componets/WrapperScreens";
import { extendedConfig } from "@/theme/config";
import { SingUp } from "@/screens/AccessScreens/SingUp";
import { Singin } from "@/screens/AccessScreens/Singin";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView,  StyleSheet} from "react-native";
import { RecouveryScreen } from "@/screens/AccessScreens/RecouveryScreen";

export default function Singins() {
  return (

    <RecouveryScreen/>
  );
}

