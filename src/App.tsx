import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './globalStyle'
import { Container } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import tema from './Tema'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
