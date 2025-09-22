import { Link } from "react-router-dom";

type HeaderProps = {
  type: "public";
};

const Header = ({ type }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Pay Turismo</h1>

      {type === "public" && (
        <nav className="flex gap-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-blue-600 hover:underline">
            Criar Conta
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
