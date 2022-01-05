import React from "react";

const validacoesCadastro = React.createContext({
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao
});

function semValidacao() {
    return { valido: true, texto: "" }
}

export default validacoesCadastro;