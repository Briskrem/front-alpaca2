import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SidebarRoute, SideBarMenu, SideBtnWrap , NavItem} from "./sbElements"

export const SideBar = ({isOpen, toggle}) => {

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <NavItem>
                        <SideBarLink to='/'>HOME</SideBarLink>
                    </NavItem>
                    <NavItem>
                        <SideBarLink to='/crypto'>CRYPTO</SideBarLink>
                    </NavItem>
                    <NavItem>
                        <SideBarLink to='/'>STOCKS</SideBarLink>
                    </NavItem>
                    <NavItem>
                        <SideBarLink to='/'>LOGIN</SideBarLink>
                    </NavItem>
                    <NavItem>
                        <SideBarLink to='/'>LOGOUT</SideBarLink>
                    </NavItem>
                    
                    
                    
                    
                    
                </SideBarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/'>Signin</SidebarRoute>
                </SideBtnWrap> */}
            </SideBarWrapper>
            
        </SideBarContainer>
    )
}