import { styled } from 'styled-components'

export const Container = styled.div`
  background: black;
`
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 20px;
  grid-gap: 20px;
  @media (max-width: 855px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 690px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 345px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    border: 1px solid white;
    height: 220px;
    width: 150px;
    cursor: pointer;
  }
  strong {
    font-size: 12px;
    max-width: 150px; /* Set the maximum width */
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide overflow */
    text-overflow: ellipsis; /* Show ellipsis (...) for overflowed text */
  }
`
