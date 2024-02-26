import { Text } from "@gluestack-ui/themed"
type DescrptionCardUpdateType = { 
    name: string, 
    type: "comment" | "response_comment" | "liked" | "new_depoiment" | "new_sponsor" | "new_colab"
    target: "photo" | "daily_post" | "comment" | "depoiment"|"colab" |"sponsor"
    text_body: string | null 
}

export function DescriptionCardUpdate({ name, target, type, text_body }: DescrptionCardUpdateType) {
    if (target === "photo" && type == "comment") return (<Text size="sm"><Text bold size="sm">{name}</Text> comentou em sua foto: {text_body}</Text>)
    if (target === "photo" && type == "liked") return (<Text size="sm"><Text bold size="sm">{name}</Text> curtiu sua foto</Text>)
    if (target === "depoiment" && type == "liked") return (<Text size="sm"><Text bold size="sm">{name}</Text> curtiu seu depoimento</Text>)
    if (target === "daily_post" && type == "comment") return (<Text size="sm"><Text bold size="sm">{name}</Text> comentou seu daily post: {text_body}</Text>)
    if (target === "daily_post" && type == "liked") return (<Text size="sm"><Text bold size="sm">{name}</Text> curtiu daily post</Text>)
    if (target === "depoiment" && type == "new_depoiment") return (<Text size="sm"><Text bold size="sm">{name}</Text> Fez um novo depoimento em seu perfil. Clique para ver</Text>)
    if (target === "sponsor" && type == "new_sponsor") return (<Text size="sm"><Text bold size="sm">{name}</Text> se tornou um novo patriocinador</Text>)
    if (target === "colab" && type == "new_colab") return (<Text size="sm"><Text bold size="sm">{name}</Text> se tornou um novo colaborador</Text>)
    if (target === "comment" && type == "response_comment") return (<Text size="sm"><Text bold size="sm">{name}</Text> respondeu seu comentario:</Text>)
}
