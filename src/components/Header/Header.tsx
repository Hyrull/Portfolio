import './Header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <h1>Hyrul.</h1>
    <nav>
      <NavLink to='/'>About me</NavLink>
      <NavLink to='/'>My works</NavLink>
    </nav>
    </header>
  )
}

export default Header