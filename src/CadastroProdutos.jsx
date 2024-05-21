import { useState, useContext } from "react";
import "./CadastroProdutos.css";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

const CadastroProdutos = () => {
  const { addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, descricao, preco } = form;
    addProduct({ nome, descricao, preco });
    setForm({ nome: "", descricao: "", preco: "" });
    alert("Produto cadastrado com sucesso!");
  };

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <input
              type="text"
              name="descricao"
              value={form.descricao}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Preço:
            <input
              type="number"
              name="preco"
              value={form.preco}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Cadastrar Produto</button>
        <Link to="/pacientes">Voltar ao Menu</Link>
      </form>
    </div>
  );
};

export default CadastroProdutos;
