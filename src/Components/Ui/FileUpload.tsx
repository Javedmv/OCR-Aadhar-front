import React, { useState } from "react";
import { Camera, Upload } from "lucide-react";
import Button from "./Button";
import { toast } from "react-toastify";

interface FileUploadProps {
  id: string;
  label: string;
  onChange?: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ id, label, onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];

        // Check file type
        if (!file.type.startsWith("image/")) {
          setPreview(null);
          if (onChange) onChange(null);
          throw new Error("Only image files are allowed!");
        }

        if (file.size < 50 * 1024) { // 50 KB minimum
          setPreview(null);
          if (onChange) onChange(null);
          throw new Error("Image is too small. Please upload a clear image. minimum 50kb required!!");
        }

        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          try {
            if (img.width < 800 || img.height < 600) {
              setPreview(null);
              if (onChange) onChange(null);
              throw new Error("Image resolution too low. Please use a higher-quality image");
            }

            setPreview(img.src);
            if (onChange) onChange(file);
          } catch (error: any) {
            toast.error(error.message || "Something went wrong in image resolution!");
          }
        };
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const handleRecapture = () => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.value = "";
      input.click();
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full max-w-full sm:max-w-sm md:max-w-xl">
      <p className="text-xs sm:text-sm font-medium text-gray-700">{label}</p>
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-36 sm:h-48 md:h-55 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition px-2 sm:px-4"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-contain rounded-md"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 mb-1 sm:mb-2" />
            <span className="text-[10px] sm:text-xs text-gray-500">
              Click here to Upload/Capture
            </span>
          </div>
        )}
      </label>

      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {preview && (
        <div className="flex items-center justify-center m-1">
          <Button
            type="button"
            onClick={handleRecapture}
            className="px-3 py-2 md:text-xl flex items-center justify-center gap-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition"
          >
            <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
            Press to Recapture & Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;