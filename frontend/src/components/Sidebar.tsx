import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleFilter = (status: string) => {
    setFilter(status);
  };

  

  return (
      <div >
        <div className="flex justify-between items-center mr-3">
          <div >
          </div>
          <div>
            <input type="text" placeholder="buscar"/>
          </div>
          
        </div>
        <div >
          
        </div>
      </div>

  );
};

export default Sidebar;
