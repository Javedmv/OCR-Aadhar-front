import React from "react";

interface OcrResultProps {
  data: Record<string, any> | null;
}

const OcrResult: React.FC<OcrResultProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Parsed Aadhar Details
      </h3>

      <form className="flex flex-col gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 capitalize">
              {key}
            </label>
            <input
              type="text"
              value={value}
              readOnly
              className="mt-1 px-3 py-2 border rounded-md bg-gray-100 text-gray-800 shadow-sm"
            />
          </div>
        ))}
      </form>

      <div className="mt-6">
        <h4 className="text-md font-semibold text-gray-700">Raw API Response</h4>
        <pre className="mt-2 bg-gray-900 text-green-400 text-sm p-3 rounded-lg overflow-x-auto max-h-64">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default OcrResult;
