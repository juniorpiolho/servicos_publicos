from sqlmodel import create_engine, Session, SQLModel
import os

DATABASE_USER = os.getenv("DATABASE_USER", "adm")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD", "adm123")
DATABASE_HOST = os.getenv("DATABASE_HOST", "localhost")
DATABASE_PORT = os.getenv("DATABASE_PORT", "5432")
DATABASE_NAME = os.getenv("DATABASE_NAME", "servicos")

DATABASE_URL = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"
engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def seed_db():
    from servicos_publicos.models.models import Servico
    from sqlmodel import select
    with Session(engine) as session:
        statement = select(Servico).limit(1)
        if not session.exec(statement).first():
            servicos_iniciais = [
                Servico(
                    nome="Secretaria de Saúde",
                    descricao="Informações e agendamentos de serviços de saúde municipais.",
                    link_site="https://www.saude.fortaleza.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...1",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Serviço de Atendimento Móvel de Urgência (SAMU)",
                    descricao="Atendimento de emergências médicas.",
                    link_site="https://samu.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...7",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Agência Nacional de Vigilância Sanitária (ANVISA)",
                    descricao="Regulamentação e fiscalização de produtos e serviços que afetam a saúde pública.",
                    link_site="https://www.gov.br/anvisa",
                    link_chat="https://api.whatsapp.com/send?phone=...25",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Corpo de Bombeiros Militar do Ceará (CBMCE)",
                    descricao="Atendimento de emergências, como incêndios e resgates.",
                    link_site="https://www.bombeiros.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...8",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Célula de Vigilância Sanitária",
                    descricao="Fiscalização de estabelecimentos para garantir a saúde pública.",
                    link_site="https://www.saude.fortaleza.ce.gov.br/vigilancia-sanitaria",
                    link_chat="https://api.whatsapp.com/send?phone=...24",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Postos de Saúde de Fortaleza",
                    descricao="Primeiro local para buscar atendimento de saúde, mais próximo de casa e com capacidade para a maioria das necessidades de saúde.",
                    link_site="https://saude.fortaleza.ce.gov.br/postos-de-saude",
                    link_chat="https://api.whatsapp.com/send?phone=...26",
                    categoria="Saúde"
                ),
                Servico(
                    nome="Saúde Digital SESA-CE",
                    descricao="Plataforma para agendamento de consultas, testes e exames para doenças respiratórias.",
                    link_site="https://digital.saude.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...27",
                    categoria="Saúde"
                ),
                Servico(
                    nome="ILUMINA",
                    descricao="Solicitação para reparos em iluminação pública.",
                    link_site="https://ilumina.fortaleza.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...2",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Emlurb",
                    descricao="Solicitação de capina, varrição e coleta de lixo.",
                    link_site="https://emlurb.fortaleza.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...6",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Secretaria de Infraestrutura (SEINF)",
                    descricao="Informações sobre obras e manutenção de vias públicas.",
                    link_site="https://infraestrutura.fortaleza.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...18",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Superintendência de Obras Públicas (SOP)",
                    descricao="Gerencia obras rodoviárias, aeroportuárias e de edificações no estado.",
                    link_site="https://www.ceara.gov.br/organograma/superintendencia-de-obras-publicas/",
                    link_chat="https://api.whatsapp.com/send?phone=...28",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Companhia Cearense de Transportes Metropolitanos (METROFOR)",
                    descricao="Informações sobre os serviços de metrô e VLT.",
                    link_site="https://www.metrofor.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...21",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Agência Reguladora do Estado do Ceará (ARCE)",
                    descricao="Fiscaliza serviços de saneamento básico, gás, energia elétrica e transporte intermunicipal.",
                    link_site="https://www.arce.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...22",
                    categoria="Infraestrutura"
                ),
                Servico(
                    nome="Departamento Estadual de Trânsito do Ceará (DETRAN/CE)",
                    descricao="Serviços relacionados a veículos e habilitação de motoristas.",
                    link_site="https://www.detran.ce.gov.br/",
                    link_chat="https://api.whatsapp.com/send?phone=...15",
                    categoria="Infraestrutura"
                ),
            ]
            session.add_all(servicos_iniciais)
            session.commit()