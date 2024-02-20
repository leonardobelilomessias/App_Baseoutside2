import { AdviceCardProps, CardActionProps } from "@/types/ComponetsTypes/cardTypes"

const  Advicemock= {
    id:'01',
    title:'Ultimo dia para inscriçãp',
    text:'Esse final de semana sera o ultimo dia para inscrição inscreva-se logo',
    date:new Date(),
    creator:'john',
    priority:"low" 
}
const  listAdvicesmock :AdviceCardProps[]= [
    {
    id:'01',
    title:'Ultimo dia para inscriçãp',
    text:'Esse final de semana sera o ultimo dia para inscrição inscreva-se logo',
    date:new Date(),
    creator:'john',
    priority:"low" 
},
{
    id:'02',
    title:'Ultimo dia para inscriçãp',
    text:'Esse final de semana sera o ultimo dia para inscrição inscreva-se logo',
    date:new Date(),
    creator:'john',
    priority:"medium" 
},


]

export{Advicemock,listAdvicesmock}