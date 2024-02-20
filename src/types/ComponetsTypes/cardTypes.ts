
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
    date:Date
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
type TaskCartProps = {
    id:string
    title:string
    userName:string
    requiredSkills:string[]
    area:string
    date:Date
    wage:string
    deadlineTime:string
}
type FooterTaskCartProps={
    date:Date
    wage:string
    deadlineTime:string
}
type AdviceCardProps= {
    id:string
    title:string
    text:string
    date:Date
    creator:string
    priority:"low" | "medium"| "high"
}
export{CardActionProps,DepoimentCardProps,DailyPostCardProps, MissionCardProps,TaskCartProps,FooterTaskCartProps,AdviceCardProps}