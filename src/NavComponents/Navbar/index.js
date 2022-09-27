import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
NavItem, NavLinks, NavBtnLink, NavBtn} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

export const Navbar = ({toggle}) => {
    return (
        
        <Nav>
            <NavbarContainer>
                <NavLogo to={'/'}>NCS</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/crypto'>HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/crypto'>CRYPTO</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/'>STOCKS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/'>LOGIN</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/'>LOGOUT</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        
    )
}
// export const Navbar = () => {
//     return (
//         <div>
//             <nav>
//                 <NavbarContainer>
//                     <navLogo>dollar</navLogo>
//                 </NavbarContainer>
//             </nav>
//         </div>
//     )
// }