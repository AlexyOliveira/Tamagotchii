import Clock from '../utils/Clock'
import './Header.css'
import Lifebar from './Lifebar'

function Header() {
  return (
    <header>
        <Lifebar />
        <Clock />
    </header>
  )
}

export default Header