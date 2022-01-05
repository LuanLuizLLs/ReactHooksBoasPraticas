import React, { useState, useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h4" align="center">Obrigado pelo cadastro!</Typography>
    ]

    useEffect(() => {
        if (etapaAtual === formulario.length - 1) {
            aoEnviar(dadosColetados);
        }
    })

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados, ...dados });
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formulario[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;