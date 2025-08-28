import React, { useState } from "react";
import { FunctionCall } from "../apis/GetAnalisys";

const SmsVerificationForm = () => {
  const [SMS, setSMS] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const data = await FunctionCall(SMS);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='bg-[url("/verifybg.png")] bg-cover  bg-no-repeat h-[98vh]'>
      <div className="container mx-auto max-w-2xl py-4 px-4 h-[90vh]">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 mb-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Submit SMS for Verification
          </h2>
          <p className="text-md text-gray-500 mb-6 text-center">
            Paste your SMS message here to check for misinformation.
          </p>

          <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-300">
            <textarea
              className="w-full h-40 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400"
              placeholder="Paste your SMS message or key information here..."
              onChange={(e) => setSMS(e.target.value)}
            ></textarea>
          </div>

          <button
            className="mt-6 w-full py-3 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200"
            type="submit"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Analyze SMS"}
          </button>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Verification Results
          </h3>
          {isLoading ? (
            <p className="text-blue-500">Processing your SMS...</p>
          ) : data ? (
            <>
            <p
              className={` p-2 rounded-2xl leading-relaxed text-white font-semibold ${
                data.prediction === "Fake" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              ✅ The SMS is classified as: {data.prediction}
            </p>
            </>
          ) : (
            <p className="text-gray-500 leading-relaxed">
              Your verification results will appear here after submission. The
              system will provide an analysis of the SMS content, highlighting
              any suspicious elements or potential misinformation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmsVerificationForm;
