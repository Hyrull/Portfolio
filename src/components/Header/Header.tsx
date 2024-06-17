import './Header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <h1>Hyrul.</h1>
    <nav>
      <NavLink to='/'>Qui suis-je</NavLink>
      <NavLink to='/'>Mes travaux</NavLink>
      <NavLink to='/'>Mes expériences</NavLink>
    </nav>
    </header>
  )
}

export default Header