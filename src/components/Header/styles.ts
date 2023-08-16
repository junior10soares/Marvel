import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.red};
  border-bottom: 1px solid white;
  cursor: pointer;

  img {
    height: 100%;
  }
`
