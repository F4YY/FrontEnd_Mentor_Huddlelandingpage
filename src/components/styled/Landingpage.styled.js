import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Styledhuddlelandingpage = styled.div`
    display: flex;
    flex-direction:row;
    margin:0;
    @media screen and (max-width:960px){
        margin: auto;
    }
    @media screen and (max-width:600px){
        margin:0;
        flex-direction: column;
        width: auto;
        height: auto;
    }
`
export const Huddleleftpage = styled(Styledhuddlelandingpage)`
    flex-direction: column;
    margin:30px 30px;
    @media screen and (max-width:960px){
        margin:20px auto;
        width: 50%;
        height: auto;
    }
    @media screen and (max-width:600px){
        margin: 30px 30px;
        width: auto;
        height: auto;
    }
`
export const Huddlelogo = styled.img`
    display: flex;
    width: 200px;
    margin:0 40px 20px;
    @media screen and (max-width:960px){
        width: 50%;
        margin:0 40px 0;
    }
    @media screen and (max-width:600px){
        width: 140px;
        margin:0 0 70px;
    }
`
export const Huddlemockups = styled(Huddlelogo)`
    width: 680px;
    margin:40px 40px 0;
    @media screen and (max-width:960px){
        width: 100%;
        margin:20px 40px 0;
    }
    @media screen and (max-width:600px){
        margin:0;
        width: auto;
        height: auto;
    }
`
export const Huddlerightpage = styled(Styledhuddlelandingpage)`
    flex-direction: column;
    margin:40px 80px 10px 10px;
    justify-content: center;
    @media screen and (max-width:960px){
        width:50%;
        margin: 0 30px 0;
    }
    @media screen and (max-width:600px){
        width:80%;
        margin:0 40px;
    }
`
export const Registerbutton = styled.button`
    font-family:var(--Primary-font-style);
    color:var(--Violet);
    border-radius: 50px;
    width: 170px;
    height:40px;
    margin:10px 0;
    box-shadow: 0 5px 5px 5px rgba(0,0,0,0.2);
    border-style:none;
    &:hover{
        color:#fff;
        background-color: var(--Soft-Magenta);
        cursor: pointer;
    }
    @media screen and (max-width:960px){
        margin:10px 40px;
        height:35px;
        width: 120px;
    }
    @media screen and (max-width:600px){
        margin:10px auto;
        height:38px;
        width: 200px;
    }
`
export const Huddlefootericon = styled(Styledhuddlelandingpage)`
    justify-content: flex-end;
    gap:12px;
    margin:160px 10px 0;
    @media screen and (max-width:960px){
        flex-direction:row;
        justify-content: flex-end;
        gap:10px;
        margin: 10px 40px 10px 40px;
    }
    @media screen and (max-width:600px){
        flex-direction:row;
        justify-content: center;
        gap:10px;
        margin: 60px auto 40px;
    }
`
export const Footericon = styled(FontAwesomeIcon)`
    border-radius: 50%;
    color:#fff;
    border: 1px solid #fff;
    padding: 6px;
    font-size: 20px;
    &:hover{
        color:var(--Soft-Magenta);
        border-color: var(--Soft-Magenta);
        cursor: pointer;
    }
    @media screen and (max-width:960px){
        font-size: 17px;
    }
    @media screen and (max-width:960px){
        font-size: 20px;
    }
`
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 10px;
    font-size: 10px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 10px;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`