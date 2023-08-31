import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)
    const galleriesList = galleries.map((gallery) => {
        return <NavLink to={`/galleries/${gallery.id}`} key={gallery.id} activeClassName='active'>
            {gallery.name}
        </NavLink>
    })
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to={`/`}>Home Page</NavLink>
            {galleriesList}
        </nav>
    )
}

export default GalleryNavigation