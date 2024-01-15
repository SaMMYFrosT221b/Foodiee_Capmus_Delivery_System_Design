import React, { useState } from "react";
import UserSignupPage from "./Signup/UserSignupPage";
import DeliveryBoySignupPage from "./Signup/DeliveryBoySignupPage";
import ShopkeeperSignupPage from "./Signup/ShopkeeperSignupPage";


function Signup() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="text-center bg-gray-100">
      <select className="m-2 text-2xl rounded" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="User">User</option>
        <option value="Shopkeeper">Shopkeeper</option>
        <option value="DeliveryBoy">Delivery Boy</option>
      </select>

      {selectedOption === "User" && (
        <div className="User">
          {/* Content for User div */}
          <UserSignupPage />
        </div>
      )}

      {selectedOption === "Shopkeeper" && (
        <div className="Shopkeeper ">
          {/* Content for Shopkeeper div */}
          <ShopkeeperSignupPage />
        </div>
      )}

      {selectedOption === "DeliveryBoy" && (
        <div className="DeliveryBoy">
          {/* Content for DeliveryBoy div */}
          <DeliveryBoySignupPage />
        </div>
      )}
    </div>
  );
}

export default Signup;
