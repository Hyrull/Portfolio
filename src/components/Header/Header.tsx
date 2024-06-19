import './Header.scss'
import { Link } from 'react-scroll'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <header>
    <NavLink to='/'><h1>Hyrul</h1></NavLink>
    {isHomepage ? (
    <nav>
        <Link to='my-skills' smooth={true} duration={500}>My skills</Link>
        <Link to='my-works' smooth={true} duration={500}>My works</Link>
        <Link to='about-me' smooth={true} duration={500}>About me</Link>
    </nav>
    ) : (
    <nav>
        <NavLink to='/'>Back to homepage</NavLink>
    </nav>
    )}
    </header>
  )
}

export default Header