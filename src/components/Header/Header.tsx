import './Header.scss'
import { Link } from 'react-scroll'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <header>
      <div className='main-container'>
        <NavLink to='/'><h2>Xavier Léonard</h2></NavLink>
        {isHomepage ? (
          <nav data-itemtype="https://schema.org/SiteNavigationElement" data-itemscope="">
            <Link data-itemprop="url" to='my-skills' smooth={true} duration={500}>Compétences</Link>
            <Link data-itemprop="url" to='my-works' smooth={true} duration={500}>Mes projets</Link>
            <Link data-itemprop="url" to='about-me' smooth={true} duration={500}>À propos</Link>
          </nav>
        ) : (
          <nav data-itemtype="https://schema.org/SiteNavigationElement" data-itemscope="">
            <NavLink data-itemprop="url" to='/'><span data-itemprop="name">Retour à l'accueil</span></NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header