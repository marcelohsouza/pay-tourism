import { Router } from "express";
import prisma from "../lib/prisma";
import { hashPassword, comparePassword, generateToken } from "../lib/auth";


const router = Router();

// Registrando usuario
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: "Email já cadastrado"});

        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        const token = generateToken(user.id, user.role);
        res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (err) {
        console.log("Erro no /register:", err)
        res.status(500).json({ error: "Erro ao registrar usuário" });
    }
})

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {  
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ error: "Usuário não encontrado" });
        
        const isValid = await comparePassword(password, user.password);
        if (!isValid) return res.status(400).json({ error: "Senha incorreta" });

        const token = generateToken(user.id, user.role);
        res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (err) {
        res.status(500).json({ error: "Erro ao fazer login" });
    }
});

export default router;