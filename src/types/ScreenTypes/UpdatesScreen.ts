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
export {UpdateType}