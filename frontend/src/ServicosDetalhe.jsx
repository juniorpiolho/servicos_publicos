import React from 'react';
import './ServicosDetalhe.css';

export default function ServicosDetalhe({ servicos }) {
  return (
    <div className="servicos-detalhe-container">
      {servicos.map(servico => (
        <div key={servico.id} className="servico-item-coluna">
          <h4>{servico.nome}</h4>
          <p>{servico.descricao}</p>
        </div>
      ))}
    </div>
  );
}