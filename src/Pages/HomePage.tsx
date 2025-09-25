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
    console.log(error)
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
        if (error) {
            if (typeof error === "string" && error.includes("400")) {
                toast.error("Invalid input. Please check your Aadhaar images and try again.");
            } else {
                toast.error(typeof error === "string" ? error : "Something went wrong!");
            }
            return;
        }
        if (response && response.status === false) {
            toast.error(response.message || "Backend error occurred!");
            return;
        }
        if (response?.status) {
            toast.success(response.message || "Aadhaar uploaded successfully!");
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
        <div className="flex flex-col w-full md:w-2/5">
            <ImageField />
            <div className="flex justify-center items-center">
            <Button
                type="button"
                onClick={() => parseAadhaar()}
                className="md:w-1/2 px-6 py-3 m-5 md:text-2xl md:font-bold flex items-center justify-center gap-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition "
            >
                {loading ? "PROCESSING..." : "PARSE AADHAAR"}
            </Button>
            </div>
        </div>
        <div className="flex flex-col w-full md:w-3/5 h-full px-5">
        {!data ? 
            (<div className="w-full h-full flex flex-col items-center justify-center text-gray-500 font-mono text-center space-y-2">
                <h2 className="text-lg font-bold text-gray-700">API Response</h2>
                <p>Start performing OCR by inputting your front and back!</p>
            </div>
            ) : (
                <>
                    <h2 className="text-base sm:text-lg font-bold underline text-gray-800 sm:pb-2 text-center sm:text-left">
                        Parsed Data
                    </h2>
                    <div className="md:flex-[3] flex items-center justify-center">
                        <ParsedData {...data.data}/>
                    </div>
                    <div className="md:flex-[4] flex items-center justify-center ">
                        <ApiResponseBox response={data} />
                    </div>
                </>
            )
        }
        </div>
    </div>
  );
}

export default HomePage;
