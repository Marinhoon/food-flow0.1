import { Link } from 'react-router-dom';
import './PacienteMenu.css'

const PacienteMenu = () => {
  const pacientes = [
    {
      leito: 'FEM. 1 LEITO 09',
      nome: 'GABRIELLE CONCEICAO NERYS DE SOUZA',
      idade: 17,
      guia: '02036093',
      convenio: 'UNIMED SEGUROS SAUDE',
      medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
      internacao: '28/03/2024',
      dietas: 'Dieta Livre - NUTRIÇÃO:'
    },
    {
      leito: 'FEM. 1 LEITO 16',
      nome: 'CONSUELO DE CARVALHO MASCARENHAS',
      idade: 74,
      guia: '02036197',
      convenio: 'SUL AMÉRICA',
      medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
      internacao: '28/04/202',
      dietas: 'Dieta Livre - NUTRIÇÃO'
    },
    {
      leito: 'FEM. 1 LEITO 14',
      nome: 'MARIA LAURA DA SILVA BRITO',
      idade: 25,
      guia: '02036210',
      convenio: 'SUL AMÉRICA',
      medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
      internacao: '24/04/2024',
      dietas: 'Dieta Branda - NUTRIÇÃO'
    }
  ];

  return (
    <div>
      <h1>Menu de Pacientes</h1>
      <Link to="/">Sair</Link>
      <table>
        <thead>
          <tr>
            <th>Leito</th>
            <th>Paciente</th>
            <th>Idade</th>
            <th>Nº Guia</th>
            <th>Convênio</th>
            <th>Médico Assistente</th>
            <th>Internação</th>
            <th>Dietas</th>
            <th>Controle de Lanches</th>
            <th>Adicionar Créditos</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente, index) => (
            <tr key={index}>
              <td>{paciente.leito}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.idade}</td>
              <td>{paciente.guia}</td>
              <td>{paciente.convenio}</td>
              <td>{paciente.medico}</td>
              <td>{paciente.internacao}</td>
              <td>{paciente.dietas}</td>
              <td>
                <Link to={`/lanches/${paciente.nome}`}>Controle de Lanches</Link>
              </td>
              <td> 
                <Link to={`/recarga/${paciente.nome}`}>Adicionar Créditos</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteMenu;
