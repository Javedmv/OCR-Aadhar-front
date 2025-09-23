
import ImageField from '../Components/ImageField';
import Button from '../Components/Ui/Button';
function HomePage() {
  return (
    <div className="flex flex-col md:flex-row w-full md:my-10">
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
    </div>
  );
}

export default HomePage;
