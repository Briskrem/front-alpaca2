import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    // background does not need public in path....
    background-image: url('pics/bg.jpg');
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.8rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: yellow;
    
`

export const SideBarWrapper = styled.div`
    color: #fff;
`
export const SideBarMenu = styled.ul`

    // display: grid;
    // grid-template-columns: 1fr ;
    // grid-template-rows: repeat(6, 80px);
    // text-align: center;

    // @media screen and (max-width: 480px){
    //     grid-template-rows: repeat(6, 80px);
    // }
`

export const SideBarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    color: yellow;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        // color: green;
        // transform: scale(.5);
        // box-shadow: 0 0 10px black,
        // 0 0 40px black;
        transition: 0.2s ease-in-out;
    }
`

export const NavItem = styled.li`
    display:block;
    border: 2px solid yellow;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px yellow,
    0 0 20px black;
    margin: 1rem 0;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover{
        transform: scale(.9);
        box-shadow: 0 0 10px black,
        0 0 40px black,
        0 0 60px black;
       
        
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

// export const SidebarRoute = styled(LinkR)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 16px 64px;
//     color: #010606;
//     font-size: 3rem;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: yellow;
//     }

// `