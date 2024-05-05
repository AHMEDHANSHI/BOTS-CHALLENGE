import React from 'react'
import BotList from './BotList.js'
import './BotList.css'



function BotCollection({props}) {
  return (
   
    <div className='content'>
       
        <BotList props={props} />
        
        
    </div>
  )
}

export default BotCollection