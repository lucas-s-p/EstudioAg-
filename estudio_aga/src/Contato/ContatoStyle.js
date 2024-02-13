import { styled } from "styled-components";

export const Container = styled.div`
  width: 85vw;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: DM Sans;
`;

export const ContatoTitulo = styled.text`
  width: 10vw;
  height: 8vh;
  padding-left: 40px;
  padding-top: 55px;
  font-size: 25px;
  color: #503854;
`;

export const DescricaoContato = styled.text`
  width: 40vw;
  height: 6vh;
  padding-left: 40px;
  font-size: 15px;
  color: #503854;
`;
export const ContainerMeioComunicacao = styled.text`
  width: 30vw;
  height: 6vh;
  display: flex;
  flex-direction: row;
`;

export const MeioComunicacaoTitulo = styled.text`
  width: 8vw;
  height: 6vh;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  color: #503854;
  font-size: 13px;
  font-weight: 600;
`;

export const MeioComunicacaoDesc = styled.text`
  width: 40vw;
  height: 20vh;
  padding-left: 7px;
  font-size: 13px;
  color: #503854;
`;

export const LinhaDiv = styled.div`
  border-top: 1px solid black;
  width: 35%;
  margin-left: 40px;
  margin-top: 10px;
`;
