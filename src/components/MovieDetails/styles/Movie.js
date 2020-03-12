import styled from 'styled-components';

const MovieDetials = styled.div`
    margin-top:10rem;
    position:relative;
    z-index:1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .movie-poster{
        border-radius:1.5rem;
    }
    .movie_details{
        color:#ffff;
        display:flex;
        margin-top:-3rem;
        flex-direction:column;
        margin-left:1rem;
    }
    .info{
        margin-top:-2rem;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:40rem;
        font-size:2rem;
    }
    .rate_data{
        margin-right:7rem;
    }
    .info_rate{
        margin-left:1rem;
    }
    .back-ground{
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        width:100%;
        height:100%;
    }
    h1{
        text-transform:uppercase;
    }
    .genre{
        color:#01d277;
        margin-right:1rem;
    }
    .cast{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        img{
            border-radius:50%;
            width: 45px;
            height: 45px;
            margin-right:1rem; 
        }
    }
    .back-btn{
      background-color:#01d277;
      border-radius:.8rem;
      font-size:2rem;
      border: none;
      margin-top:4rem;
      width:15rem;
      height:3rem;
      z-index:.5;
      text-align: center;
      cursor: pointer;
      box-shadow: 2px 5px 5px rgba(57, 140, 63, 0.6);
      &:focus {
        outline:0;
        }
      &:hover {
        box-shadow: 2px 6px 6px rgba(57, 140, 63, 0.6);
      }
    }
    .back-icon{
      font-size:1rem;
      width:2rem;
      height:1.8rem;
    }
@media screen and (max-width:800px) {
    margin-top:10rem;
    position:relative;
    z-index:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
`
const Container = styled.div`
    .youtube{
        margin-left:20rem;
        margin-top:1rem;
    }
    .breaker{
        display:flex;
        text-transform:uppercase;
        justify-content:center;
        color:#01d277;   
    }
    .breaker-icon{
        width:3rem;
        margin-left:1rem;
        margin-right:1rem;
    
    }
    .similerMovies{
        display:flex;
        justify-content:center;
        flex-direction:row;
        
    }
    .similer-img{
        width:20rem;
        margin-right:1rem;
    }
 @media screen and (max-width:800px) {
    .similerMovies{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .similer-img{
        width:20rem;
        margin-top:1rem;
        margin-left:8rem;
    }
    .youtube{
        margin-left:20rem;
        margin-top:2rem;
        width:40rem;
        margin-left:-.8rem;
   }
}
`
export {MovieDetials ,Container}