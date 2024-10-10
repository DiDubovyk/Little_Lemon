import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header"
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
      <>
          <Header />
          <Hero />
          <Specials />
          <Testimonials />
          <About />
          <Footer />
    </>
  )
}

export default Home;
