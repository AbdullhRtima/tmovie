import React from 'react'
import {Link} from 'react-router-dom'
import Trailer from './Trailer'
import Similar from './Similar';
import Recommended from './Recommended';
import {Breaker} from '../common'
import StarRatings from 'react-star-ratings'
import Return from '../img/return.png'
import{MovieDetials ,Container} from './styles/Movie';

function MovieDetails({data ,loading}) {
 const trailer = data.trailer.results ;
 const details = data.details ;
 const vote = details.vote_average ? details.vote_average / 2 : 0;
 const cast = data ? data.cast.cast : [];
 const similar = data.similar.results;
 const recommended = data.recommended.results;
    return (
        <Container>details
        {/* movie header start */}
        <MovieDetials>
            <img className="movie-poster"
             src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} 
             alt="single_movie"/>
            <div className="movie_details">
              <h1>{details.original_title}</h1>
              <div className="info">
                    <span className="info_data" >{details.release_date}</span>
                    <div className="rate_data">
                        <StarRatings
                                className="info_star"
                                rating={vote}
                                starDimension="1.8rem"
                                starSpacing=".2rem"
                                starRatedColor="yellow"
                                />
                            <span className="info_rate">{vote}/5</span>
                        </div>
                        </div>
                            <div>
                                {!loading && !details.genres ? <p>Loading</p> : details.genres.map((genre ,i )=>(
                                    <span key={genre.id} className="genre">{genre.name}</span>
                                ))}
                            </div>  
                          <p>{details.overview}</p> 
                        <div className="cast">
                        {cast && cast.slice(0,8).map((data,i)=> (
                            <div key={data.id}>     
                                    <img
                                    className="img" 
                                    src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} 
                                    alt="cast"/>
                            </div>  
                          ))}  
                </div>        
                    <Link to="/">
                            <span>
                                <button className="back-btn">
                                <img className="back-icon" src={Return} alt="back" /> back
                                </button>
                            </span>
                    </Link>
                </div>
          </MovieDetials>
          {/* movier header end here */}
          <Breaker title={"Watch Trailer"}/>
            <Trailer trailer={trailer}/>
          <Breaker title={"Similar movies"}/>
            <Similar similar={similar} />
          <Breaker title={"Recommended"}/>
            <Recommended recommended={recommended}/>
        </Container>
    )
}
export default MovieDetails;