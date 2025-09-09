import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma"

interface JwtPayload {
    userId: number;
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        //Autorização: Portador <token>
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Token not provided"})

        }

        const [, token] = authHeader.split(" ") // ignora Bearer

        if (!token) {
            return res.status(401).json({ message: "Token missing"})
        }


        // Verifica e decodifica o token
        const secret = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, secret) as JwtPayload;

        const userId = Number(decoded.userId);

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId},
        });

        if (!user){
            return res.status(401).json({ message: 'User not found'})
        }

        // Anexa o id do usuário ao request
        req.user = { id: userId};

        return next()
    } catch (err){
        
    }
}