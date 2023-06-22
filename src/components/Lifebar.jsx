import React from 'react'
import './Lifebar.css'
import { useSelector } from 'react-redux';

function Lifebar() {
  const getHunger = useSelector((state) => state.setPokeInfoReducer.hunger);
  return (
<div className='life-bar'>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
    <div className='div-life'><i className="fa-solid fa-heart" /></div>
</div>
  )
}

export default Lifebar