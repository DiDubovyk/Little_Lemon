import { useState } from "react";
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [inputs, setInputs] = useState({
    date: null,
    time:""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setInputs((prevInputs) => ({
      ...prevInputs,
      date: formattedDate,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="booking-form">
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
              value={inputs.fullName || ""}
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
              value={inputs.email || ""}
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
              value={inputs.phoneNumber || ""}
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
                selected={inputs.date}
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
              {/* <TimePicker
                onChange={handleChange}
                value={inputs.time || ""}
                min="09:00" // Minimum time
                max="17:00" // Maximum time
                step={30} // 30-minute intervals
                format="HH:mm" // 24-hour format
                disableClock={true}
                clearIcon={null}
                className="input-field"
              /> */}
              <input
                required
                className="input-field"
                id="time"
                type="time"
                name="time"
                value={inputs.time || ""}
                onChange={handleChange}
                min="11:00" // Start time: 09:00 AM (24-hour format)
                max="23:00" // End time: 05:00 PM (24-hour format)
                step="1800" // 30-minute intervals (1800 seconds = 30 minutes)
                placeholder="Choose a time" // Optional placeholder text
              />
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
                value={inputs.numberGuests || ""}
                onChange={handleChange}
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
                value={inputs.ocasion || ""}
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
              value={inputs.message || ""}
              rows={5}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
