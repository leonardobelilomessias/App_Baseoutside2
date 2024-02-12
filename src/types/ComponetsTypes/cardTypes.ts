
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

export{CardActionProps,DepoimentCardProps}