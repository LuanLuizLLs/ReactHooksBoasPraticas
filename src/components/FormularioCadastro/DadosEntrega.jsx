import React, { useState }  from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, cidade, estado });
        }}>
            <TextField
                id="cep"
                name="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                fullWidth
            />
            <TextField
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                fullWidth
            />
            <TextField
                id="numero"
                name="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
            />
            <TextField
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
            />
            <TextField
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega;