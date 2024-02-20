import { TaskCartProps } from "@/types/ComponetsTypes/cardTypes";
import { ListTasksProps } from "@/types/ComponetsTypes/containersTypes";
import { FlatList } from "react-native-gesture-handler";
import { TaskCard } from "../Cards/TaskCard";
import { VStack } from "@gluestack-ui/themed";

export function TasksList({listTasks}:ListTasksProps){
    return(
        <>
        <VStack paddingHorizontal={8}>
            {
                listTasks.map((item)=>(
                <TaskCard key={item.id} id={item.id} area={item.area} date={item.date} deadlineTime={item.deadlineTime} requiredSkills={item.requiredSkills} title={item.title} userName={item.userName} wage={item.wage}  />   
                ))
            }
        </VStack>
        </>
    )

}