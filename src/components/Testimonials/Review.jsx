const Review = (props) => {
  return (
    <>
      <div>
        <img src={props.photo} alt="Profile" />
        <h3>{props.name}</h3>
      </div>
      <div>
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
    </>
  );
};

export default Review;
