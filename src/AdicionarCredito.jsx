import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdicionarCredito = () => {
  const { paciente } = useParams();
  
  const [credito, setCredito] = useState('');

  const handleAdicionarCredito = () => { 
    alert(`Crédito de ${credito} Reais adicionado ao paciente ${paciente}`);
  };

  return (
    <div>
      <h1>Adicionar Crédito</h1>
      <h2>Paciente: {paciente}</h2>
      <div>
        <label>Valor do crédito:
          <input type="number" value={credito} onChange={(e) => setCredito(e.target.value)} />
        </label>
        <button onClick={handleAdicionarCredito}>Adicionar Crédito</button>
        <Link to="/pacientes">Voltar ao Menu</Link>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default AdicionarCredito;