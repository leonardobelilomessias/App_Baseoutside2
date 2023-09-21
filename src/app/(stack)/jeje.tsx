import { WrapperScreens } from "@/Componets/WrapperScreens";
import { extendedConfig } from "@/theme/config";
import { Profile } from "@/screens/Profile";
import { SingUp } from "@/screens/SingUp";
import { Singin } from "@/screens/Singin";
import { GluestackUIProvider, VStack } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView,  StyleSheet} from "react-native";

export default function Singins() {
  return (

    <WrapperScreens>
      <Singin/>
    </WrapperScreens>
  );
}

