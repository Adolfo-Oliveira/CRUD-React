import React from "react"; // Importa o módulo React
import "./Modal.css"; // Importa estilos CSS do arquivo Modal.css local

// Componente funcional Modal que recebe props desestruturadas
const Modal = ({ show, handleClose, handleAdd, nome, idade, nerd }) => {
  // Determina a classe CSS com base na propriedade show para exibir ou ocultar o modal
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  // Renderiza o JSX que representa a estrutura do modal
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* Botão para fechar o modal, onClick chama a função handleClose */}
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        {/* Exibe o nome recebido como prop */}
        <p>Nome: {nome}</p>
        {/* Exibe a idade recebida como prop */}
        <p>{idade}</p>
        {/* Exibe se é nerd ou não, baseado na prop nerd */}
        <p>Nerd: {nerd === "Sim" ? "Sim" : "Não"}</p>
        {/* Botão para salvar, onClick chama a função handleAdd */}
        <button onClick={handleAdd}>Salvar</button>
      </section>
    </div>
  );
};

export default Modal; // Exporta o componente Modal como o valor padrão deste módulo
