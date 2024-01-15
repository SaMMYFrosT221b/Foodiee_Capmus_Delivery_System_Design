import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function DeliveryBoySignupPage(){

    return (<>
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
                      placeholder="Name"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Username"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      onInput={(e) => {
                        if (e.target.value.length > 10) {
                          e.target.value = e.target.value.slice(0, 10);
                        }
                      }}
                      type="number"
                      placeholder="Phone Number"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Goverment ID type"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Gonverment ID"
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="text"
                      placeholder="Bank Name"
                    />
  
                    <div className="flex flex-row justify-between">
                      <input
                        className="w-full mx-1 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        onInput={(e) =>{
                            if(e.target.value.length > 17){
                                e.target.value = e.target.value.slice(0,17);
                            }else if(e.target.value <= 0){
                                e.target.value = null;
                            }
                        }}
                        type="number"
                        placeholder="Bank Account No."
                      />{" "}
                    </div>
  
                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
    )
}

export default DeliveryBoySignupPage;