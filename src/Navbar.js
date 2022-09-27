import { NavLink } from "react-router-dom"
import { useState } from "react"
import './styles/Navbar.css'
import { RegularNav } from "./RegularNav"


export const Navbar = () => {

    return (
        <div >
            <RegularNav />       
        </div>
    )
}