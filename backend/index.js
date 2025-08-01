import dotenv from "dotenv";
import app from "./src/server/server.js";
import connectDB from "./src/infrastructure/db/connection.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
