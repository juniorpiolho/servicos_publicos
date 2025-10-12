# Especificação das APIs e Serviços Planejados

## 1. Listar Todos os Serviços

| Propriedade | Detalhe |
| :--- | :--- |
| **Método** | `GET` |
| **Endpoint** | `/servicos` |
| **Descrição** | Retorna a lista completa de todos os serviços públicos. |

## 2. Buscar Serviços por Palavra-Chave

| Propriedade | Detalhe |
| :--- | :--- |
| **Método** | `GET` |
| **Endpoint** | `/servicos/buscar` |
| **Parâmetros** | `q` (string, obrigatório) |
| **Descrição** | Busca serviços por nome, descrição ou categoria. |