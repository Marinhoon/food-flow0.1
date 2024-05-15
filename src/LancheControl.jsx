import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LancheControl = () => {
  const { paciente } = useParams();
  const [lanches, setLanches] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [form, setForm] = useState({
    quantidade: '',
    descricao: '',
    credito: '',
    valorUnitario: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  

  const adicionarLanche = () => {
    const { quantidade, descricao, credito, valorUnitario } = form;
    const quantidadeNum = parseFloat(quantidade);
    const valorUnitarioNum = parseFloat(valorUnitario);
    const creditoNum = parseFloat(credito);

    if (isNaN(quantidadeNum) || isNaN(valorUnitarioNum) || isNaN(creditoNum)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
    }

    const valorTotal = quantidadeNum * valorUnitarioNum;
    const novoSaldo = saldo + creditoNum - valorTotal;

    setLanches([
      ...lanches,
      { quantidade: quantidadeNum, descricao, valorUnitario: valorUnitarioNum, valorTotal, credito: creditoNum }
    ]);
    setSaldo(novoSaldo);
    setForm({ quantidade: '', descricao: '', credito: '', valorUnitario: '' });
  };

  return (
    <div>
      <h1>Controle de Lanches e Créditos</h1>
      <h2>Paciente: {paciente}</h2>
      <div>
        <label>Quantidade:
          <input type="number" name="quantidade" value={form.quantidade} onChange={handleInputChange} />
        </label>
        <label>Descrição:
          <input type="text" name="descricao" value={form.descricao} onChange={handleInputChange} />
        </label>
        <label>Crédito:
          <input type="number" name="credito" value={form.credito} onChange={handleInputChange} />
        </label>
        <label>Valor Unitário:
          <input type="number" name="valorUnitario" value={form.valorUnitario} onChange={handleInputChange} />
        </label>
        <button onClick={adicionarLanche}>Adicionar Lanche</button>
        <Link to="/pacientes">Voltar ao Menu</Link>
      </div>
      <h2>Lanches</h2>
      <table>
        <thead>
          <tr>
            <th>Quantidade</th>
            <th>Descrição</th>
            <th>Crédito</th>
            <th>Valor Unitário</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {lanches.map((lanche, index) => (
            <tr key={index}>
              <td>{lanche.quantidade}</td>
              <td>{lanche.descricao}</td>
              <td>{lanche.credito}</td>
              <td>{lanche.valorUnitario}</td>
              <td>{lanche.valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Saldo: {saldo.toFixed(2)}</h2>
    </div>
  );
};

export default LancheControl;
