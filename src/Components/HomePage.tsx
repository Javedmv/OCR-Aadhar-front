import { useState } from "react";
import Input from "./Ui/Input";
import Button from "./Ui/Button";
import { toast } from "react-toastify";
import OcrResult from "./OcrResult";

function HomePage() {
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);
  const [ocrData, setOcrData] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!frontFile || !backFile) {
      toast.error("Please upload both Aadhar Front and Back!");
      return;
    }

    const formData = new FormData();
    formData.append("front", frontFile);
    formData.append("back", backFile);

    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.FRONTEND_URL}/ocr/extract`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setOcrData(data);
        toast.success("Aadhar parsed successfully!");
      } else {
        const error = await res.json();
        toast.error(error?.error || "Failed to parse Aadhar!");
      }
    } catch (err) {
      toast.error("Server error. Try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div
        className={`flex flex-col ${
          ocrData ? "lg:flex-row lg:items-start lg:justify-center lg:gap-8" : ""
        } w-full max-w-6xl`}
      >
        {/* Upload Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-md mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6">
            Upload Your Aadhar
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Input
                label="Aadhar Front"
                id="aadharFront"
                type="file"
                accept="image/*"
                className="cursor-pointer"
                disabled={isLoading}
                onChange={(e) =>
                  handleFileChange(e, setFrontFile, setFrontPreview)
                }
              />
              {frontPreview && (
                <img
                  src={frontPreview}
                  alt="Aadhar Front Preview"
                  className="mt-2 w-full h-40 object-contain border rounded-md shadow-sm"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                label="Aadhar Back"
                id="aadharBack"
                type="file"
                accept="image/*"
                className="cursor-pointer"
                disabled={isLoading}
                onChange={(e) => handleFileChange(e, setBackFile, setBackPreview)}
              />
              {backPreview && (
                <img
                  src={backPreview}
                  alt="Aadhar Back Preview"
                  className="mt-2 w-full h-40 object-contain border rounded-md shadow-sm"
                />
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 sm:py-3 rounded-lg font-semibold 
                         transition-all duration-200 flex items-center justify-center gap-2
                         ${
                           isLoading
                             ? "bg-orange-400 cursor-not-allowed"
                             : "bg-orange-500 hover:bg-orange-700 active:scale-[0.98]"
                         } text-white`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "PARSE AADHAR"
              )}
            </Button>
          </form>
        </div>

        {/* OCR Result Section */}
        {ocrData && (
          <div className="mt-6 lg:mt-0 w-full max-w-lg mx-auto">
            <OcrResult data={ocrData} />
          </div>
        )}
      </div>
    </main>
  );
}

export default HomePage;
