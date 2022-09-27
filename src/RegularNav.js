import { NavLink } from "react-router-dom"
import { useState } from "react"
import './styles/Navbar.css'
export const RegularNav = () => {
    


    const [isMobile, setIsMobile] = useState(false)
    
    return (
        <div className="Navbar">
            <h3 className="logo">NCS</h3>
            <ul className={isMobile? "nav-list-mobile" : "nav-list"} >
                <li >
                    <NavLink  to={'/'} >Home</NavLink>
                </li>
                <li >
                    <NavLink  to={'/crypto'}>Crypto</NavLink>
                </li>
                <li>
                    <NavLink  to={'/'}>Stocks</NavLink>
                </li>
                <li>
                    <NavLink  to={'/'}>Login</NavLink>
                </li>
                <li  >
                    <NavLink  to={'/'}>Logout</NavLink>  
                </li>
            </ul>
            <span className="burger" >
                <button onClick={()=>setIsMobile(!isMobile)} className={isMobile? "but-mobile" : "but" } >
                    {isMobile? <span className="orb">hi</span> : <span className="orb"></span>}
                </button>
            </span>             
        </div>
    )
}
