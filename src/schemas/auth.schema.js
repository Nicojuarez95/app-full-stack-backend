import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({
        required_error:"Te faltó el nombre de usuario"
    })
    .min(4,"El usuario debe tener mínimo 4 caracteres")
    .max(20, "No más de 20 caracteres"),

    email: z.string({
        required_error: "Te faltó el email"
    })
    .email({
        required_error: "Email inválido"
    }),

    password: z.string({
        required_error: "Faltó la contraseña"
    }).min(6, "La contraseña debe tener mínimo 6 caracteres")
})

export const loginSchema = z.object({
    email: z.string({
        required_error:"Faltó el email"
    }).email({
        required_error:"Email no válido"
    }),
    
    password: z.string({
        required_error:"Faltó la contraseña"
    })
    .min(6, "La contraseña debe tener mínimo 6 caracteres")
})