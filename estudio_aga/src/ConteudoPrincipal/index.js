import { ContainerNav, ImgCentral } from "./ConteudoStyle";
import ImagemCentral from "../assests/SITE.jpg"
import { Routes, Route } from 'react-router-dom';
import EstudioNav from "../Estudio/index";
import ContatoNav from "../Contato/index";
import ProjetoNav from "../Projeto/index";
import ServicoNav from "../Servico/index";

export default function ConteudoPrincipal() {
    return (
        <ContainerNav>

            <Routes>
            <Route exact path="/" element = {<Home />}/>
                <Route exact path="/estudio" element={<EstudioNav />}/>
                <Route exact path="/servico" element={<ServicoNav />}/>
                <Route exact path="/projeto" element={<ProjetoNav />}/>
                <Route exact path="/contato" element={<ContatoNav />}/>
            </Routes>
        </ContainerNav>
    );
}

function Home() {
    return (
      <ImgCentral src={ImagemCentral}></ImgCentral>
    );
  }