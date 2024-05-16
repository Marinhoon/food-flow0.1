// Recarga.js
import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CreditContext } from './CreditContext';

const Recarga = () => {
  const { nome } = useParams();
  const { addCredit } = useContext(CreditContext);
  const [amount, setAmount] = useState(0);
  const history = useHistory();

  const handleAddCredit = () => {
    addCredit(nome, parseFloat(amount));
    history.push(`/lanches/${nome}`);
  };

  return (
    <div>
      <h1>Adicionar Créditos para {nome}</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddCredit}>Adicionar</button>
    </div>
  );
};

export default Recarga;
