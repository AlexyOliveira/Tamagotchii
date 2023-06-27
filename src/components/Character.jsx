import React from 'react'
import character from '../img/pikachu-2.gif'
import './Character.css'

function Character() {
  return (
    <div className='character-container'>
        <img src={character} alt="character" />
    </div>
  )
}

export default Character