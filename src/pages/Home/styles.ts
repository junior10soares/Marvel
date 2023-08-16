import { styled } from 'styled-components'
import marvel from '../../assets/marvel.jpg'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Para evitar barras de rolagem */
  background: url(${marvel}) no-repeat top left / cover; /* Ajuste o valor de background-size conforme necessário */
  -webkit-font-smoothing: antialiased;
`
