import { REVIEWS } from "../../constants";
import Review from "./Review";

const Testimonials = () => {
  return (
      <div className="testimonuals-container">
          {REVIEWS.map((review => (
              <Review photo={review.photo} name={review.name} text={review.text} stars={review.stars} />
          )))}
    </div>
  )
}

export default Testimonials;
