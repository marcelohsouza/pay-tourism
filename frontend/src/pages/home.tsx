import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header type="public"/>
      <main className="flex flex-col items-center justify-center flex-grow text-center p-8">
        <h2 className="text-4xl font-bold mb-4">
          Organize suas Viagens de forma simples
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Descubra destinos incríveis com a praticidade que sua viagem merece.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Começar Agora
        </Link>
      </main>

      <footer className="p-4 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Pay Turismo. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default HomePage;