import { styled } from 'styled-components'

export const ContainerFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 55px;
  width: 100%;
  background: black;
  border-top: 1px solid white;
  justify-content: space-around;
  align-items: center;

  button {
    display: flex;
    background: white;
    color: black;
    justify-content: center;
    width: 100px;
    align-items: center;
    border-radius: 8px;
    height: 40px;
    border: none;
  }
`
