
type ActionCardProps = {
    id:string
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
    image_profile:string | null | undefined
    text:string
    created_by:string
    created_to:string
}


type DailyPostCardProps={
    id:string
    userName:string
    userAvatar:string |null
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
type PhotoPublicationCardProps={
    name: string,
    id_colab: string
    image_profile:string
    description: string
    publication_id: string
    url: string
    type:string
    is_liked:boolean
    is_saved:boolean
    amount_comments:number
}
type CardUserPressableSimpleProps={
    name:string
    link:string
    label:string
    id:string
    image:string |null
}
export{ActionCardProps,DepoimentCardProps,DailyPostCardProps, MissionCardProps,TaskCartProps,FooterTaskCartProps,AdviceCardProps,PhotoPublicationCardProps,CardUserPressableSimpleProps}