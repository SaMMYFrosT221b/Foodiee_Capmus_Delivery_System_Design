import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopkeeperSignupPage() {
  const [formData, setFormData] = useState({
    Name: "",
    ShopUserName: "",
    Password: "",
    Email: "",
    PhoneNo: "",
    ShopName: "",
    ShopNo: "",
    BankName: "",
    AccountNo: "",
    GSTNo: "",
    GovIDType: "",
    GovID: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    PostalCode: "",
    Country: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Button Clicked");

    try {
      const response = await fetch(`http://localhost:5000/shopkeeper/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("this is response",response);
      console.log(formData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 sm:p-12">
            <div className="flex flex-row justify-evenly">
              <div>
                {" "}
                <img
                  className="mx-auto"
                  src="/foodiee.png"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div>
                {" "}
                <h1 className="text-center text-gray-500 text-4xl">SignUp</h1>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center">
              {/* <h1 className="text-2xl xl:text-3xl font-extrabold">SignUp</h1> */}

              <div className="w-full flex-1">
                <div className="my-5 border-b text-center"></div>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text" 
                    name="Name"
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="ShopUserName"
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="Password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    name="Email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="number"
                    name="PhoneNo"
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    name="ShopNo"
                    onChange={handleChange}
                    type="number"
                    placeholder="Shop No"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="ShopName"
                    onChange={handleChange}
                    placeholder="Shop Name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="BankName"
                    onChange={handleChange}
                    placeholder="Bank Name"
                  />
                  <input
                    className="w-full mx-1 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          
                    type="number"
                    name="AccountNo"
                    onChange={handleChange}
                    placeholder="Account No."
                  />{" "}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    name="GSTNo"
                    onChange={handleChange}
                    type="number"
                    placeholder="GST No."
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    name="GovIDType"
                    onChange={handleChange}
                    type="text"
                    placeholder="GovIDType: 'Aadhar', 'PAN', 'Driving License', 'Voter ID' "
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    name="GovID"
                    onChange={handleChange}
                    type="text"
                    placeholder="GovID"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="AddressLine1"
                    onChange={handleChange}
                    placeholder="Address line 1"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="AddressLine2"
                    onChange={handleChange}
                    placeholder="Address line 2"
                  />
                  <div className="flex flex-row justify-between">
                    <input
                      className="w-4/6 mx-1 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      name="City"
                      onChange={handleChange}
                      placeholder="City"
                    />{" "}
                    <input
                      className="w-4/6 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      name="State"
                      onChange={handleChange}
                      placeholder="State"
                    />
                    </div>
                    <div className="flex flex-row justify-between">
                    <input
                      className="w-4/6 px-8 py-4 mx-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      name="PostalCode"
                      onChange={handleChange}
                      placeholder="PostalCode"
                    />
                    <input
                      className="w-4/6 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      name="Country"
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  </div>
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={handleSubmit}>
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-sm"
              style={{
                backgroundImage: 'url("/login.jpg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopkeeperSignupPage;
