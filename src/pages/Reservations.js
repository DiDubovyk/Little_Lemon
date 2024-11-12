import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Reservations = (props) => {
  return (
      <>
          <Header />
      <Hero />
      <BookingForm inputs={props.inputs} setInputs={props.setInputs} availableTimes={props.availableTimes} handleDChange={props.handleDChange} handleSubmit={props.handleSubmit} />
          <Footer />
    </>
  )
}

export default Reservations;
