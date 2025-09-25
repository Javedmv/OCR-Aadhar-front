import type React from "react";

interface parsedDataProps {
    UID?: string;
    name?: string;
    dob?: string;
    gender?: string;
    address?: string;
    pincode?: string;  
}

const ParsedData: React.FC<parsedDataProps> = ({
    UID = "XXXX-XXXX-XXXX",
    name = "Name",
    dob = "01-01-1990",
    gender = "Gender",
    address = "123 Street, City, State",
    pincode = "123456",
}) => {
    return(
        <>
            <div className="flex flex-col w-full h-full sm:p-4 sm:m-2">
            <div className="md:flex md:justify-between m-1">
                <div className="mb-2 sm:mb-2 md:w-1/2 md:px-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 ">
                    Aadhaar Number
                    </p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 pb-1 truncate">
                    {UID}
                    </p>
                </div>

                <div className="mb-2 sm:mb-2 md:w-1/2 md:px-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Name on Aadhaar
                    </p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 pb-1 truncate">
                    {name}
                    </p>
                </div>
            </div>
            
            <div className="md:flex md:justify-between m-1">
                <div className="mb-2 sm:mb-2 md:w-1/2 md:px-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Date of Birth
                    </p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 pb-1 truncate">
                    {dob}
                    </p>
                </div>

                <div className="mb-2 sm:mb-3 md:w-1/2 md:px-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Gender</p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 pb-1 truncate">
                    {gender}
                    </p>
                </div>
            </div>

            <div>
                <div className="md:px-2 mb-3">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Address</p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 pb-1 truncate">
                    {address}
                    </p>
                </div>

                <div className="md:px-2 m-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Pincode</p>
                    <p className="text-base text-gray-800 font-medium border-b border-gray-400 md:w-1/3 pb-1 truncate">
                    {pincode}
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default ParsedData;