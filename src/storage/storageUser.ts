import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_STORAGE} from './storageConfig'
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";

export async function storageUserSave(user:FullAgentDTO) {
    await AsyncStorage.setItem(USER_STORAGE,JSON.stringify(user))
}

export async function storageUserGet() {
    const storage = await AsyncStorage.getItem(USER_STORAGE)
    const user:FullAgentDTO = storage?JSON.parse(storage):{}
    return user;

}

export async function storageRemoveUser() {
    await AsyncStorage.removeItem(USER_STORAGE)
}