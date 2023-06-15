import Clock from '../utils/Clock'
import './Header.css'
import Info from './Info'
import Lifebar from './Lifebar'

function Header() {
  return (
    <header>
        <Info />
        <Lifebar />
        <Clock />
    </header>
  )
}

export default Header