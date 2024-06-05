import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import PacienteMenu from "./PacienteMenu";
import LancheControl from "./LancheControl";
import RecargaCredito from "./AdicionarCredito";
import AdicionarCredito from "./AdicionarCredito";
import { CreditProvider } from "./CreditContext";
import CadastroProdutos from "./CadastroProdutos";
import { ProductProvider } from './ProductContext';

function App() {
  return (
    <ProductProvider>
      <CreditProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" exact component={PacienteMenu} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/pacientes" element={<PacienteMenu />} />
            <Route path="/lanches/:paciente" element={<LancheControl />} />
            <Route path="/recarga/:paciente" element={<RecargaCredito />} />
            <Route
              path="/adicionar-credito/:paciente"
              element={<AdicionarCredito />}
            />
            <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
          </Routes>
        </div>
      </Router>
      </CreditProvider>
    </ProductProvider>
  );
}

export default App;