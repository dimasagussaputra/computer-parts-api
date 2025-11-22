import express from "express";
import dotenv from "dotenv";
import cpuRoutes from "./routes/cpuRoutes.js";
import gpuRoutes from "./routes/gpuRoutes.js";
import hddRoutes from "./routes/hddRoutes.js";
import ramRoutes from "./routes/ramRoutes.js";
import ssdRoutes from "./routes/ssdRoutes.js";
import usbRoutes from "./routes/usbRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CORS middleware (opsional, jika diperlukan untuk frontend)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Routes
app.use("/api/cpu", cpuRoutes);
app.use("/api/gpu", gpuRoutes);
app.use("/api/hdd", hddRoutes);
app.use("/api/ram", ramRoutes);
app.use("/api/ssd", ssdRoutes);
app.use("/api/usb", usbRoutes);

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        message: "PC Parts API - REST API untuk Database Komponen PC",
        version: "1.0.0",
        endpoints: {
            cpu: "/api/cpu",
            gpu: "/api/gpu",
            hdd: "/api/hdd",
            ram: "/api/ram",
            ssd: "/api/ssd",
            usb: "/api/usb"
        },
        documentation: "Lihat dokumentasi lengkap di README.md"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: "Endpoint tidak ditemukan",
        availableEndpoints: [
            "/api/cpu",
            "/api/gpu",
            "/api/hdd",
            "/api/ram",
            "/api/ssd",
            "/api/usb"
        ]
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: "Terjadi kesalahan pada server",
        message: err.message 
    });
});

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`🚀 Server berjalan di port ${port}`);
    console.log(`📡 API tersedia di http://localhost:${port}`);
    console.log(`📚 Dokumentasi: http://localhost:${port}/`);
});