import React from 'react';
import clapperboard from './img/clapperboard.png'

// common resude componets here 

const Breaker =({title})=> {
    // braker with discription name 
    return(
        <div>
        <h1 className="breaker">
            <span> 
                <img className="breaker-icon" src={clapperboard} alt="clapperboard" />
                </span>{title}<span> 
           </span> 
        </h1>
    </div>
    )
}

export {Breaker}