import React from 'react'

function Recommended({recommended}){
    const checkRecommend = recommended ? recommended : [];
    const recommendMovie = checkRecommend.slice(0,4);
    return (
        <div className="similerMovies">
        {recommendMovie.map((data,i)=> (
             <img key={data.id} className="similer-img" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`} alt="reco img" />
        ))}
      </div>
    )
}
export default Recommended;