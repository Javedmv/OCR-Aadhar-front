import FileUpload from "../Components/Ui/FileUpload";

const ImageField = () => {
    return (
        <>
                <div className="flex justify-center m-3">
                <FileUpload
                    id="aadharFront"
                    label="Aadhaar Front"
                    onChange={(file) => {
                        console.log("Front image:", file);
                    }}
                    />
                </div>
                <div className="flex justify-center m-3">
                <FileUpload
                    id="aadharBack"
                    label="Aadhaar Back"
                    onChange={(file) => {
                        console.log("Back image:", file);
                    }}
                    />
                </div>
        </>
    )
}

export default ImageField;