import React from "react";
import PropTypes from "prop-types";

const Collapsable = () => {
  return (
    <div>
      <div className="container mx-auto py-16 px-12">

        <details className="group mb-4 rounded bg-white shadow">
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
          >
            <h3 className="flex flex-1 p-4 font-semibold bg-yellow-400">Step 1: Your details
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
            <h3 className="flex flex-1 p-4 font-semibold bg-yellow-400">
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
            <h3 className="flex flex-1 p-4 font-semibold bg-yellow-400">
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
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

Collapsable.propTypes = {};

export default Collapsable;
