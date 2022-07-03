import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/TelaLogin"
import TelaCadastro from "./components/TelaCadastro.js"
import UserContext from "./components/contexts/UserContext";
import Registros from "./components/Registros.js"
import CashEntry from "./components/CashEntry.js"
import CashOut from "./components/CashOut.js"
import { useState } from "react";
import './components/reset.css'


export default function App(){
   
    const [dados, setDados] = useState([]);

   
   
   
    return(
        <UserContext.Provider value={{dados, setDados}}>
        
            <BrowserRouter>
        {/* Tudo que tiver uma rota entre Routes */}
                <Routes>
                    {/* Cada rota tem que estar em Route */}
                  
                    <Route path="/" element={<PaginaPrincipal />} />
                    <Route path="/Cadastro" element={<TelaCadastro />}/>
                    <Route path="/Registros" element={<Registros />}/>
                    <Route path="/CashEntry" element={<CashEntry />}/>
                    <Route path="/CashOut" element={<CashOut />}/>
                    
                </Routes>
              
            </BrowserRouter>
          
        </UserContext.Provider>
        
    )

}
