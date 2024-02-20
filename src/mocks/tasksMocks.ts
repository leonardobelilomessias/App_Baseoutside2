import { TaskCartProps } from "@/types/ComponetsTypes/cardTypes"

const taskAgentMock = {
        id:"01",
        title:'Criação arte para ação',
        userName:'baseoutside',
        requiredSkills:['Desing', 'moda'],
        area:'Midias Sociais',
        date: new Date(),
        wage:'5',
        deadlineTime:'6',
    }

const tasksAgentMock = [] as TaskCartProps[]

    
for (var i=0;i<10 ;i++){
 const newtask =  Object.create(taskAgentMock)
 newtask.id = i
    tasksAgentMock.push(newtask)

}


export {taskAgentMock,tasksAgentMock}