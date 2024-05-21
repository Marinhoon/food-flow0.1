import { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';

const CadastroProdutos = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: ''
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
    setForm({ nome: '', descricao: '', preco: '' });
    alert('Produto cadastrado com sucesso!');
  };

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            PRODUTO:
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
            VALIDADE:
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
            VALOR:
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
      <h2>Produtos Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>VALIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.nome}</td>
              <td>{product.descricao}</td>
              <td>{product.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CadastroProdutos;