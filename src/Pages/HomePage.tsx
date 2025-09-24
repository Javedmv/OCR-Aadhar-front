
import ApiResponseBox from '../Components/ApiResponse';
import ImageField from '../Components/ImageField';
import ParsedData from '../Components/ParsedData';
import Button from '../Components/Ui/Button';
function HomePage() {
    const dummyResponse = {
      status: true,
      data: {
      UID: "XXXX-XXXX-XXXX",
      Name: "John Doe",
      DOB: "01-01-1990",
      Gender: "Male",
      address: "123 Street, City, State",
      pincode: "123456",
      age_band: "20-30",
      maskedMobileNumber: "*******985",
      isUidSame: "Back UID not found"
    },
    message: "Parsing Successfull"
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:my-8">
        <div className="flex flex-col w-full md:w-1/2">
            <ImageField />
            <div className="flex justify-center items-center">
            <Button
                type="button"
                onClick={() => console.log("parse Clicked")}
                className="md:w-1/2 px-6 py-3 m-5 md:text-2xl md:font-bold flex items-center justify-center gap-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition "
            >
                PARSE AADHAAR
            </Button>
            </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-full px-5">
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
        </div>
    </div>
  );
}

export default HomePage;
