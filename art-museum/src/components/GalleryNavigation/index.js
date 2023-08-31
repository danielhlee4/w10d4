import { NavLink } from "react-router-dom";

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to={`/`}>Home Page</NavLink>
        </nav>
    )
}

export default GalleryNavigation