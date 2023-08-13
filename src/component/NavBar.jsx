import {NavLink} from "react-router-dom"

export function NavBar(){

   const getStyle=({isActive})=>({
    fontWeight:isActive ? "bold":""
   })

    return (
        <>
        <nav>
            <NavLink to="/" style={{getStyle}}>Home</NavLink>
        </nav>
        </>
    )
}