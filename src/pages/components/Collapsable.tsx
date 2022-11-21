import React from "react";
import PropTypes from "prop-types";

const Collapsable = () => {
  return (
    <div>
      <div className="container mr-44 ml-44 py-16 px-12">
        <details className="group mb-4 rounded bg-white shadow">
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold text-white">
              Step 1: Your details
            </h3>
            <div className="flex w-10 items-center justify-center">
              <div
                className="ml-2 origin-left border-8 border-transparent
        border-l-gray-600 transition-transform group-open:rotate-90
        "
              ></div>
            </div>
          </summary>
          <div className="p-4">
            <form>
                <div  className="grid grid-cols-2">

              
              <div className="md:w-1/3">
              <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                  for="inline-full-name"
                >
                  First Name
                </label>
                <input
                  className="w-fit appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="inline-full-name"
                  type="text"
                  value="Jane Doe"
                />
              </div>
              <div className="md:w-2/3">
              <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                  for="surname-name"
                >
                  Surname
                </label>
                <input
                  className="w-fit appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="surname-name"
                  type="text"
                  value="Jane Doe"
                />
              </div>
              <div className="md:w-3/3">
              <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                  for="email-address"
                >
                 Email Address
                </label>
                <input
                  className="w-fit appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="email-address"
                  type="text"
                  value="Jane Doe"
                />
              </div>
              <div>
              <button className="bg-indigo-700 text-white">Next</button>
              </div>
              </div>
              
            </form>
          </div>
        </details>
        <details className="group mb-4 rounded bg-white shadow">
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold  text-white">
              Step 2: More comments
            </h3>
            <div className="flex w-10 items-center justify-center">
              <div
                className="ml-2 origin-left border-8 border-transparent
        border-l-gray-600 transition-transform group-open:rotate-90
        "
              ></div>
            </div>
          </summary>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              praesentium officia nostrum iste eaque, explicabo sunt, voluptatum
              mollitia corporis porro repudiandae. Eaque neque voluptatum sint
              molestiae? Assumenda eligendi facilis reprehenderit.
              <button className="bg-indigo-700 text-white">Next</button>
            </p>
          </div>
        </details>

        <details className="group mb-4 rounded bg-white shadow">
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold  text-white">
              Step 3: Final comments
            </h3>
            <div className="flex w-10 items-center justify-center">
              <div
                className="ml-2 origin-left border-8 border-transparent
        border-l-gray-600 transition-transform group-open:rotate-90
        "
              ></div>
            </div>
          </summary>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              praesentium officia nostrum iste eaque, explicabo sunt, voluptatum
              mollitia corporis porro repudiandae. Eaque neque voluptatum sint
              molestiae? Assumenda eligendi facilis reprehenderit.
              <button className="bg-indigo-700 text-white">Next</button>
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

Collapsable.propTypes = {};

export default Collapsable;
