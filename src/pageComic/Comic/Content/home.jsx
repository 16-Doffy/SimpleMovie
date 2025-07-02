import React from "react";
import kata from "../../../assets/img/kata.jpg";

export default function ContentComic() {
  return (
    <div className="grid grid-cols-3 justify-between">
      <div className="relative">
        <img src={kata} alt="" className="w-full h-auto relative" />
        <div className="absolute inset-0 flex flex-col justify-end text-white p-4"> 
          <h1 className="text-2xl font-bold">Kata rina</h1>
        <p className="flex justify-between">
            <span className="text-2xl">The girls from downstain</span>
            <button className="text-white  rounded-3xl  border border-blue-500 bg-blue-500 w-40 h-10">Read now</button>
        </p>
        </div>
       
      </div>

      <div className="grid grid-cols-1 gap-2">
        <h1>Continue Reading</h1>
        <h1>Your Favourite Heroes</h1>
        <h1>img</h1>
      </div>
    </div>
  );
}
