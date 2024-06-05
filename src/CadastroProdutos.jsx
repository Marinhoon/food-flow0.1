import { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';

const CadastroProdutos = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({
    Produto: '',
    validade: '',
    preco: '' ,
    quantidade: ''
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
    const { Produto, validade, preco } = form;
    addProduct({ Produto, validade, preco });
    setForm({ Produto: '', validade: '', preco: '', quantidade:'' });
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
              name="Produto"
              value={form.Produto}
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
              name="validade"
              value={form.validade}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
        <label>
            QUANTIDADE:
            <input
              type="text"
              name="quantidade"
              value={form.quantidade}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            PREÇO:
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
            <th>QUANTIDADE</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.Produto}</td>
              <td>{product.validade}</td>
              <td>{product.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CadastroProdutos;

// import { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { ProductContext } from "./ProductContext";
// import { Link } from "react-router-dom";

// const CadastroProdutos = () => {
//   const { products, addProduct } = useContext(ProductContext);
//   const [form, setForm] = useState({
//     name: "",
//     validade: "",
//     Preço: "",
//     description: ""
//   });

//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then(response => addProduct(response.data))
//       .catch(error => console.error("There was an error fetching the products!", error));
//   }, [addProduct]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { Produto, validade, preco } = form;
// //     addProduct({ Produto, validade, preco });
// //     setForm({ Produto: '', validade: '', preco: '', quantidade:'' });
// //     alert('Produto cadastrado com sucesso!');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/products', form)
//       .then(response => addProduct([...products, response.data]))
//       .catch(error => console.error("There was an error adding the product!", error));

//     setForm({ name: "", Preço: "", validade: " ",description: "" });
//   };

//   return (
//     <div>
//       <h1>Cadastro de Produtos</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Produto:
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Validade:
//           <input
//             type="number"
//             name="validade"
//             value={form.validade}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Descrição:
//           <input
//             type="text"
//             name="description"
//             value={form.description}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Preço:
//           <input
//             type="number"
//             name="Preço"
//             value={form.Preço}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">Cadastrar Produto</button>
//         <Link to="/pacientes">Voltar ao Menu</Link>
//       </form>
//       <h2>Produtos Cadastrados</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Produto</th>
//             <th>Validade</th>
//             <th>Descrição</th>
//             <th>Preço</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{product.name}</td>
//               <td>{product.Preço}</td>
//               <td>{product.validade}</td>
//               <td>{product.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CadastroProdutos;

