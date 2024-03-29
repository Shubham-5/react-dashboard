import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./modules/Dashboard";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <div className="flex justify-between items-start h-full">
        <Sidebar isOpen={sidebar} setIsOpen={setSidebar} />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
