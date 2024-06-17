import './Header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <h1>Hyrul.</h1>
    <nav>
      <NavLink to='/'>Who am I?</NavLink>
      <NavLink to='/'>My projects</NavLink>
      <NavLink to='/'>My previous jobs</NavLink>
    </nav>
    </header>
  )
}

export default Header