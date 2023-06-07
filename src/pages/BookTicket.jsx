import React, { useState, useEffect } from "react";

export default function BookTicket() {
  const initialFormData = {
    name: "",
    email: "",
    date: "",
    time: "",
    quantity: "",
  };

  const storedFormData = localStorage.getItem("formData");
  const initialData = storedFormData
    ? JSON.parse(storedFormData)
    : initialFormData;
  const [formData, setFormData] = useState(initialData);
  const [totalPrice, setTotalPrice] = useState(0);
  const ticketPrice = 250; // can be fecthed via api in real life aplication

  // function to handle input change
  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData, // spread operator to copy the previous values of the object
      [event.target.name]: event.target.value, // dynamically set the name of the property using the input field name attribute
    }));
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData)); // use JSON.stringify to convert object to string before storing in local storage
    const price = formData.quantity ? formData.quantity * ticketPrice : 0; // if quantity is not set then price is 0
    setTotalPrice(price);
  }, [formData]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-200 to-white">
      <form className="max-w-2xl w-full bg-blue-100 mx-auto p-4  rounded-md shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">Book Ticket</h1>

        {/* Name Input field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Email Input field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Date Input field */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        {/* Time Input field */}
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time:
          </label>
          <select
            id="time"
            name="time"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.time}
            onChange={handleInputChange}
          >
            <option value="">Select a time</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="12:00 AM">12:00 AM</option>
          </select>
        </div>

        {/* Quantity Input field */}
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-2"
          >
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <p className="text-gray-700 font-bold mb-2">
            Total Price: Rs. {totalPrice}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
