import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from'react-router-dom'
import './BotDetails.css'




function BotDetails({props}) {
  const{id} =useParams();
  const details=(props.find(prop=>prop.id === parseInt(id)))
  



  return(
  
    
    props.map(({ index, name,health, damage, armor,bot_class,catchphrase,avatar_url,created_at,updated_at }) => (
    <div className='details-container'>
    <div class="card" key={index }>
    <img src={avatar_url} class="card-img-top" alt="avatar"/>
    
      <h5 class="card-title">Name:{name}</h5>
      <p class="card-text">Health:{health}</p>
      <p className='card-text'>Damage:{damage}</p>
      <p className='card-text'>armor:{armor}</p>
      <p className='card-text'>bot_class:{bot_class}</p>
      <p className='card-text'>catchphrase:{catchphrase}</p>
      <p className='card-text'>created_at:{created_at}</p>
      <p className='card-text'>updated_at:{updated_at}</p>
      
      

      <Link to='/'>back</Link>
      
    
  </div>
  </div>
   
   
   
   ))
   
  )

}



  





export default BotDetails