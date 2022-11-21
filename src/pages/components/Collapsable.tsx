import React from "react";
import PropTypes from "prop-types";
import { useForm, SubmitHandler  } from "react-hook-form";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

type FormValues = {
    firstname: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    tel: string;
    comments : string;
  };
const Collapsable = () => {

  const mutation = trpc.example.submitData.useMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    mutation.mutate({name: data.firstname, surname: data.surname, email: data.email});
    console.log(data);
  };

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
  } = useForm({
    mode: "onBlur",
  });
  const [section, setSection] = useState(0);

  const isOpen = (sectionNumber: number) => {
    if (section === sectionNumber) return true;
    return false;
  };


  return (
    <div>
      <div className="container rounded-lg bg-white py-4 px-4 shadow-xl">
        <details
          className="group mb-2 rounded bg-white bg-[#DEDEDE] shadow"
          open={isOpen(0)}
          id="0"
        >
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
            onClick={(e) => {
              e.preventDefault();
              if (section === 0) setSection(-1);
              else setSection(0);
            }}
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold text-white">
              Step 1: Your details
            </h3>
          </summary>
          <div className="p-4">
            {/*section 1 */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-0">
                <div className="md:w-1/">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="inline-full-name"
                  >
                    First Name
                  </label>
                  <input
                    className="w-fit appearance-none rounded-lg rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="inline-full-name"
                    type="text"
                    {...register("firstname", { required: true })}
                  />
                  <br></br>
                  {errors.firstname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="md:w-2/3">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="surname-name"
                  >
                    Surname
                  </label>
                  <input
                    className="w-fit appearance-none rounded-lg rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="surname-name"
                    type="text"
                    {...register("surname", { required: true })}
                  />
                  <br></br>
                  {errors.lastname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="md:w-3/3">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="email-address"
                  >
                    Email Address:
                  </label>
                  <input
                    className="w-fit appearance-none rounded-lg rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="email-address"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  <br></br>
                  {errors.email && (
                    <span className=" text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1 col-end-7">
                  <button
                    type="submit"
                    className="h-8 w-36 rounded-lg bg-indigo-700 text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>
        <details
          className="group mb-2 rounded bg-white bg-[#DEDEDE] shadow"
          open={isOpen(1)}
          id="1"
        >
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
            onClick={(e) => {
              e.preventDefault();
              if (section === 1) setSection(-1);
              else setSection(1);
            }}
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold  text-white">
              Step 2: More comments
            </h3>
          </summary>
          <div className="p-4">
            <form onSubmit={handleSubmit2(onSubmit)}>
              <div className="grid grid-cols-2">
                <div className="md:w-1/3">
                  <label
                   className="mb-1 w-64 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="telephone"
                  >
                    Telephone Number
                  </label>
                  <input
                    className="w-fit appearance-none rounded-lg rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="telephone"
                    type="tel"
                    {...register2("telephone", { required: true })}
                  />
                  <br></br>
                  {errors2.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="md:w-2/3">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select {...register2("gender")}>
                  <option value="" disabled selected hidden>Select Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="md:w-3/3">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="birthday"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    className="rounded-lg"
                    {...register2("birthday", { required: true })}
                  />
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1 col-end-7">
                  <button
                    type="submit"
                    className="h-8 w-36 rounded-lg bg-indigo-700 text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>

        <details
          className="group mb-2 rounded bg-white bg-[#DEDEDE] shadow"
          open={isOpen(2)}
          id="2"
        >
          <summary
            className="relative flex cursor-pointer list-none flex-wrap
    items-center rounded focus-visible:outline-none
    focus-visible:ring focus-visible:ring-pink-500 group-open:z-[1] group-open:rounded-b-none
    "
            onClick={(e) => {
              e.preventDefault();
              if (section === 2) setSection(-1);
              else setSection(2);
            }}
          >
            <h3 className="flex flex-1 bg-yellow-400 p-4 font-semibold  text-white">
              Step 3: Final comments
            </h3>
          </summary>
          <div className="p-4">
            <form onSubmit={handleSubmit3(onSubmit)}>
              <div className="grid grid-cols-2">
                
                <div className="">
                  <label
                    className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0"
                    htmlFor="comments"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    rows={4}
                    cols={50}
                    {...register3("comments", { required: true })}
                  ></textarea>
                </div>
                <div className="col-end-7 col-span-2 row-end-3">
                  <button
                    type="submit"
                    className="h-8 w-36 rounded-lg bg-indigo-700 text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>
      </div>
    </div>
  );
};

Collapsable.propTypes = {};

export default Collapsable;
