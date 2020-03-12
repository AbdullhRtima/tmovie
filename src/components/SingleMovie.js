import Link from 'next/link'
import StarRatings from 'react-star-ratings'
import YouTube from '@u-wave/react-youtube';
// styles 
import{MovieDetials ,Container} from './styles/Movie'

// this component get exported and displayed at the movie [id] file the dynamic router 
// this is 4 sections all styed in Container  by classNames

//  1- header of image and some data of the movie  
//  2- the trailer 
//  3- the similer movies 
//  4- the recommended movies 

// props = {movie ,vid ,credit ,similar,recommendations} 

function SingleMovie({movie ,vid ,credit ,similar,recommendations}) {

    // get what we need to display from the props
    const trailer = vid.slice(0,1)[0];
    const cast = credit.cast.slice(0,9);
    const similarMovie = similar.slice(0,4);
    const recommendMovie = recommendations.slice(0,4);
    return (
    <Container>
    {/* movie header start */}
        <MovieDetials>
            <img className="movie-poster"
             src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} 
             alt="single_movie"/>
            <div className="movie_details">
              <h1>{movie.original_title}</h1>
              <div className="info">
                    <span className="info_data" >{movie.release_date}</span>
                    <div className="rate_data">
                        <StarRatings
                                className="info_star"
                                rating={movie.vote_average/2}
                                starDimension="1.8rem"
                                starSpacing=".2rem"
                                starRatedColor="yellow"
                                />
                            <span className="info_rate">{movie.vote_average/2}/5</span>
                        </div>
                        </div>
                            <div>
                                {movie.genres.map((genre ,i )=> (
                                    <span className="genre">{genre.name}</span>
                                ))}
                            </div>
                          <p>{movie.overview}</p> 
                        <div className="cast">
                        {cast.map((data,i)=> (
                            <div key={data.id}>     
                                    <img
                                    className="img" 
                                    src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} 
                                    alt="cast"/>
                            </div>  
                          ))}  
                </div>        
                    <Link href="/">
                            <span>
                                <a>
                                    <button className="back-btn">
                                    <img className="back-icon" src="/return.png" alt="back" /> back
                                    </button>
                                </a>
                            </span>
                    </Link>
                </div>
          </MovieDetials>
          {/* movier header end here */}

          {/* trailer sections start */}
            <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" alt="clapperboard"/>
                       </span>Watch Trailer<span> 
               </span> </h1>
            </div>
            <YouTube 
             className="youtube"
              width="600"
              height="400"
              video={`${trailer.key}`}
            />
            {/* trailer section end  */}

            {/* similer movie start */}
             <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" alt="clapperboard" />
                       </span> Similar Movies<span> 
                </span> </h1>
            </div>
            <div className="similerMovies">
                {similarMovie.map((data,i)=> (
                    <>
                     <img className="similer-img" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`} alt="reco img" />
                     </>
                ))}
            </div>
            {/* similer movies end */}
            {/* recommended movies start */}
            <div>
                <h1 className="breaker"><span> 
                     <img className="breaker-icon" src="/clapperboard.png" alt="clapperboard"/>
                       </span>Recommended<span> 
               </span></h1>
               <div className="similerMovies">
                {recommendMovie.map((data,i)=> (
                     <img className="similer-img" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`} alt="reco img" />
                ))}
              </div>
            </div>
            {/* recommended movies end */}
        </Container>
    )
}
export default SingleMovie;

// the end is here i am realy sad to leave you see you in other components 