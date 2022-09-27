import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    
    width: 100%;
    height: 4rem;
    display: flex; 
    justify-content: center;
    align-items:center:
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
    border-top: 6px solid yellow;
    border-bottom: 2px solid yellow;
    @media screen and (max-width: 960px){
        // transition: .8s all ease
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    background: rgb(23, 23, 23);
`
export const NavLogo = styled(LinkR)`
    color: #ffff00;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 620px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 35%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        // color: yellow;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 620px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px
`

export const NavLinks = styled(LinkR)`
    color: yellow;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 620px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border; none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`