import { REVIEWS } from "../../constants";
import Review from "./Review";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-heading">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials-content">
        {REVIEWS.map((review) => (
          <Review
            photo={review.photo}
            name={review.name}
            text={review.text}
            stars={review.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
