import app from "./app.js"
import { connectDB } from "./db.js"

connectDB()
app.listen(8000)
console.log("Servidor prendido en puerto:", 8000)