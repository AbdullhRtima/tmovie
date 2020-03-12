import React from 'react'
import YouTube from '@u-wave/react-youtube';

export default function Trailer({trailer}) {
    const trailerInitial  = trailer ? trailer : [];
    const trailerData = trailerInitial.slice(0,1)[0];
    const trailerKey = trailerData ? trailerData : [];
    console.log(trailerKey.key)
    return (
        <YouTube 
         className="youtube"
         width="600"
         height="400"
         video={`${trailerKey.key}`}
       />
    )
}
