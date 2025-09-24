
import { useContext } from 'react';
import ApiResponseBox from '../Components/ApiResponse';
import ImageField from '../Components/ImageField';
import ParsedData from '../Components/ParsedData';
import Button from '../Components/Ui/Button';
import { AadharContext } from '../Context/AadharContext';
import { toast } from 'react-toastify';
import { useApi } from '../Hooks/useApi';
import { uploadAadhar } from '../Services/AadhaarService';

function HomePage() {
    const { aadhar } = useContext(AadharContext)
    const { execute, loading, error, data } = useApi(uploadAadhar);

    const dummyResponse = {
      status: true,
      data: {
      UID: "XXXX-XXXX-XXXX",
      name: "John Doe",
      dob: "01-01-1990",
      gender: "Male",
      address: "123 Street, City, State",
      pincode: "123456",
      age_band: "20-30",
      maskedMobileNumber: "*******985",
      isUidSame: "Back UID not found"
    },
    message: "Parsing Successfull"
  };

  async function parseAadhaar() {
    try {
        const {back, front} = aadhar;
            if(!front){
                throw new Error("Please upload the Aadhar Front image.")
            }
            if(!back){
                throw new Error("Please upload the Aadhar Back image.")
            }
        const response = await execute({ front, back });
            if (response?.success) {
                console.log(data)
                toast.success(response.message || "Aadhaar uploaded successfully!");
            } else if (error) {
                toast.error(error);
            }
    } catch (error: unknown) {
        if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("Something went wrong!");
        }
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full md:my-8">
        <div className="flex flex-col w-full md:w-1/2">
            <ImageField />
            <div className="flex justify-center items-center">
            <Button
                type="button"
                onClick={() => parseAadhaar()}
                className="md:w-1/2 px-6 py-3 m-5 md:text-2xl md:font-bold flex items-center justify-center gap-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition "
            >
                {loading ? "PROCESSING" : "PARSE AADHAAR"}
            </Button>
            </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-full px-5">
        {!dummyResponse ? 
            (<div className="w-full h-full flex flex-col items-center justify-center text-gray-500 font-mono text-center space-y-2">
                <h2 className="text-lg font-bold text-gray-700">API Response</h2>
                <p>Start performing OCR by inputting your front and back!</p>
            </div>
            ) : (
                <>
                    <h2 className="text-base sm:text-lg font-bold underline text-gray-800 sm:pb-2 text-center sm:text-left">
                        Parsed Data
                    </h2>
                    {/* Top Section */}
                    <div className="md:flex-[3] flex items-center justify-center">
                        <ParsedData/>
                    </div>
                    {/* Bottom Section */}
                    <div className="md:flex-[4] flex items-center justify-center ">
                        <ApiResponseBox response={dummyResponse} />
                    </div>
                </>
            )
        }
        </div>
    </div>
  );
}

export default HomePage;
