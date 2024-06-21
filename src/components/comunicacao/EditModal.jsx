import React from "react"; // Importa o módulo React, necessário para escrever componentes React
import "./Modal.css"; // Importa estilos CSS do arquivo Modal.css local

// Define um componente funcional EditModal que recebe diversas props desestruturadas
const EditModal = ({
  show, // Booleano que indica se o modal deve ser exibido ou não
  handleClose, // Função para fechar o modal
  handleSave, // Função para salvar os dados do modal
  name, // Valor do campo de nome
  age, // Valor do campo de idade
  nerd, // Valor do campo de "é nerd?"
  handleNameChange, // Função para tratar mudanças no campo de nome
  handleAgeChange, // Função para tratar mudanças no campo de idade
  handleNerdChange, // Função para tratar mudanças no campo de "é nerd?"
  ageError, // Mensagem de erro para o campo de idade, se houver
}) => {
  // Determina a classe CSS do modal com base na prop 'show'
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      {" "}
      {/* Aplica a classe CSS determinada dinamicamente */}
      <section className="modal-main">
        {" "}
        {/* Seção principal do modal */}
        <button className="close-btn" onClick={handleClose}>
          &times; {/* Botão para fechar o modal, exibindo um 'x' */}
        </button>
        <label>
          Nome: {/* Label e input para o campo de nome */}
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Idade:{" "}
          {/* Label e input para o campo de idade, com possível exibição de erro */}
          <input type="number" value={age} onChange={handleAgeChange} />
          {ageError && (
            <span style={{ color: "red", marginLeft: "10px" }}>{ageError}</span>
          )}
        </label>
        <br />
        <label>
          É nerd? {/* Label e select para o campo de "é nerd?" */}
          <select value={nerd} onChange={handleNerdChange}>
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <br />
        <button onClick={handleSave}>Salvar</button>{" "}
        {/* Botão para salvar os dados do modal */}
      </section>
    </div>
  );
};

export default EditModal; // Exporta o componente EditModal como o valor padrão deste módulo
