import styled from 'styled-components';

// card style go to the end to see what we are expored for you .....

const MovieCards =styled.ul`
    list-style :none;
    position:relative;
  @media screen and (max-width: 476px) {
    font-size:1.5rem;
    margin-left:-5rem;
}
`
const Card = styled.div`
    position: relative;
    cursor: pointer;
    display:flex;
    width: 800px;
    height: 350px;
    margin: 100px auto; 
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 1);
    &:hover{
      box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 1);
  }
    &:hover{
        transform: scale(1.02);
        transition: all 0.4s;
    }
    .back_shadow{
      box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
        &:hover{
      box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
        }
    }
    .info_section{
        position: relative;
        width: 100%;
        height: 100%;
        background-blend-mode: multiply;
        z-index: 3;
        border-radius: 10px;
    }
   .blur_back{
        position: absolute;
        top: 0;
        width:2rem;
        height: 100%; right: 0;
        width:30%;
        border-radius: 11px;
    }
@media screen and (min-width: 868px) {
  .movie_header{
    width: 60%;
  }  
  .info_section{
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  .blur_back{
    width: 40rem;
    background-position: -100% 10% !important;  
  }
}
@media screen and (max-width: 868px) {
  max-width:45rem;
  display:flex;
  .movie_header{
    width: 60%;
 
  }  
  .info_section{
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
    max-width:45rem;
  }
  .blur_back{
    display:none;
    max-width: 40rem;
    /* margin-right:-100rem; */
    /* background-position: -100% 10% !important;   */
  }
}
/* @media screen and (max-width : 868px) {
  .blur_back{
    display:none;
  }
} */
@media screen and (max-width: 868px) {
  .movie_card{
    width: 95%;
    margin: 70px auto; 
    min-height: 350px;
    height: auto;
  }
  
  .blur_back{
    width: 100%;
    background-position: 50% 50% !important;  
  }
  .movie_header{
    h1{
      font-size:.5rem;
    }
    width: 100%;
    margin-top: 85px;
  }
  .info_section{
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}
`
const MovieHeader = styled.div`
      position: relative;
      display:flex;
      padding:2rem;
      color:white;
  .movie-img{
        display:flex;
        flex-direction:column;
        border-radius:1rem;
        position: relative;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
      }
      h1{
          margin-top:1px;
          font-size:2rem;
      }
      span{
        margin-top:-1rem;
        color:#01d277;
        font-size:2rem;
      }
      p{
        margin-top:2rem;
        width:30rem;
        span{
          color:#01d277;
        }
      }
    .info{
      display:flex;
      justify-content :space-between;
      font-size:2rem;
      margin-top:-1rem;
      width:30rem;
      .info_rate{
        margin-top:.01rem;
        margin-left:-2rem;
      }
      .info_data{
        margin-top:.01rem;
      }
      .info_star{
        margin-top:.01rem;
      }
    }
    .more-btn{
      background-color:#01d277;
      border-radius:.8rem;
      font-size:1.7rem;
      border: none;
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
    .video-icon{
      font-size:1.5rem;
      width:2rem;
    }
`

export {
    Card,
    MovieHeader,
    MovieCards
}