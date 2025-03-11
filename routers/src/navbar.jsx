import {Link, Outlet} from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to ="/about">About</Link></li>
                <li> <Link to="/services">Services</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/help">Help</Link></li>
            </ul>
        </nav>

        <Outlet/>
        <footer>
            <h1>Footer</h1>
        </footer>
        </>
    )
}
export default Navbar