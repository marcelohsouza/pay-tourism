import express  from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import agencyRoutes from "./routes/agency.js";

const  app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/agencies", agencyRoutes);

app.get('/', (req, res) => {
    res.send('API Pay Turismo')
})

export default app;