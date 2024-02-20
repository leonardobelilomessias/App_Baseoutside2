import { VStack } from "@gluestack-ui/themed"
import React from "react"
import { FlatList } from "react-native"
import { TaskCard } from "@/Componets/Cards/TaskCard";
import { taskAgentMock, tasksAgentMock } from "@/mocks/tasksMocks";

export function TaskAgentScreen(){
    const tasks = tasksAgentMock
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >
        <FlatList
            
            scrollEnabled={true}
            data={tasks}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item.id
            }
            renderItem={({item})=>(
                <TaskCard id={item.id} key={item.id} area={item.area} date={item.date} deadlineTime={item.deadlineTime} requiredSkills={ item.requiredSkills} title={item.title} wage={item.wage} userName={item.userName}    />
            )}
            />
        </VStack>

    )
}
