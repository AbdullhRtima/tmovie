const api=()=>{
    return `https://api.themoviedb.org/3/movie/popular?api_key=5033c761b29137a4b26a100f295b65c8&language=en-US&page=1`
}
const apiQuery=(endpoint)=>{
    return `https://api.themoviedb.org/3/movie/${endpoint}`
}
export {api,apiQuery}