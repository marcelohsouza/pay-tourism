import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/api"



export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
           const response = await login(email, password);
           const token = response.data.token;
           localStorage.setItem('token', token);
           navigate("/agencies");
        }catch (err){
            console.error("Erro no login:", err);
            setError("Credencias Inválidas, tente novamente")
        }
    }

    return (
        <div>
            <div>
                <h1>

                </h1>
                {error&& (
                    <p>{error}</p>
                )}
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <button></button>
                </form>
                <p>Não tem conta?{" "}
                    <a href="/register">Registre-se</a>
                </p>
            </div>
        </div>
   )
}