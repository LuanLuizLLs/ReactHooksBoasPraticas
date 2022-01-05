export function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF precisa possuir 11 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

export function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, texto: "Senha precisa possuir de 4 a 72 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}