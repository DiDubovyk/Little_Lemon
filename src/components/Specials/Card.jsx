import { MdOutlineDeliveryDining } from "react-icons/md"; 


const Card = (props) => {
  return (
      <div className="card-container">
          <div className="card-img">
              <img src={props.img} alt="Food" />
          </div>
          <div className="card-text">
              <h2>{props.name}</h2>
              <h3>{props.price} $</h3>
              <p>{props.description}</p>
          </div>
          <div className="card-link">
              <a href="#order">Order a Delivery<MdOutlineDeliveryDining size={30} /></a>
          </div>
      
    </div>
  )
}

export default Card
