function AppDownloadBanner() {
  return (
    <div className="container mx-auto px-4">
      {" "}
      {/* Use container for overall layout */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10">
        {" "}
        {/* Adapt padding */}
        <h3 className="text-center mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
          Work fast from anywhere
        </h3>
        <p className="text-center text-gray-500 mb-4 sm:text-base md:text-lg lg:text-xl">
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p>
        <div className="flex justify-center items-center space-x-4 lg:space-x-6">
          {" "}
          {/* Adjust spacing */}
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <svg
              className="mr-3 w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            ></svg>
            <span className="text-sm">Mac App Store</span>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <svg
              className="mr-3 w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            ></svg>
            <span className="text-sm">Google Play</span>
          </a>
        </div>
      </div>
      <p className="mt-5 text-center text-gray-500">
        This card component is part of a larger, open-source library of Tailwind
        CSS components. Learn more by going to the official{" "}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Flowbite Documentation
        </a>
        .
      </p>
    </div>
  );
}

export default AppDownloadBanner;
