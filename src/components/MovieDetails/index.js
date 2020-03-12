import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import {apiQuery} from '../../Util/api'

//components 
import MovieDetails from './MovieDetails'

function Details(props) {
    const [data , setData]= useState({
            details : [],
            trailer :[] ,
            cast:[],
            similar:[] ,
            recommended:[]
    }); 
    const [loading, setLoading] = useState(false);
    const [error ,setErorr] = useState("");

    useEffect(() => {
        const id = props.match.params.id 
        try {
            const fetchData = async () => {
                setLoading(true);
                const getData = await axios.get(apiQuery(`${id}?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`));
                const getVid  = await axios.get(apiQuery(`${id}/videos?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US`));
                const getCredits = await axios.get(apiQuery(`${id}/credits?api_key=5033c761b29137a4b26a100f295b65c8`));
                const getSimilar = await axios.get(apiQuery(`${id}/similar?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`)); 
                const getRecommended = await axios.get(apiQuery(`${id}/recommendations?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`));
                setLoading(false)
                setData({ 
                    details: getData.data,
                    trailer: getVid.data,
                    cast :getCredits.data,
                    similar:getSimilar.data,
                    recommended:getRecommended.data
                });
            };
            fetchData();
        } catch (err) {
            setLoading(false);
            setErorr(err);
        }
  
    }, [])

    return (
        <div>
            {error && <p>opps error loading data</p>}
            {loading ? <p>loading ...</p> :
             <MovieDetails
              loading={loading}
              data={data}
            /> }
        </div>
    )
}
export default Details ;     {/* {details.genres.map((genre ,i )=> (
    <span className="genre">{genre.name}</span>
))} */}