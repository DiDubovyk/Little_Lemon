import './App.css';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Reservations from './pages/Reservations';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from './utils/fakeAPI';
import BookingConfirm from './pages/BookingConfirm';

function App() {
  const [inputs, setInputs] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "",
  });

  const navigate = useNavigate();

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "SET_TIMES":
        return action.payload;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const today = new Date();
    fetchAPI(today).then((initialTimes) => {
      dispatch({ type: "SET_TIMES", payload: initialTimes });
    }).catch(error => {
      console.error("Error fetching times:", error);
    });
  }, []);

  const handleDChange = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error("Invalid date:", date);
      return;
    }

    fetchAPI(date).then((times) => {
      dispatch({ type: "SET_TIMES", payload: times });
    }).catch(error => {
      console.error("Error fetching times:", error);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await submitAPI(inputs);
    if (success) {
      navigate("/booking-confirm");
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Reservations
            inputs={inputs}
            setInputs={setInputs}
            availableTimes={availableTimes}
            handleDChange={handleDChange}
            handleSubmit={handleSubmit} />} />
           <Route path="/booking-confirm" element={<BookingConfirm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  );
}

export default App;