import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
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
            <div class="mt-6 flex flex-col items-center">
              <h1 class="text-2xl xl:text-3xl font-extrabold">Login</h1>

              <button class="mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  class="w-6 h-6 -ml-2"
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
                <Link to={"/login"}>
                  <span class="ml-3">Login</span>{" "}
                </Link>
              </button>

              <div class="w-full flex-1 mt-8">
                <div class="my-5 border-b text-center"></div>
                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="username"
                    placeholder="username"
                  />
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      class="w-6 h-6 -ml-2"
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
                    <span class="ml-3">Login</span>
                  </button>
                  <p className="text-center py-3">
                    Dont have account{" "}
                    <a className="underline" href="/signup">
                      Create one!
                    </a>
                  </p>

                  <label>
                    User Type:
                    <select>
                      <option value="User">User</option>
                      <option value="Shopkeeper">Shopkeeper</option>
                      <option value="Delivery Boy">Delivery Boy</option>
                    </select>
                  </label>

                  <p class="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a href="#" class="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" class="border-b border-gray-500 border-dotted">
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
