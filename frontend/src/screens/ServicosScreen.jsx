import React, { useState } from 'react';
import './ServicosScreen.css';

const ICONES = {
  'serviços de infraestrutura': '/src/assets/serviços de infraestrutura.jpg',
  'serviços de saude': '/src/assets/serviços de saude.jpg',
};

const DADOS_DE_EXEMPLO = [
  { id: 1, nome: 'Serviços de Infraestrutura', descricao: 'Solicitação para reparos e vistorias.', categoria: 'serviços de infraestrutura' },
  { id: 2, nome: 'Serviços de Saúde', descricao: 'Informações e agendamentos de serviços de saúde municipais.', categoria: 'serviços de saude' },
  
];

export default function ServicosScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredServicos = () => {
    if (!searchQuery) {
      return DADOS_DE_EXEMPLO;
    }
    return DADOS_DE_EXEMPLO.filter(servico =>
      servico.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      servico.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      servico.categoria.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  return (
    <div className="container">
      <div className="header">
        <h1>Serviços Públicos</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquisar serviços..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="servicos-grid">
        {getFilteredServicos().map(servico => (
          <div key={servico.id} className="servico-card">
            {ICONES[servico.categoria] && (
              <img src={ICONES[servico.categoria]} className="icone" alt={servico.categoria} />
            )}
            <h3>{servico.nome}</h3>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}