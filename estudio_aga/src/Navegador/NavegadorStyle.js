import { styled } from "styled-components";
import BotaoInicio from "../assests/etiquetas_Prancheta 1(1).png";
import BotaoEstudio from "../assests/etiquetas-02.png";
import BotaoServico from "../assests/etiquetas-03.png";
import BotaoProjeto from "../assests/etiquetas-04.png";
import BotaoContato from "../assests/etiquetas-05.png";

export const ContaineraNavSec = styled.div`
  position: relative;
  width: 15vw;
  height: 100%;
  display: flex;
`;

export const ImgCentralSec = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LogoNavegadorSec = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 2;
  left: 19%;
  top: 5%;
`;

export const ContainerBotaoInicio = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-image: url(${BotaoInicio});
  background-size: cover;
`;

export const ContainerBotaoEstudio = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  cursor: pointer;
  background-image: url(${BotaoEstudio});
  background-size: cover;
`;

export const ContainerBotaoServico = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  cursor: pointer;
  background-image: url(${BotaoServico});
  background-size: cover;
`;

export const ContainerBotaoProjeto = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  cursor: pointer;
  background-image: url(${BotaoProjeto});
  background-size: cover;
`;

export const ContainerBotaoContato = styled.div`
  position: absolute;
  width: 150px;
  height: 30px;
  z-index: 2;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  background-image: url(${BotaoContato});
  background-size: cover;
`;
