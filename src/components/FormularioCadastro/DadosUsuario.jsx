import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import useErros from "../../hooks/useErros";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                id="email"
                name="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                fullWidth
            />
            <TextField
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario;