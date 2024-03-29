import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/TituloEstilizado";
import bannerBackground from "./assets/banner.png"

const FundoGradiente  = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const BannerContainer = styled.div`
  margin-inline: auto;
  display: flex;
  gap: 24px;
`

function App() {


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <BannerContainer>
          <BarraLateral />
          <Banner 
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
          />
        </BannerContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
