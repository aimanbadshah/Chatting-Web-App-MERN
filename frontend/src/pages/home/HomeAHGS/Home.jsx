import LogoutButton from "../../../components/sidebar/LogoutButton";
import Footer from "./Footer.jsX";
import Header from "./Header";
import ImageGallery from "./ImageGallery";

const Home = () => {
  return (
    <div>
      <Header />
      <ImageGallery />
      <LogoutButton />
      <Footer />
    </div>
  )
}

export default Home;
