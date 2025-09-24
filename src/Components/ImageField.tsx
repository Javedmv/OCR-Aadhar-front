import { useContext } from "react";
import FileUpload from "../Components/Ui/FileUpload";
import { AadharContext } from "../Context/AadharContext";
import { toast } from "react-toastify";

const ImageField = () => {
    const { setAadhar } = useContext(AadharContext);

    function handleFrontImage(ImageFile: File){
        try {
            if (!ImageFile) {
                // TODO: need to clear the preview of the image.
                throw new Error("Sorry something went wrong. Please reupload the front image.")
            }   
            setAadhar({ front: ImageFile });
        } catch (error:any) {
            toast.error(error.message || "Something went wrong")
        }
    }
    function handleBackImage(ImageFile: File){
        try {
            if (!ImageFile) {
                throw new Error("Sorry something went wrong. Please reupload the back image.")
            }  
            setAadhar({ back: ImageFile });
        } catch (error:any) {
            toast.error(error.message || "Something went wrong")
        }        
    }

    return (
        <>
            <div className="flex justify-center m-3">
                <FileUpload
                    id="aadharFront"
                    label="Aadhaar Front"
                    onChange={(file) => {
                        if(!file) return;
                        handleFrontImage(file)
                    }}
                    />
            </div>
            <div className="flex justify-center m-3">
                <FileUpload
                    id="aadharBack"
                    label="Aadhaar Back"
                    onChange={(file) => {
                        if(!file) return;                        
                        handleBackImage(file)
                    }}
                    />
            </div>
        </>
    )
}

export default ImageField;