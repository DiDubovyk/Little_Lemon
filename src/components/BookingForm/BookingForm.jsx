
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";

const BookingForm = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDateChange = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error("Invalid date:", date);
      return;
    }
    const formattedDate = date.toISOString().split("T")[0];
    props.setInputs((prevInputs) => ({
      ...prevInputs,
      date: formattedDate,
    }));

    props.handleDChange(date);
  };

  return (
    <div className="form-container">
      {currentPath === "/book" ? (
        <form onSubmit={props.handleSubmit} className="booking-form">
          <div className="form-description">
            <p>
              This form allows you to reserve a table at our restaurant for your
              upcoming dining experience.
            </p>
            <p>
              Please fill out the following details to secure your reservation.
            </p>
          </div>
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                className="input-field"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                value={props.inputs.fullName || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                className="input-field"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={props.inputs.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                className="input-field"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={props.inputs.phoneNumber || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">
                  Select the date for your reservation:
                </label>
                <DatePicker
                  required
                  name="date"
                  id="date"
                  selected={props.inputs.date}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  minDate={new Date()}
                  maxDate={
                    new Date(new Date().setDate(new Date().getDate() + 30))
                  }
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">
                  Choose the time for your reservation:
                </label>
                <select
                  id="time"
                  name="time"
                  value={props.inputs.time || ""}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {props.availableTimes.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="numberGuests">
                  Specify the number of guests joining for the reservation
                </label>
                <input
                  className="input-field"
                  type="number"
                  id="numberGuests"
                  name="numberGuests"
                  value={props.inputs.numberGuests || ""}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  placeholder="Number of Guests"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ocasion">
                  Let us know if you're celebrating any special ocasion:
                </label>
                <select
                  className="input-field"
                  name="ocasion"
                  id="ocasion"
                  value={props.inputs.ocasion || ""}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select the ocasion
                  </option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="graduation">Graduation</option>
                  <option value="engagement">Engagement</option>
                  <option value="family_gathering">Family Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                value={props.inputs.message || ""}
                rows={5}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-button">
              BOOK NOW
            </button>
          </div>
        </form>
      ) : (
        <div className="message-container">
            <div className="booking-message">
              
            <h2>Your reservation has been confirmed!</h2>
            <p>We look forward to welcoming you.</p>
            <p>
              Feel free to review your reservation details in the profile
              section.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
