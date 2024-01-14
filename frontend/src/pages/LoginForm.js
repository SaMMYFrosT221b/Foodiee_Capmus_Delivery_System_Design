import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function LoginForm() {
  const differentHostData = {
    UserHost: "http://localhost:5000",
    ShopkeeperHost: "http://localhost:6000",
    DeliveryBoyHost: "http://localhost:7000",
  };

  const routesMappingOfUSerTypes = {
    "User":"user",
    "Shopkeeper":"shopkeeper",
    "Delivery Boy":"deliveryboy"
  }

  const [userType, setUserType] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      UserType: userType,
      Email: email,
      Password: password,
    };
    console.log("Form Data:", formData);

    try {
      const response = await fetch(`http://localhost:5000/${routesMappingOfUSerTypes[formData.UserType]}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const responseData = await axios.post("http://localhost:5000/rat", formData);
      const responseData = await response.json();
      console.log("Response from server:", responseData);
      console.log("Ratnakar",typeof(responseData.status));
      if (responseData.status == 1) {
        localStorage.setItem('Token', responseData.authToken);
        console.log("This is the token: ",localStorage.getItem("Token"));
        navigate("/books");
      } else if (responseData.status == -1) {
        navigate("/login");
        console.log(responseData.content);
      } else {
        console.log(responseData.content);
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  console.log("This is the Token: ",localStorage.getItem("Token"));

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
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

export default LoginForm;
