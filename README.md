# Sistema de Consulta de Serviços Públicos de Fortaleza

## 1. Objetivo do Projeto
O objetivo principal deste sistema é **centralizar** e **simplificar** o acesso do cidadão aos serviços públicos de Fortaleza. A solução visa resolver a dificuldade da comunidade em encontrar os canais corretos de comunicação, promovendo acesso rápido e eficiente aos serviços essenciais.

### Relação com o ODS 11
O projeto se alinha diretamente ao **Objetivo de Desenvolvimento Sustentável (ODS) 11: Cidades e Comunidades Sustentáveis**. A arquitetura de software planejada contribui para a criação de cidades mais inteligentes e sustentáveis.

---

## 2. Descrição Funcional da Solução Planejada
A solução consiste em um aplicativo mobile que permitirá ao usuário as seguintes funcionalidades principais (Requisitos Funcionais):
1.  **Listar** todos os serviços públicos disponíveis na tela inicial.
2.  **Buscar** serviços por nome, palavra-chave ou descrição.
3.  **Filtrar** a lista por categorias (Saúde, Educação, Infraestrutura, etc.).
4.  **Acessar** diretamente o site, chat ou WhatsApp de cada órgão com um único clique.

---

## 3. Visão Geral da Arquitetura com Diagrama
O sistema adota uma arquitetura de **Três Camadas (3-Tier)** para garantir o desacoplamento e a escalabilidade, sendo ideal para o desenvolvimento multiplataforma.

![Diagrama de Arquitetura de 3 Camadas](docs/architecture/diagrama_arquitetura.png)


---

## 4. Lista de Tecnologias Propostas
A escolha das tecnologias foi feita com base na eficiência e facilidade de manutenção.
| Camada | Tecnologia | Justificativa de Escolha |
| :--- | :--- | :--- |
| **Backend (API)** | **Python (Flask)** | Framework leve e rápido para construir APIs RESTful, ideal para a lógica de negócios e acesso a dados. |
| **Banco de Dados** | **PostgreSQL** | Banco de dados relacional e robusto, excelente para armazenar dados estruturados dos serviços. |
| **Frontend (Mobile)** | **React Native (Expo)** | Permite o desenvolvimento rápido para Android e iOS com uma única base de código. |

---

## 5. Cronograma de Desenvolvimento para a Etapa 2 (N708)
O cronograma detalha a viabilidade da implementação na próxima etapa.
| Etapa | Tarefas Principais | Prazo (Semanas) |
| :--- | :--- | :--- |
| **Semana 1** | Configuração do ambiente (Python/Flask), implementação da API de listagem e conexão com o PostgreSQL. | 1 |
| **Semana 2** | Desenvolvimento da Tela Principal (Listagem de Serviços) no React Native e integração com a API. | 1 |
| **Semana 3** | Implementação da Funcionalidade de Busca e Filtros. | 1 |
| **Semana 4** | Desenvolvimento da Tela de Detalhes e Integração dos links de acesso (chat/site). | 1 |
| **Semana 5** | Testes Finais de Integração (End-to-End) e Protótipo de Alta Fidelidade. | 1 |