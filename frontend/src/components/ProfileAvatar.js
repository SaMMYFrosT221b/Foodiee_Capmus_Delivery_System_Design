import React, { useState } from "react";

const ProfileAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section class="h-screen bg-gray-200">
      <div class="container mx-auto h-full py-20">
        <div class="flex justify-center items-center h-full">
          <div class="w-full md:w-1/3">
            <div class="card bg-white rounded-xl shadow-md">
              <div class="p-6 text-center">
                <div class="mt-3 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    class="rounded-full w-24 mx-auto"
                  />
                </div>
                <h4 class="mb-2 text-lg font-semibold">Julie L. Arsenault</h4>
                <p class="text-gray-500 mb-4">
                  @Programmer <span class="mx-2">|</span>{" "}
                  <a href="#!">mdbootstrap.com</a>
                </p>
                <div class="mb-4 pb-2 flex justify-center space-x-2">
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fab fa-facebook-f fa-lg"></i>
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fab fa-twitter fa-lg"></i>
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fab fa-skype fa-lg"></i>
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-primary rounded-full py-2 px-6"
                >
                  Message now
                </button>
                <div class="flex justify-between text-center mt-5 mb-2">
                  <div>
                    <p class="mb-2 text-lg font-semibold">8471</p>
                    <p class="text-gray-500 mb-0">Wallets Balance</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-2 text-lg font-semibold">8512</p>
                    <p class="text-gray-500 mb-0">Income amounts</p>
                  </div>
                  <div>
                    <p class="mb-2 text-lg font-semibold">4751</p>
                    <p class="text-gray-500 mb-0">Total Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAvatar;
