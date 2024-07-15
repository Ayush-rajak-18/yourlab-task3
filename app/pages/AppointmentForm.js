"use client";

import { useState } from "react";
import Header from "../components/header";
import SelectButton from "../components/Dropbox";
import Submitted from "./BookingFeedback";

const DocForm = () => {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmit(false)
  };

  return (
   
    <div className="w-[54%] h-[83%] bg-white">
      <div className="">
        <Header />
        {
          submit ?
        <form className="p-[2rem] font-bold flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[0.3rem]">
            <label htmlFor="name">Patient*</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-[0.4rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_darkgray] border-black"
              required
            />
          </div>

          <div className="flex">
            <div className="flex flex-col gap-[0.3rem]">
              <label htmlFor="phone">Contact*</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-[0.4rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_darkgray] border-black w-[16rem]"
                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="flex flex-col gap-[0.3rem] ml-[11rem] w-[5rem]">
              <label htmlFor="age">Age*</label>
              <input
                type="number"
                name="age"
                id="age"
                className="p-[0.4rem] border-[0.1rem] [box-shadow:0rem_0.1rem_.1rem_0rem_darkgray] border-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-[0.3rem] mb-[2rem]">
            <label htmlFor="gender">Gender*</label>
            <div className="flex gap-[6rem]">
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex gap-[0.5rem]">
                <input type="radio" name="gender" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-[14rem] mb-[5rem]">
              <div className="flex gap-[0.5rem]">
                <h1>diabetes</h1>
                <div className="select"><SelectButton first="Yes" second="No"/></div>
              </div>
              <div className="flex gap-[0.5rem]">
                <h1>BP</h1>
                <div className="select"><SelectButton first="Yes" second="No"/></div>
              </div>
            </div>
          </div>
          
         
          <div className="flex items-center justify-center">
            <button type="submit" className="text-[1.2rem] font-bold py-[0.4rem] px-[5rem] bg-[lightblue] font-sans tracking-tighter">SUMMIT</button>
          </div>
        </form>
        : <Submitted />
        }
      </div>
    </div>
  );
};

export default DocForm;
