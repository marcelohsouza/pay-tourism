import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleFilter = (status: string) => {
    setFilter(status);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 flex flex-col justify-between">
      <div className="flex-1 px-4">
        <div>

        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>Buscar</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors justify-between"
          >
            <div className="flex items-center gap-3">
              <span>Entrada</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-red-600 bg-red-50 rounded-lg transition-colors justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">Hoje</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>Em breve</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>Filtros e Etiquetas</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>Mais</span>
          </a>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
