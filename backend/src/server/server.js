import express from "express";
import cors from "cors";

import authRoutes from "../api/routes/auth.routes.js";
import providerRoutes from "../api/routes/provider.routes.js";

const server = express();

// Middleware
server.use(cors());
server.use(express.json());

// Routes
server.use('/api/auth', authRoutes);
server.use('/api/providers', providerRoutes);

// Health Check
server.get("/", (req, res) => {
    res.send("Welcome to BizNest Customer Service API");
});

export default server;
