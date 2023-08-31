import { NavLink } from "react-router-dom";

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)
    const galleriesList = galleries.map((gallery) => {
        return <NavLink to={`/galleries/${gallery.id}`}>
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