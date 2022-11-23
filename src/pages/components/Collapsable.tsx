import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

type FormValues = {
  name: string;
  surname: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  telephone: string;
  comments: string;
  month?: string;
  day?: string;
  year?: string;
};
const Collapsable = () => {
  const [userData, setUserData] = useState<FormValues>({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    telephone: "",
    comments: "",
  });
  const mutation = trpc.users.submitData.useMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm<FormValues>();

  const [section, setSection] = useState(0);
  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
  } = useForm<FormValues>();

  const onSubmit2: SubmitHandler<FormValues> = (data: FormValues) => {
    const birth = data.year + "-" + data.month + "-" + data.day;
    const d = new Date(birth);
    setUserData({
      ...userData,
      telephone: data.telephone,
      gender: data.gender,
      dateOfBirth: d.toString(),
    });
    setSection(2);
  };
  const onSubmit3: SubmitHandler<FormValues> = (data: FormValues) => {
    mutation.mutate({
      name: userData?.name,
      surname: userData?.surname,
      email: userData?.email,
      dateOfBirth: userData?.dateOfBirth,
      telephone: userData?.telephone,
      comments: data.comments,
      gender: userData?.gender,
    });
    setSection(0);
  };
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setUserData({
      ...userData,
      name: data.name,
      surname: data.surname,
      email: data.email,
    });
    setSection(1);
  };

  const isOpen = (sectionNumber: number) => {
    if (section === sectionNumber) return true;
    return false;
  };
  return (
    <div>
      <div className="container rounded-lg bg-white py-1 px-1 shadow-xl">
        <details
          className="group mb-1 rounded-xl bg-white bg-[#DEDEDE] shadow"
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
            <h3 className="flex flex-1 rounded-xl bg-[#F5B605] p-4 font-semibold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Step 1: Your details
            </h3>
          </summary>
          <div className="p-4">
            {/*section 1 */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-7/12 grid-cols-2 gap-0">
                <div>
                  <label
                    className="mb-1 ml-1 block pr-4 font-semibold text-black md:mb-0"
                    htmlFor="inline-full-name"
                  >
                    First Name
                  </label>
                  <input
                    className="w-fit appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="inline-full-name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  <br></br>
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label
                    className="mb-1 ml-1 block pr-4 font-semibold text-black md:mb-0"
                    htmlFor="surname-name"
                  >
                    Surname
                  </label>
                  <input
                    className="w-fit appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:border-purple-500 focus:bg-white focus:outline-none"
                    id="surname-name"
                    type="text"
                    {...register("surname", { required: true })}
                  />
                  <br></br>
                  {errors.surname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label
                    className="mb-1 ml-1 block pr-4 font-semibold text-black md:mb-0"
                    htmlFor="email-address"
                  >
                    Email Address:
                  </label>
                  <input
                    className="w-fit appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:border-purple-500 focus:bg-white focus:outline-none"
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
                    className="h-8 w-36 rounded-xl bg-[#6159B0] text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>
        <details
          className="group mb-1 rounded-xl bg-white bg-[#DEDEDE] shadow"
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
            <h3 className="flex flex-1 rounded-lg bg-[#F5B605] p-4 font-semibold text-white  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Step 2: More comments
            </h3>
          </summary>
          <div className="p-4">
            <form onSubmit={handleSubmit2(onSubmit2)}>
              <div className="grid w-7/12  grid-cols-2">
                <div className="md:w-1/3">
                  <label
                    className="mb-1 ml-1 block w-64 pr-4 font-semibold text-black md:mb-0"
                    htmlFor="telephone"
                  >
                    Telephone Number
                  </label>
                  <input
                    className="w-fit appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:border-purple-500 focus:outline-none"
                    id="telephone"
                    type="tel"
                    {...register2("telephone", { required: true })}
                  />
                  <br></br>
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="md:w-2/3">
                  <label
                    className="mb-1 ml-1 ml-1 block pr-4 font-semibold text-black md:mb-0"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    {...register2("gender")}
                    className="w-fite rounded-xl border-2 border-b-2 border-gray-200 border-gray-500 bg-gray-200 py-2 px-4 leading-tight text-gray-700 shadow-[inset_0px_0px_7px_0_rgba(0,0,0,0.6)] focus:bg-white focus:outline-none"
                  >
                    <option value="" disabled selected hidden>
                      Select Gender
                    </option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="md:w-3/3">
                  <label
                    className="mb-1 ml-1 block pr-4 font-semibold text-black md:mb-0"
                    htmlFor="birthday"
                  >
                    Date of birth
                  </label>
                  <select
                    {...register2("month")}
                    id="month"
                    name="month"
                    className="w-12 appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:w-24 focus:outline-none"
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select
                    {...register2("day")}
                    id="day"
                    name="day"
                    className="mx-2 w-12 appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:w-24 focus:outline-none"
                  >
                    <option value="" selected disabled hidden></option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <input
                    {...register2("year")}
                    className="w-12 appearance-none rounded-xl border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)] focus:w-24 focus:outline-none"
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                  />
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1 col-end-7">
                  <button
                    type="submit"
                    className="h-8 w-36 rounded-xl bg-[#6159B0] text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>

        <details
          className="group mb-0 rounded-xl bg-white bg-[#DEDEDE] shadow"
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
            <h3 className="flex flex-1 rounded-xl bg-[#F5B605] p-4 font-semibold text-white  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Step 3: Final comments
            </h3>
          </summary>
          <div className="p-4">
            <form onSubmit={handleSubmit3(onSubmit3)}>
              <div className="grid grid-cols-2">
                <div className="">
                  <label
                    className="mb-1 ml-1 block pr-4 font-semibold text-black md:mb-1"
                    htmlFor="comments"
                  >
                    Comments
                  </label>
                  <textarea
                    {...register3("comments")}
                    id="comments"
                    rows={4}
                    cols={50}
                    className="resize-none rounded-xl shadow-[inset_1px_1px_4px_rgba(0,0,0,0.6)]"
                    {...register3("comments", { required: true })}
                  ></textarea>
                </div>
                <div className="col-span-2 col-end-7 row-end-3">
                  <button
                    type="submit"
                    className="h-8 w-36 rounded-lg bg-[#6159B0] text-white"
                  >
                    Next {" >"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </details>
      </div>
      {mutation.isError ? (
            <div className="text-black font-bold">An error occurred: {mutation.error.message}</div>
          ) : null}
    </div>
    
  );
};

Collapsable.propTypes = {};

export default Collapsable;
