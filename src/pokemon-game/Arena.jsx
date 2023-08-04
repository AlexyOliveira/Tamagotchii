import Cards from "../pokemon-game/Cards";
import React from 'react'
import "./Arena.css"
import EnemyCards from "./EnemyCards";

function Arena() {
  return (
    <div className='arena-container'>
        <Cards />
        <EnemyCards />
    </div>
  )
}

export default Arena