import React from "react";

const page = () => {
  return (
    <div className="relative pt-[10vh] w-full h-screen flex items-center justify-center ">
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      
        
        <form
          action="/api/login"
          method="POST"
          className="flex flex-col w-[80%] rounded-lg border border-black bg-transparent text-black relative"
        >
          <div className="absolute w-full h-full bg-white z-20 opacity-10 "></div>
          <div className="flex w-full p-3 items-start z-30 justify-center flex-col gap-3">
            <label htmlFor="" className="w-full">
              Email
            </label>
            <input
              type="text"
              className="bg-transparent text-black border rounded-md border-black w-full focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex w-full p-3 items-start z-30 justify-center flex-col gap-3">
            <label htmlFor="" className="w-full">
              Password
            </label>
            <input
              type="text"
              className="bg-transparent text-white border-2 rounded-md border-white w-full focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button className="bg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
