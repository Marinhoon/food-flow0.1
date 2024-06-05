import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './tailwind.css';
import './PacienteMenu.css'

const PacienteMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPaciente, setSelectedPaciente] = useState(null);

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
      internacao: '28/04/2024',
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenModal = (paciente) => {
    setSelectedPaciente(paciente);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPaciente(null);
  };

  const filteredPacientes = pacientes.filter((paciente) =>
    paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-full bg-gray-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Food-Flow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Menu de Pacientes</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Pesquisar Paciente"
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Sair</Link>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leito</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nº Guia</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Convênio</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médico Assistente</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internação</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dietas</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Controle de Lanches</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adicionar Créditos</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalhes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPacientes.map((paciente, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.leito}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.idade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.guia}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.convenio}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.medico}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.internacao}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{paciente.dietas}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/lanches/${paciente.nome}`} className="text-indigo-600 hover:text-indigo-900">Controle de Lanches</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/recarga/${paciente.nome}`} className="text-indigo-600 hover:text-indigo-900">Adicionar Créditos</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleOpenModal(paciente)} className="text-indigo-600 hover:text-indigo-900">Ver Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Detalhes do Paciente</Dialog.Title>
                      <div className="mt-2">
                        {selectedPaciente && (
                          <div>
                            <p><strong>Leito:</strong> {selectedPaciente.leito}</p>
                            <p><strong>Nome:</strong> {selectedPaciente.nome}</p>
                            <p><strong>Idade:</strong> {selectedPaciente.idade}</p>
                            <p><strong>Nº Guia:</strong> {selectedPaciente.guia}</p>
                            <p><strong>Convênio:</strong> {selectedPaciente.convenio}</p>
                            <p><strong>Médico Assistente:</strong> {selectedPaciente.medico}</p>
                            <p><strong>Internação:</strong> {selectedPaciente.internacao}</p>
                            <p><strong>Dietas:</strong> {selectedPaciente.dietas}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleCloseModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default PacienteMenu;




// import { useState, Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { Link } from 'react-router-dom';
// import './tailwind.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PacienteMenu = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaciente, setSelectedPaciente] = useState(null);
  

//   const pacientes = [
//     {
//       leito: 'FEM. 1 LEITO 09',
//       nome: 'GABRIELLE CONCEICAO NERYS DE SOUZA',
//       idade: 17,
//       guia: '02036093',
//       convenio: 'UNIMED SEGUROS SAUDE',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '28/03/2024',
//       dietas: 'Dieta Livre - NUTRIÇÃO:'
//     },
//     {
//       leito: 'FEM. 1 LEITO 16',
//       nome: 'CONSUELO DE CARVALHO MASCARENHAS',
//       idade: 74,
//       guia: '02036197',
//       convenio: 'SUL AMÉRICA',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '28/04/2024',
//       dietas: 'Dieta Livre - NUTRIÇÃO'
//     },
//     {
//       leito: 'FEM. 1 LEITO 14',
//       nome: 'MARIA LAURA DA SILVA BRITO',
//       idade: 25,
//       guia: '02036210',
//       convenio: 'SUL AMÉRICA',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '24/04/2024',
//       dietas: 'Dieta Branda - NUTRIÇÃO'
//     }
//   ];

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleOpenModal = (paciente) => {
//     setSelectedPaciente(paciente);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPaciente(null);
//   };

//   const filteredPacientes = pacientes.filter((paciente) =>
//     paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-full bg-gray-100">
//       <nav className="bg-gray-800">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Sair</Link>
//                   <Link to="/cadastro-produtos" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Cadastrar Produtos</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <header className="bg-white shadow">
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900">Menu de Pacientes</h1>
//         </div>
//       </header>

//       <main>
//         <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//           <input
//             type="text"
//             placeholder="Pesquisar Paciente"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="mb-4 p-2 border border-gray-300 rounded-md w-full"
//           />
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leito</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nº Guia</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Convênio</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médico Assistente</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internação</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dietas</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Controle de Lanches</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adicionar Créditos</th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalhes</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredPacientes.map((paciente, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.leito}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.nome}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.idade}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.guia}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.convenio}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.medico}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.internacao}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{paciente.dietas}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Link to={`/lanches/${paciente.nome}`} className="text-indigo-600 hover:text-indigo-900">Controle de Lanches</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Link to={`/recarga/${paciente.nome}`} className="text-indigo-600 hover:text-indigo-900">Adicionar Créditos</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <button onClick={() => handleOpenModal(paciente)} className="text-indigo-600 hover:text-indigo-900">Ver Detalhes</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>

//       <Transition.Root show={isModalOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-10 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               >
//                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                       <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Detalhes do Paciente</Dialog.Title>
//                       <div className="mt-2">
//                         {selectedPaciente && (
//                           <div>
//                             <p><strong>Leito:</strong> {selectedPaciente.leito}</p>
//                             <p><strong>Nome:</strong> {selectedPaciente.nome}</p>
//                             <p><strong>Idade:</strong> {selectedPaciente.idade}</p>
//                             <p><strong>Nº Guia:</strong> {selectedPaciente.guia}</p>
//                             <p><strong>Convênio:</strong> {selectedPaciente.convenio}</p>
//                             <p><strong>Médico Assistente:</strong> {selectedPaciente.medico}</p>
//                             <p><strong>Internação:</strong> {selectedPaciente.internacao}</p>
//                             <p><strong>Dietas:</strong> {selectedPaciente.dietas}</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
//                     <button
//                       type="button"
//                       className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
//                       onClick={handleCloseModal}
//                     >
//                       Fechar
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </div>
//   );
// };

// export default PacienteMenu;




// import { useState } from 'react';
// import Modal from 'react-modal';
// import { Link } from 'react-router-dom';
// import './PacienteMenu.css';
// import './tailwind.css'

// const PacienteMenu = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPaciente, setSelectedPaciente] = useState(null);

//   const pacientes = [
//     {
//       leito: 'FEM. 1 LEITO 09',
//       nome: 'GABRIELLE CONCEICAO NERYS DE SOUZA',
//       idade: 17,
//       guia: '02036093',
//       convenio: 'UNIMED SEGUROS SAUDE',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '28/03/2024',
//       dietas: 'Dieta Livre - NUTRIÇÃO:'
//     },
//     {
//       leito: 'FEM. 1 LEITO 16',
//       nome: 'CONSUELO DE CARVALHO MASCARENHAS',
//       idade: 74,
//       guia: '02036197',
//       convenio: 'SUL AMÉRICA',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '28/04/2024',
//       dietas: 'Dieta Livre - NUTRIÇÃO'
//     },
//     {
//       leito: 'FEM. 1 LEITO 14',
//       nome: 'MARIA LAURA DA SILVA BRITO',
//       idade: 25,
//       guia: '02036210',
//       convenio: 'SUL AMÉRICA',
//       medico: 'DANIEL ERNESTO ROCHA BRANDÃO',
//       internacao: '24/04/2024',
//       dietas: 'Dieta Branda - NUTRIÇÃO'
//     }
//   ];

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleOpenModal = (paciente) => {
//     setSelectedPaciente(paciente);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPaciente(null);
//   };

//   const filteredPacientes = pacientes.filter((paciente) =>
//     paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Menu de Pacientes</h1>
//       <Link to="/">Sair</Link>
//       <Link to="/cadastro-produtos" className="button">Cadastrar Produtos</Link>
//       <input
//         type="text"
//         placeholder="Pesquisar Paciente"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search-bar"
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Leito</th>
//             <th>Paciente</th>
//             <th>Idade</th>
//             <th>Nº Guia</th>
//             <th>Convênio</th>
//             <th>Médico Assistente</th>
//             <th>Internação</th>
//             <th>Dietas</th>
//             <th>Controle de Lanches</th>
//             <th>Adicionar Créditos</th>
//             <th>Detalhes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredPacientes.map((paciente, index) => (
//             <tr key={index}>
//               <td>{paciente.leito}</td>
//               <td>{paciente.nome}</td>
//               <td>{paciente.idade}</td>
//               <td>{paciente.guia}</td>
//               <td>{paciente.convenio}</td>
//               <td>{paciente.medico}</td>
//               <td>{paciente.internacao}</td>
//               <td>{paciente.dietas}</td>
//               <td>
//                 <Link to={`/lanches/${paciente.nome}`}>Controle de Lanches</Link>
//               </td>
//               <td> 
//                 <Link to={`/recarga/${paciente.nome}`}>Adicionar Créditos</Link>
//               </td>
//               <td>
//                 <button onClick={() => handleOpenModal(paciente)}>Ver Detalhes</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedPaciente && (
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={handleCloseModal}
//           contentLabel="Detalhes do Paciente"
//           className="modal"
//           overlayClassName="modal-overlay"
//         >
//           <div className="modal-header">
//             <h2>Detalhes do Paciente</h2>
//             <button onClick={handleCloseModal} className="close-button">&times;</button>
//           </div>
//           <div className="modal-content">
//             <p><strong>Nome:</strong> {selectedPaciente.nome}</p>
//             <p><strong>Idade:</strong> {selectedPaciente.idade}</p>
//             <p><strong>Leito:</strong> {selectedPaciente.leito}</p>
//             <p><strong>Guia:</strong> {selectedPaciente.guia}</p>
//             <p><strong>Convênio:</strong> {selectedPaciente.convenio}</p>
//             <p><strong>Médico:</strong> {selectedPaciente.medico}</p>
//             <p><strong>Internação:</strong> {selectedPaciente.internacao}</p>
//             <p><strong>Dietas:</strong> {selectedPaciente.dietas}</p>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PacienteMenu;
