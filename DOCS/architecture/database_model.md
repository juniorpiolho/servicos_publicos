# Modelo de Dados com Dicionário e Diagrama ER

## 1. Entidades
O sistema possui uma única entidade principal: **Serviços**.

## 2. Dicionário de Dados

### Tabela: `servicos`
| Coluna | Tipo de Dados | Restrição | Descrição |
| :--- | :--- | :--- | :--- |
| **id** | SERIAL | PRIMARY KEY | Identificador único do serviço. |
| **nome** | VARCHAR(255) | NOT NULL | Nome do órgão ou serviço. |
| **link_chat** | VARCHAR(255) | - | Link direto para chat ou WhatsApp. |
| **categoria** | VARCHAR(100) | - | Categoria do serviço. |

## 3. Diagrama ER
[Insira aqui a imagem do seu Diagrama ER (apenas a tabela "servicos").]