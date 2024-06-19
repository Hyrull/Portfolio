import './ErrorPage.scss'
import { NavLink } from 'react-router-dom'
import korok from './../../assets/img/youfoundme.png'

function ErrorPage() {
  return (
    <div className='error-page'>
      <div className='error-page-text'>
        <h1>Vous voilà en terre inconnue...</h1>
        <NavLink to='/'>Retour à la lumière</NavLink>
      </div>
      <img src={korok} alt='Cute creature saying "You found me!"'></img>
    </div>
  )
}

export default ErrorPage