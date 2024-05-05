import React from 'react'
import './bot.css'
import {Link} from'react-router-dom'





  
    function BotList({ props }) {
      
        return props.map(({ id, name,health, damage, armor,bot_class,catchphrase,avatar_url,created_at,updated_at }) => (
          <div class="card" key={id} >
          <img src={avatar_url} class="card-img-top" alt="avatar"/>
          <div class="card-body">
            <h5 class="card-title">Name:{name}</h5>
            <p class="card-text">Health:{health}</p>
            <p className='card-text'>Damage:{damage}</p>
        
            <Link to={`./details/${id}`} class="btn btn-primary">DETAILS</Link>
            
            
          </div>
        </div>
         
         
         
         ))
         
        ;
      
      }
      


export default BotList