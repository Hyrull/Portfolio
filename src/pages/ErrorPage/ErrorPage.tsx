import './ErrorPage.scss'
import { NavLink } from 'react-router-dom'
import korok from './../../assets/img/youfoundme.png'

function ErrorPage() {
  return (
    <div className='error-page'>
      <div className='error-page-text'>
        <h1>This page doesn't seem to exist.</h1>
        <NavLink to='/'>Back to light</NavLink>
      </div>
      <img src={korok} alt='Cute creature saying "You found me!"'></img>
    </div>
  )
}

export default ErrorPage