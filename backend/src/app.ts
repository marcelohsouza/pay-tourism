import express  from "express";
import cors from "cors";
import routes from "./routes/index.js";
import authRoutes from "./routes/auth.js";


const  app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('API Pay Turismo')
})

export default app;