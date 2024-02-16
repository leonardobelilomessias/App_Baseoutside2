
type CardActionProps = {
    title:string
    description:string
    participants: number
    tasks: number
    image?: string | undefined 
    vacancies:number
    status?:"in_progress"| "comming" | "finished"
}

type DepoimentCardProps ={
    id:string
    userName:string
    imageCover:string | null | undefined
    text:string
}


type DailyPostCardProps={
    id:string
    userName:string
    userAvatar:string
    title:string
    text:string
    date:{
        day:number, 
        month:string
    }
    amountComents:number
    isLike:boolean
    isSaved:boolean
}
type MissionCardProps={
    id:string
    name:string
    field:string
    image:string
    local:string
    numberActions:number | string
    numberColabs:number | string
    numberTasks : number | string
}
export{CardActionProps,DepoimentCardProps,DailyPostCardProps, MissionCardProps}