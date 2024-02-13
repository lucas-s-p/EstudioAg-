import { Container, ContainerMeioComunicacao, ContatoTitulo, DescricaoContato, LinhaDiv, MeioComunicacaoDesc, MeioComunicacaoTitulo } from "./ContatoStyle";

const ContatoNav = () => {
    return (
        <Container>
            <ContatoTitulo>Contato</ContatoTitulo>
            <DescricaoContato>Entre em contato através do formulário abaixo ou:</DescricaoContato>
            <ContainerMeioComunicacao>
                <MeioComunicacaoTitulo>TELEFONE:</MeioComunicacaoTitulo>
                <MeioComunicacaoDesc>+ 55 83 9.8731-9624</MeioComunicacaoDesc>
            </ContainerMeioComunicacao>
            <ContainerMeioComunicacao>
                <MeioComunicacaoTitulo>INSTAGRAM:</MeioComunicacaoTitulo>
                <MeioComunicacaoDesc>instagram.com/estudioaga.arq</MeioComunicacaoDesc>
            </ContainerMeioComunicacao>
            <ContainerMeioComunicacao>
                <MeioComunicacaoTitulo>E-MAIL:</MeioComunicacaoTitulo>
                <MeioComunicacaoDesc>estudioaga.arq@gmail.com</MeioComunicacaoDesc>
            </ContainerMeioComunicacao>
            <LinhaDiv></LinhaDiv>
        </Container>
    );
}

export default ContatoNav;