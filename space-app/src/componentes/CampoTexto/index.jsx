import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    margin: 1em 0 0 0 ;
`

const CampoTextoEstilizado = styled.input`
    padding: 12px 16px;
    width: 500px;
    height: 56px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    border-radius: 10px;
    border-color: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    border: 2px solid;
    background: transparent;
    box-sizing: border-box;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = (props) => {
    return(
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="Ícone de Lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto