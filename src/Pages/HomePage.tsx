import FileUpload from "../Components/Ui/FileUpload";

function HomePage() {
  return (
    <div className="flex flex-col md:flex-row w-full md:my-10">
      <div className="flex flex-col md:ml-30 w-full md:w-3xl">
        <div className="mt-2 md:mt-0">
          <FileUpload
            id="aadharFront"
            label="Aadhaar Front"
            onChange={(file) => {
              console.log("Front image:", file);
            }}
          />
        </div>
        <div className="mt-2 md:mt-2">
          <FileUpload
            id="aadharBack"
            label="Aadhaar Back"
            onChange={(file) => {
              console.log("Back image:", file);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
