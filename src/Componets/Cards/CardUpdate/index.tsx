import { linkNotFoundImageCoverMidia } from "@/utils/aplicationRouterLinks"
import { formatHourAndMinutes } from "@/utils/functions/functionTimes"
import { HStack, Text, VStack } from "@gluestack-ui/themed"
import React from "react"
import { AvatarCardUpdate } from "./AvatarCardUpdate"
import { DescriptionCardUpdate } from "./DescriptionCardUpdate"

type UpdateType = {
    id: string
    type: "comment" | "response_comment" | "liked" | "new_depoiment"| "new_sponsor" | "new_colab"
    target: "photo" | "daily_post" | "comment" | "depoiment" |"colab" |"sponsor"
    created_at: Date
    dispatch_from_id: string
    dispatch_to_id: string
    dispatch_from_name: string
    dispatch_to_name: string
    image: string | null,
    text_body: string | null
}
export function CardUpdate({ created_at, dispatch_from_id, dispatch_to_id, id, image, target, text_body, type, dispatch_from_name, dispatch_to_name }: UpdateType) {
    const imageCard = !image ? image : linkNotFoundImageCoverMidia
    return (
        <HStack space="md" alignItems="center" marginVertical={8}>
            <AvatarCardUpdate target={target} type={type}/>
            <VStack flex={1}>
                <DescriptionCardUpdate name={dispatch_from_name} target={target} text_body={text_body} type={type} />
                <Text size="xs" color="$gray400" fontWeight="$medium">{formatHourAndMinutes(created_at)}</Text>
            </VStack>
        </HStack>

    )
}