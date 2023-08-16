import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ messaje: "No estás autorizado"})

        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: " Autorización inválida"})
            req.user= user
            next()
        })
}