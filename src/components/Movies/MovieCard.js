import React ,{useState ,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Card ,MovieHeader,MovieCards} from './styles/Card'
import StarRatings from 'react-star-ratings'

//api
import axios from 'axios';
import {api} from '../../Util/api'

//img 
import video from '../common/img/video.png'

function MovieCard() {
    const [movie , setMovie] = useState([]);
    const [isLoading ,setLoading] = useState(false);
    const [error , setError] = useState("");
    
    useEffect(()=>{
        try {
            const fetchMovies = async()=>{
                setLoading(true);
                const res = await axios.get(api())
                if(res.data){
                    const topTen = res.data.results.slice(0,10);
                    setMovie(topTen);
                    setLoading(false)
                }else{
                    setLoading(true)
                }
            }
            fetchMovies();
        } catch (error) {
            setLoading(false);
            setError(error)
        }
    },[])
    return (
        <>
        {movie.map((movie,i)=> (
        <Link to={`/movie/${movie.id}`} className="link" key={movie.id} >
        <MovieCards key={movie.id}>
            <li>
            <Card>
            <div className="info_section">
                    <MovieHeader>
                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="movie-image"/>
                            <div>
                            <h1>{movie.title}</h1>
                                <div className="info">
                                <span className="info_data" >{movie.release_date}</span>
                                <StarRatings
                                    className="info_star"
                                    rating={movie.vote_average/2}
                                    starDimension="2rem"
                                    starSpacing=".2rem"
                                    starRatedColor="yellow"
                                    />
                                    <span className="info_rate">{movie.vote_average/2}/5</span>
                                </div>
                                    <p>{movie.overview.substring(0,100)}
                                    </p>
                                    <Link to={`/movie/${movie.id}`}>
                                    <span>
                                            <button className="more-btn">
                                            <img className="video-icon" src={video} alt="video icon" /> show more
                                            </button>
                                    </span>
                                    </Link>
                            </div>
                    </MovieHeader>
                </div>
                <img className="blur_back" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.backdrop_path}`} alt="movie-image"/>
            </Card>
            </li>
        </MovieCards>
        </Link>
        ))}
        </>
    )
}
export default MovieCard ;
