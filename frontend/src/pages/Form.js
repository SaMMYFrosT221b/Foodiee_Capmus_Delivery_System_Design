import React, { useState } from 'react';
import axios from "axios";

function FormComponent() {
    const [userType, setUserType] = useState('User');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = {
        UserType: userType,
        Email: email,
        Password: password
      };
      console.log('Form Data:', formData);
  
      try {
        const response = await fetch('http://localhost:5000/rat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        // const responseData = await axios.post("http://localhost:5000/rat", formData);
        const responseData = await response.json();
        console.log('Response from server:', responseData);
      } catch (error) {
        console.error('Error sending data to server:', error);
      }
    };
  
    return (
      <form  onSubmit={handleSubmit}>
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="User">User</option>
            <option value="Shopkeeper">Shopkeeper</option>
            <option value="Delivery Boy">Delivery Boy</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default FormComponent;