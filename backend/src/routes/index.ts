import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/agency", authMiddleware, async (req, res) => {
    if (!req.user){
      return res.status(401).json({ message: 'Unauthorized'});
    }

    res.json({ message: `Olá Usuário ${req.user?.id}, bem-vindo as Agencias `});
})

export default router;