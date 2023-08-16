import {z} from "zod"

export const createCommentSchema = z.object({
    publication: z.string({
        required_error: "No podés publicar algo vacío"
    }).max(240, "Máximo 240 caracteres")
})