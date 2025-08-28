import React from "react";

const Header = ({setWork}) => {
  return (
    <div className='h-[90vh]  w-full bg-[url("/fakesmsdetectbg.png")] bg-cover  bg-no-repeat'>
      <div className="absolute w-full h-[90vh] bg-white/80 rounded-b-[25px] z-10 px-[240px] flex items-center justify-start">
        <div className="flex  flex-col items-start">
          <h1 className="text-[48px] font-bold">
            Detect Fake SMS <br />
            <span>Instantly</span>
          </h1>
          <div className="w-[450px] mt-5">
            <p className="text-[20px]">
              Empower yourself against misinformation. Upload images and text to
              verify the authenticity of SMS content and make informed
              decisions.
            </p>
          </div>
          <button
          onClick={() => setWork(true)}
          className="mt-5 bg-blue-500 px-4 py-2 rounded-md text-[16px] text-white font-semibold cursor-pointer">Verify SMS Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
