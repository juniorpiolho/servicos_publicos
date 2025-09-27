from typing import Annotated
from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import Session, select
from servicos_publicos.models.models import Servico
from servicos_publicos.configs.database import get_session, create_db_and_tables, seed_db
from fastapi.middleware.cors import CORSMiddleware  # Importe o CORSMiddleware

SessionDep = Annotated[Session, Depends(get_session)]

app = FastAPI()

# Adicione esta configuração para permitir que seu frontend acesse o backend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    seed_db()

@app.get("/servicos/")
def get_servicos(session: Session = Depends(get_session)):
    servicos = session.exec(select(Servico)).all()
    return servicos

@app.get("/servicos/{servico_id}")
def get_servico(servico_id: int, session: SessionDep) -> Servico:
    servico = session.get(Servico, servico_id)
    if not servico:
        raise HTTPException(status_code=404, detail="Servico não encontrado")
    return servico

@app.post("/servicos/")
def create_servico(servico: Servico, session: Session = Depends(get_session)):
    session.add(servico)
    session.commit()
    session.refresh(servico)
    return servico

@app.put("/servicos/{servico_id}")
def update_servico(servico_id: int, servico_data: Servico, session: SessionDep) -> Servico:
    servico = session.get(Servico, servico_id)
    if not servico:
        raise HTTPException(status_code=404, detail="Servico não encontrado")
    
    servico.nome = servico_data.nome
    servico.descricao = servico_data.descricao
    servico.link_site = servico_data.link_site
    servico.link_chat = servico_data.link_chat
    servico.categoria = servico_data.categoria
    
    session.add(servico)
    session.commit()
    session.refresh(servico)
    return servico

@app.delete("/servicos/{servico_id}")
def delete_servico(servico_id: int, session: SessionDep):
    servico = session.get(Servico, servico_id)
    if not servico:
        raise HTTPException(status_code=404, detail="Servico não encontrado")
    
    session.delete(servico)
    session.commit()
    return {"ok": True}