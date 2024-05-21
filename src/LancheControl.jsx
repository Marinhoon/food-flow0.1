import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CreditContext } from "./CreditContext";

const LancheControl = () => {
  const { paciente } = useParams();
  const { credits, setCredits } = useContext(CreditContext);
  const [lanches, setLanches] = useState([]);
  const [form, setForm] = useState({
    quantidade: "",
    produto: "",
    credito: "",
    valorUnitario: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const adicionarLanche = () => {
    const { quantidade, produto, credito, valorUnitario } = form;
    const quantidadeNum = parseFloat(quantidade);
    const valorUnitarioNum = parseFloat(valorUnitario);
    const creditoNum = parseFloat(credito);

    if (isNaN(quantidadeNum) || isNaN(valorUnitarioNum)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }

    const valorTotal = quantidadeNum * valorUnitarioNum;
    if (credits[paciente] < valorTotal) {
      alert("Saldo insuficiente.");
      return;
    }

    const novoSaldo = credits[paciente] - valorTotal;
    const novosCreditos = { ...credits, [paciente]: novoSaldo };

    setCredits(novosCreditos);
    setLanches([
      ...lanches,
      {
        quantidade: quantidadeNum,
        produto,
        valorUnitario: valorUnitarioNum,
        valorTotal,
        credito: creditoNum,
      },
    ]);
    setForm({ quantidade: "", produto: "", credito: "", valorUnitario: "" });
  };

  return (
    <div>
      <h1>Painel de Paciente</h1>
      <h2>Paciente: {paciente}</h2>
      <h3>Saldo atual: {credits[paciente] || 0} Reais</h3>
      <div>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantidade"
            value={form.quantidade}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            name="produto"
            value={form.produto}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Valor Unitário:
          <input
            type="number"
            name="credito"
            value={form.credito}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Crédito:
          <input
            type="number"
            name="valorUnitario"
            value={form.valorUnitario}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={adicionarLanche}>Adicionar Lanche</button>
        git
      </div>
      <h2>Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Quantidades</th>
            <th>Produto</th>
            <th>Crédito</th>
            <th>Valor Crédito Usado</th>
          </tr>
        </thead>
        <tbody>
          {lanches.map((lanche, index) => (
            <tr key={index}>
              <td>{lanche.quantidade}</td>
              <td>{lanche.produto}</td>
              <td>{lanche.credito}</td>
              <td>{lanche.valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LancheControl;
