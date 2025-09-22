import dotenv from "dotenv";
import app from "./core/app.js";
import connectDB from "./core/config/db.config.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
