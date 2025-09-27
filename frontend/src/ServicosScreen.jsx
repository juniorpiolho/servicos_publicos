import React, { useState } from 'react';
import './ServicosScreen.css';

// Mapeie as categorias para os ícones.
const ICONES = {
  'serviços de saude': '/src/assets/serviços de saude.jpg',
  'serviços de infraestrutura': '/src/assets/serviços de infraestrutura.jpg',
};

// Dados completos do seu banco de dados (simulados).
const TODOS_OS_SERVICOS = [
  // Categoria Saúde
  { id: 1, nome: 'Secretaria de Saúde', descricao: 'Informações e agendamentos de serviços de saúde municipais.', categoria: 'serviços de saude', link_site: 'https://www.saude.fortaleza.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...1' },
  { id: 2, nome: 'Serviço de Atendimento Móvel de Urgência (SAMU)', descricao: 'Atendimento de emergências médicas.', categoria: 'serviços de saude', link_site: 'https://samu.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...7' },
  { id: 3, nome: 'Corpo de Bombeiros Militar do Ceará (CBMCE)', descricao: 'Atendimento de emergências, como incêndios e resgates.', categoria: 'serviços de saude', link_site: 'https://cbm.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...8' },
  { id: 4, nome: 'Postos de Saúde de Fortaleza', descricao: 'Primeiro local para buscar atendimento de saúde, mais próximo de casa e com capacidade para a maioria das necessidades de saúde.', categoria: 'serviços de saude', link_site: 'https://saude.fortaleza.ce.gov.br/postos-de-saude', link_chat: 'https://api.whatsapp.com/send?phone=...26' },
  { id: 5, nome: 'Agência Nacional de Vigilância Sanitária (ANVISA)', descricao: 'Regulamentação e fiscalização de produtos e serviços que afetam a saúde pública.', categoria: 'serviços de saude', link_site: 'https://www.gov.br/anvisa', link_chat: 'https://api.whatsapp.com/send?phone=...25' },
  { id: 6, nome: 'Saúde Digital SESA-CE', descricao: 'Plataforma para agendamento de consultas, testes e exames para doenças respiratórias.', categoria: 'serviços de saude', link_site: 'https://digital.saude.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...27' },
  { id: 7, nome: 'Célula de Vigilância Sanitária', descricao: 'Fiscalização de estabelecimentos para garantir a saúde pública.', categoria: 'serviços de saude', link_site: 'https://www.saude.fortaleza.ce.gov.br/vigilancia-sanitaria', link_chat: 'https://api.whatsapp.com/send?phone=...24' },
  
  // Categoria Infraestrutura
  { id: 8, nome: 'ILUMINA', descricao: 'Solicitação para reparos em iluminação pública.', categoria: 'serviços de infraestrutura', link_site: 'https://ilumina.fortaleza.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...2' },
  { id: 9, nome: 'Emlurb', descricao: 'Solicitação de capina, varrição e coleta de lixo.', categoria: 'serviços de infraestrutura', link_site: 'https://emlurb.fortaleza.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...6' },
  { id: 10, nome: 'Secretaria de Infraestrutura (SEINF)', descricao: 'Informações sobre obras e manutenção de vias públicas.', categoria: 'serviços de infraestrutura', link_site: 'https://infraestrutura.fortaleza.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...18' },
  { id: 11, nome: 'Superintendência de Obras Públicas (SOP)', descricao: 'Gerencia obras rodoviárias, aeroportuárias e de edificações no estado.', categoria: 'serviços de infraestrutura', link_site: 'https://www.ceara.gov.br/organograma/superintendencia-de-obras-publicas/', link_chat: 'https://api.whatsapp.com/send?phone=...28' },
  { id: 12, nome: 'Companhia Cearense de Transportes Metropolitanos (METROFOR)', descricao: 'Informações sobre os serviços de metrô e VLT.', categoria: 'serviços de infraestrutura', link_site: 'https://www.metrofor.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...21' },
  { id: 13, nome: 'Agência Reguladora do Estado do Ceará (ARCE)', descricao: 'Fiscaliza serviços de saneamento básico, gás, energia elétrica e transporte intermunicipal.', categoria: 'serviços de infraestrutura', link_site: 'https://www.arce.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...22' },
  { id: 14, nome: 'Departamento Estadual de Trânsito do Ceará (DETRAN/CE)', descricao: 'Serviços relacionados a veículos e habilitação de motoristas.', categoria: 'serviços de infraestrutura', link_site: 'https://www.detran.ce.gov.br/', link_chat: 'https://api.whatsapp.com/send?phone=...15' },
];

// As duas categorias principais que aparecem na tela inicial.
const CATEGORIAS_INICIAIS = [
  { id: 1, nome: 'Serviços de Saúde', descricao: 'Informações e agendamentos de serviços de saúde municipais.', categoria: 'serviços de saude' },
  { id: 2, nome: 'Serviços de Infraestrutura', descricao: 'Solicitação para reparos e vistorias.', categoria: 'serviços de infraestrutura' },
];

export default function ServicosScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [servicosExibidos, setServicosExibidos] = useState(CATEGORIAS_INICIAIS);
  const [servicoDetalhe, setServicoDetalhe] = useState(null);

  const handleCategoryClick = (categoriaClicada) => {
    // Se a tela atual é a de categorias, filtra e vai para a tela de lista de nomes.
    const servicosFiltrados = TODOS_OS_SERVICOS.filter(
      (servico) => servico.categoria === categoriaClicada
    );
    setServicosExibidos(servicosFiltrados);
    setServicoDetalhe(null);
  };
  
  const handleDetalheClick = (idDoServico) => {
    // Encontra o serviço completo pelo ID para exibir os detalhes.
    const servico = TODOS_OS_SERVICOS.find(s => s.id === idDoServico);
    setServicoDetalhe(servico);
    setServicosExibidos([]); // Limpa a lista para renderizar apenas os detalhes.
  };

  const handleVoltar = () => {
    if (servicoDetalhe) {
      // Se está na tela de detalhes, volta para a lista de nomes daquela categoria.
      const categoriaAtual = servicoDetalhe.categoria;
      const servicosFiltrados = TODOS_OS_SERVICOS.filter(s => s.categoria === categoriaAtual);
      setServicosExibidos(servicosFiltrados);
      setServicoDetalhe(null);
    } else {
      // Se está na tela de lista de nomes, volta para a tela de categorias.
      setServicosExibidos(CATEGORIAS_INICIAIS);
      setServicoDetalhe(null);
    }
  };

  const getFilteredList = () => {
    if (servicoDetalhe) {
      return [servicoDetalhe];
    }
    if (!searchQuery) {
      return servicosExibidos;
    }
    return servicosExibidos.filter(
      (servico) => servico.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const isCategoryView = servicosExibidos === CATEGORIAS_INICIAIS;
  const isDetailsView = servicoDetalhe !== null;

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
        {!isCategoryView && (
          <button onClick={handleVoltar} className="back-button">
            &larr; Voltar
          </button>
        )}
      </div>

      <div className={`servicos-grid ${!isCategoryView && !isDetailsView ? 'lista-saude-nomes' : ''}`}>
        {isDetailsView ? (
          <div className="servico-detalhe-completo">
            <h3>{servicoDetalhe.nome}</h3>
            <p><strong>Descrição:</strong> {servicoDetalhe.descricao}</p>
            <p><strong>Site:</strong> <a href={servicoDetalhe.link_site} target="_blank" rel="noopener noreferrer">{servicoDetalhe.link_site}</a></p>
            <p><strong>Chat:</strong> <a href={servicoDetalhe.link_chat} target="_blank" rel="noopener noreferrer">Abrir Chat</a></p>
          </div>
        ) : (
          getFilteredList().map((servico) => (
            <div
              key={servico.id}
              className={isCategoryView ? 'servico-card' : 'servico-nome-item-saude'}
              onClick={() => {
                isCategoryView ? handleCategoryClick(servico.categoria) : handleDetalheClick(servico.id);
              }}
            >
              {isCategoryView && (
                <img
                  src={ICONES[servico.categoria]}
                  className="icone"
                  alt={servico.categoria}
                />
              )}
              <h3>{servico.nome}</h3>
              {isCategoryView && <p>{servico.descricao}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}