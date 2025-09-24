
import ImageField from '../Components/ImageField';
import ParsedData from '../Components/ParsedData';
import Button from '../Components/Ui/Button';
function HomePage() {
  return (
    <div className="flex flex-col md:flex-row w-full md:my-13">
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
        <div className="flex flex-col w-full md:w-1/2 md:h-100vh">
            <h2 className="text-base sm:text-lg font-bold underline text-gray-800 sm:pb-2 text-center sm:text-left">
                Parsed Data
            </h2>
            {/* Top Section */}
            <div className="h-40 md:flex-[3] flex items-center justify-center border border-dashed border-gray-400">
                <ParsedData/>
            </div>
            {/* Bottom Section */}
            <div className="h-40 md:flex-[4] flex items-center justify-center border border-dashed border-gray-400">
                <p className="text-gray-600">Dummy Bottom 2/3</p>
            </div>
        </div>

    </div>
  );
}

export default HomePage;
