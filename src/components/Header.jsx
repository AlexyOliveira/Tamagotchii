import Clock from '../utils/Clock'
import './Header.css'

function Header() {
  return (
    <header>
        <div className='life-bar'>
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
            <div className='div-life' />
        </div>
        <Clock />
    </header>
  )
}

export default Header