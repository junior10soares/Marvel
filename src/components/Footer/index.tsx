import { ContainerFooter } from './styles'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <ContainerFooter>
      <NavLink to="/series">
        <button>Series</button>
      </NavLink>
    </ContainerFooter>
  )
}
