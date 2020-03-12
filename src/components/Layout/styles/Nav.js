import styled from 'styled-components';

const Nav =styled.div`
    position: fixed;
    display :flex;
    justify-content:space-around;
    top: 0;
    left: 0;
    background-color: #081c24;
    width: 100%;
    z-index: 999;
    height: 10rem;
    img{
        margin-top:1rem;
        height:8rem;
        cursor: pointer;
    }
    h1{
        color:#01d277;
        text-transform:uppercase;
        cursor: pointer;
        
    }
    .link{
        text-decoration:none;
    }

`
export {
    Nav
}