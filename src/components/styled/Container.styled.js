import styled from "styled-components";
import bgdesktop from '../images/bg-desktop.svg';
import bgmobile from '../images/bg-mobile.svg';

export const Container = styled.div`
    --Violet: hsl(257, 40%, 49%);
    --Soft-Magenta: hsl(300, 69%, 71%);
    --Primary-font-style:'Poppins';
    --Primary-font-weights: 600;
    --Secondary-font-style:'OpenSans';
    --Secondary-font-weights: 400;
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
    width:100wh;
    background-image: url(${bgdesktop});
    background-size: contain;
    background-repeat: no-repeat;
    background-color:var(--Violet);
    @media screen and (max-width:600px){
        background-image: url(${bgmobile});
    }
    h1{
        font-size: 2.2em;
        font-family: var(--Primary-font-style);
        font-weight: var(--Primary-font-weights);
        color: #fff;
        margin:140px 20px 10px 0;
        @media screen and (max-width:960px){
            font-size: 1.2em;
            justify-content: center;
            margin:70px 20px 10px 40px;
        }
        @media screen and (max-width:600px){
            font-size: 1.5em;
            margin:10px 0;
            text-align: center;
        }
    }

    p{
        font-size: .9em;
        font-family: var(--Primary-font-style);
        font-weight: var(--Secondary-font-weights);
        line-height: 1.6em;
        color: #fff;
        @media screen and (max-width:960px){
            font-size: .7em;
            margin: 10px 40px;
        }
        @media screen and (max-width:600px){
            text-align: center;
            font-size: .8em;
            letter-spacing: .06em;
            margin: 10px 10px;
        }
    }

    h4{
        font-size:.9em;
        color:var(--Soft-Magenta);
    }
`