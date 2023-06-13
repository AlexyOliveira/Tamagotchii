import React from 'react'
import character from '../img/pikachu.gif'
import './Character.css'

function Character() {
  return (
    <div className='character-container'>
        <img src={character} alt="character" />
    </div>
  )
}

export default Character