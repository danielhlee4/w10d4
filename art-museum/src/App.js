import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

const App = (props) => {
  // const galleryList = harvard.map((gallery) => {
  //   return <GalleryNavigation banana={gallery.galleryid} />
  // })
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  )
}

export default App;
