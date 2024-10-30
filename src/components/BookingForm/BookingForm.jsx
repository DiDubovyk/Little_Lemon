import { useState } from "react";
import { useEffect } from "react";
import "./BookingForm.css";

const BookingForm = () => {
    const [inputs, setInputs] = useState({
        date:""
    });

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`
    };

    useEffect(() => {
      setInputs((prevInputs) => ({
        ...prevInputs,
        date: getCurrentDate(),
      }));
    }, []);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={inputs.fullName || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone number
          <input
            type="tel"
            name="phoneNumber"
            value={inputs.phoneNumber || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Select the date for your reservation:
          <input
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Choose the time for your reservation:
          <input
            type="time"
            name="time"
            value={inputs.time || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Specify the number of guests joining for the reservation
          <input
            type="number"
            name="numberGuests"
            value={inputs.numberGuests || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Let us know if you're celebrating any special ocasion:
          <select
            name="ocasion"
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
        </label>
      </div>
    </form>
  );
}

export default BookingForm;
