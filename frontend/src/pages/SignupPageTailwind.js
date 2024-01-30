import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up as
          </h2>
        </div>
        <div className="rounded-md shadow">
          <a
            href="/signup/customer"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Customer
          </a>
        </div>
        <div className="rounded-md shadow">
          <a
            href="/signup/shopkeeper"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
          >
            Shopkeeper
          </a>
        </div>
        <div className="rounded-md shadow">
          <a
            href="/signup/delivery"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
          >
            Delivery Boy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
