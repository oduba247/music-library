import React from 'react'
import HeroPic from './asset/illustration-hero.svg'

const Header = () => {
  return (
    <div>
       <img src={HeroPic} className='Heropic' alt="Heropic" />
    
    </div>
  )
}

export default Header