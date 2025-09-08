import prisma from "./prisma.js"

async function main() {
    try {
        // Teste simples: contar usuarios
        const count = await prisma.user.count();
        console.log(`Número de usuarios no banco: ${count}`);

    }catch (err) {
        console.log("Erro ao acessar o banco", err)
    }finally{
        await prisma.$disconnect();
    }
}

main();