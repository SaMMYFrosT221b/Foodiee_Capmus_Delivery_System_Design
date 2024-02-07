import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const differentHostData = {
    UserHost: "http://localhost:5000",
    ShopkeeperHost: "http://localhost:6000",
    DeliveryBoyHost: "http://localhost:7000",
  };

  const routesMappingOfUSerTypes = {
    User: "user",
    Shopkeeper: "shopkeeper",
    "Delivery Boy": "deliveryboy",
  };

  const [userType, setUserType] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
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
      const response = await fetch(
        `http://localhost:5000/${
          routesMappingOfUSerTypes[formData.UserType]
        }/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // const responseData = await axios.post("http://localhost:5000/rat", formData);
      const responseData = await response.json();
      console.log("Response from server:", responseData);
      if (responseData.status == 1) {
        localStorage.setItem("Token", responseData.authToken);
        localStorage.setItem("UserID", responseData.userID);
        localStorage.setItem("UserName", formData.Email);
        console.log("This is the token: ", localStorage.getItem("Token"));
        alert(
          responseData.content +
            responseData.userID +
            localStorage.getItem("UserID")
        );
        console.log(responseData.content);
        navigate(`/foodiee-home`);
        // if (formData.UserType === "User") {
        //   window.location.href = `http://localhost:7000/user/${responseData.authToken}`;
        // }
        // if (formData.UserType === "Shopkeeper") {
        //   window.location.href = `http://localhost:8000/shopkeeper/${responseData.authToken}`;
        // }
      } else if (responseData.status == -1) {
        navigate("/login");
        alert(responseData.content);
      } else {
        alert(responseData.content);
        console.log(responseData.content);
      }
    } catch (error) {
      setError("Error 505 Server Side.");
      console.error("Error sending data to server:", error);

      // Server Side Error
    }
  };

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/login");
    } else {
      navigate("/foodiee-home");
    }
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                className="mx-auto"
                src="/foodiee.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <h1 className="text-center text-gray-500 font-medium text-4xl py-1">
                Foodiee
              </h1>
            </div>
            <div className="mt-6 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>

              <label className="mt-10 ">
                User Type:
                <select
                  className="rounded ml-3"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="User">User</option>
                  <option value="Shopkeeper">Shopkeeper</option>
                  <option value="Delivery Boy">Delivery Boy</option>
                </select>
              </label>

              <div className="w-full flex-1 mt-8">
                {error && <p className="text-red-500">{error}</p>}
                <div className="my-5 border-b text-center"></div>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="username"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
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
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="text-center py-3">
                    Dont have account{" "}
                    <a className="underline" href="/sign-up">
                      Create one!
                    </a>
                  </p>

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

export default LoginPage;
