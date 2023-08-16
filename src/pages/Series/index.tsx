import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Container, ContainerGrid } from './styles'
import { MarvelContext } from '../../contexts/MarvelContexts'
import { NavLink } from 'react-router-dom'

export function Series() {
  const { series } = useContext(MarvelContext)

  return (
    <Container>
      <Header />
      <ContainerGrid>
        {series.map((serie) => (
          <div key={serie.id}>
            <NavLink to={serie.urls[0].url} target="_blank">
              <img
                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                alt={serie.title}
              />{' '}
            </NavLink>
            <strong>{serie.title}</strong>
          </div>
        ))}
      </ContainerGrid>
    </Container>
  )
}
