import { useEffect, useState } from "react";
import axios from "axios";

interface Agency {
  id: number;
  Name: string;
  cnpj: string;
  stateRegistration: string;
  status: boolean;
  foundingDate: string;
}

export default function AgencyDashboard () {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Campos do form
  const [Name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [stateRegistration, setStateRegistration] = useState("");
  const [foundingDate, setFoundingDate] = useState("");

  useEffect(() => {
    fetchAgencies();
  }, []);

  async function fetchAgencies() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/api/agencies", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAgencies(res.data);
    } catch (err) {
      console.error("Erro ao buscar agências:", err);
    } finally {
      setLoading(false);
    }
  }

  async function createAgency(e: React.FormEvent) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:3000/api/agencies",
        { Name, cnpj, stateRegistration, status: true, foundingDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAgencies([...agencies, res.data]);
      setShowForm(false);
      setName("");
      setCnpj("");
      setStateRegistration("");
      setFoundingDate("");
    } catch (err) {
      console.error("Erro ao criar agência:", err);
    }
  }

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">Carregando agências...</p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Agências</h1>

      {/* Lista de agências */}
      <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm mb-6">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2">Nome</th>
              <th className="p-2">CNPJ</th>
              <th className="p-2">Inscrição Estadual</th>
              <th className="p-2">Status</th>
              <th className="p-2">Fundação</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency) => (
              <tr key={agency.id} className="border-b border-gray-200">
                <td className="p-2">{agency.Name}</td>
                <td className="p-2">{agency.cnpj}</td>
                <td className="p-2">{agency.stateRegistration || "N/A"}</td>
                <td
                  className={`p-2 font-medium ${
                    agency.status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {agency.status ? "Ativa" : "Inativa"}
                </td>
                <td className="p-2 text-gray-500 text-sm">
                  {new Date(agency.foundingDate).toLocaleDateString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nova agencia*/}
      {!showForm && (
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            + Nova Agência
          </button>
        </div>
      )}

      {/* Formulário */}
      {showForm && (
        <form
          onSubmit={createAgency}
          className="bg-white p-6 rounded-md border border-gray-200 shadow-sm mb-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Criar Nova Agência
          </h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nome"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <input
              type="text"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <input
              type="text"
              placeholder="Inscrição Estadual"
              value={stateRegistration}
              onChange={(e) => setStateRegistration(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <input
              type="date"
              value={foundingDate}
              onChange={(e) => setFoundingDate(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Salvar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
