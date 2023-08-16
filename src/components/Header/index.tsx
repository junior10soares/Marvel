import { NavLink } from 'react-router-dom'
import marveLogo from '../../assets/Marvel_Logo.svg.png'
import { ContainerHeader } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <NavLink to="/">
        <img src={marveLogo} alt="logo da marvel" />
      </NavLink>
    </ContainerHeader>
  )
}
