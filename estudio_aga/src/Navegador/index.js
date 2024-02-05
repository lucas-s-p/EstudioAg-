import { ContainerNav, ContaineraNavSec, ImgCentral, ImgCentralSec, LogoNavegadorSec } from "./NavegadorStyle";
import ImagemCentral from "../assests/SITE.jpg";
import ImagemCentralSec from "../assests/pattern-02.png";
import LogoNavegador from "../assests/logo.png";

export default function NavegadorNav() {
    return (
        <ContainerNav>
            <ContaineraNavSec>
                <ImgCentralSec src= {ImagemCentralSec}></ImgCentralSec>
                <LogoNavegadorSec src = {LogoNavegador}></LogoNavegadorSec>
            </ContaineraNavSec>
            <ImgCentral src = {ImagemCentral}></ImgCentral>
        </ContainerNav>
    )
}