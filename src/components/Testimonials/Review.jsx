const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-heading">
        <img src={props.photo} alt="Profile" />
        <h3>{props.name}</h3>
      </div>
      <div className="review-text">
        <div>
          {Array(props.stars)
            .fill()
            .map((_, index) => (
              <span key={index} style={{ color: "gold", fontSize: "30px" }}>
                &#9733;
              </span>
            ))}
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Review;
