import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno desde .env

export const connectDB = async () => {
    try {
        const dbUrl = process.env.DB_URL; // Obtener la URL de la base de datos desde las variables de entorno
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};
