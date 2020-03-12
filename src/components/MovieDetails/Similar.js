import React from 'react';

function Similar({similar}) {
    const checkSimiler = similar ? similar : [];
    const similarMovie = checkSimiler.slice(0,4);
    return (
        <div className="similerMovies">
        {similarMovie.map((data,i)=> (
            <div key={data.id}>
             <img className="similer-img" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`} alt="reco img" />
             </div>
        ))}
    </div>
    )
}
export default Similar ;