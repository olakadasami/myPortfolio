import React from "react";

interface ErrorProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-lg mx-auto mt-4 rounded-md shadow-lg">
      <div className="flex">
        <svg
          className="h-6 w-6 text-red-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636"
          />
        </svg>
        <p className="font-bold">Error:</p>
      </div>
      <p className="mt-1">{errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
