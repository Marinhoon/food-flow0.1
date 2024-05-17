import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CreditContext } from './CreditContext';

const AdicionarCredito = () => {
  const { paciente } = useParams();
  const { addCredit, credits } = useContext(CreditContext);
  const [credito, setCredito] = useState('');

  const handleAdicionarCredito = () => {
    const amount = parseFloat(credito);
    if (!isNaN(amount)) {
      addCredit(paciente, amount);
      setCredito('');
      alert(`Crédito de ${credito} reais adicionado ao paciente ${paciente}`);
    }
  };

  return (
    <div>
      <h1>Adicionar Crédito</h1>
      <h2>Paciente: {paciente}</h2>
      <h3>Saldo atual: {credits[paciente] || 0} Reais</h3>
      <div>
        <label>Valor do crédito:
          <input type="number" value={credito} onChange={(e) => setCredito(e.target.value)} />
        </label>
        <button onClick={handleAdicionarCredito}>Adicionar Crédito</button>
        <Link to="/pacientes">Voltar ao Menu</Link>
      </div>
    </div>
  );
};

export default AdicionarCredito;



// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const AdicionarCredito = () => {
//   const { paciente } = useParams();
  
//   const [credito, setCredito] = useState('');
//   const [saldo, setSaldo] = useState(0);

//   const handleAdicionarCredito = () => {
//     const novoSaldo = saldo + parseFloat(credito);
//     setSaldo(novoSaldo);
//     alert(`Crédito de ${credito} reais adicionado ao paciente ${paciente}`);
//   };

//   return (
//     <div>
//       <h1>Adicionar Crédito</h1>
//       <h2>Paciente: {paciente}</h2>
//       <h3>Saldo atual: {saldo} Reais</h3>
//       <div>
//         <label>Valor do crédito:
//           <input type="number" value={credito} onChange={(e) => setCredito(e.target.value)} />
//         </label>
//         <button onClick={handleAdicionarCredito}>Adicionar Crédito</button>
//         <Link to="/pacientes">Voltar ao Menu</Link>
//       </div>
//       <div>
      
//       </div>
//     </div>
//   );
// };

// export default AdicionarCredito;