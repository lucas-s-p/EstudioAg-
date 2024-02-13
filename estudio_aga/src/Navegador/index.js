import {
  ContainerBotaoContato,
  ContainerBotaoEstudio,
  ContainerBotaoInicio,
  ContainerBotaoProjeto,
  ContainerBotaoServico,
  ContaineraNavSec,
  ImgCentralSec,
  LogoNavegadorSec,
} from "./NavegadorStyle";
import LogoNavegador from "../assests/logo.png";
import ImagemCentralSec from "../assests/pattern-02.png";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function NavegadorNav() {
  return (
    <ContaineraNavSec>
      <ImgCentralSec src={ImagemCentralSec}></ImgCentralSec>
      <LogoNavegadorSec src={LogoNavegador}></LogoNavegadorSec>
      <Link to="/">
        <ContainerBotaoInicio></ContainerBotaoInicio>
      </Link>
      <Link to="/estudio">
        <ContainerBotaoEstudio></ContainerBotaoEstudio>
      </Link>
      <Link to="/servico">
        <ContainerBotaoServico></ContainerBotaoServico>
      </Link>
      <Link to="/projeto">
        <ContainerBotaoProjeto></ContainerBotaoProjeto>
      </Link>
      <Link to="/contato">
        <ContainerBotaoContato></ContainerBotaoContato>
      </Link>
    </ContaineraNavSec>
  );
}
