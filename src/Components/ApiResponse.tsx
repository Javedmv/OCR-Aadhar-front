import React from "react";

interface ApiResponseBoxProps {
  response: {
    status: boolean;
    data: {
      UID: string;
      name: string;
      dob: string;
      gender: string;
      address: string;
      pincode: string;
      age_band: string;
      maskedMobileNumber: string;
      isUidSame: string;
    };
    message: string;
  } | null;
}

const ApiResponseBox: React.FC<ApiResponseBoxProps> = ({ response }) => {
  return (
    <div className="w-full h-full p-3 sm:p-4 overflow-auto bg-black rounded-md">
      <h2 className="text-green-400 font-bold mb-3 text-sm sm:text-base">
        ▶ API Response
      </h2>
      <pre className="text-green-400 text-sm sm:text-base font-mono whitespace-pre-wrap">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

export default ApiResponseBox;
