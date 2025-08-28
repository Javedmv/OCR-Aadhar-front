import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full max-w-md">
      {label && (
        <label
          htmlFor={id}
          className="text-sm sm:text-base font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={`w-full border rounded px-3 py-2 sm:px-4 sm:py-3 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${className || ""}`}
      />
    </div>
  );
}

export default Input;
