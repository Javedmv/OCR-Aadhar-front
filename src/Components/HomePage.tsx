import { useState } from "react";
import Input from "./Ui/Input";
import Button from "./Ui/Button";
import { toast } from "react-toastify";

function HomePage() {
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);

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
  
    try {
      const res = await fetch("http://localhost:3000/ocr/extract", {
        method: "POST",
        body: formData,
      });
  
      if (res.ok) {
        const data = await res.json();
        toast.success("Aadhar parsed successfully!");
        console.log("OCR Result:", data);
      } else {
        const error = await res.json();
        toast.error(error?.error || "Failed to parse Aadhar!");
      }
    } catch (err) {
      toast.error("Server error. Try again later!");
    }
  };
  

  return (
    <main className="flex items-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-md">
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
              onChange={(e) => handleFileChange(e, setFrontFile, setFrontPreview)
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
            className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg font-semibold 
                       hover:bg-orange-700 active:scale-[0.98] transition-all duration-200"
          >
            PARSE AADHAR
          </Button>
        </form>
      </div>
    </main>
  );
}

export default HomePage;
