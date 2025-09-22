import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api"
import { Link } from "react-router-dom";

const LoginForm = () => {
    
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

      // Salva no localStorage
      localStorage.setItem("token", token);

      // Redireciona para o dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Credenciais inválidas, tente novamente.");
    }
  };
    
return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Faça login
        </h1>

        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ou telefone"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />

          <div className="flex justify-between text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Link
              to="/register"
              className="text-sm font-medium text-blue-600 hover:underline"
              >Criar Conta</Link>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Próxima
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default LoginForm