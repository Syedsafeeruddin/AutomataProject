import React from "react";
import EmailValidator from "./components/EmailValidator";
import PasswordValidator from "./components/PasswordValidator";
import PatternMatcher from "./components/PatternMatcher";

export default function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black text-white">
      
      <div className="flex flex-col items-center w-full max-w-6xl p-4">
        
        <h1 className="text-5xl font-bold text-cyan-400 mb-12 drop-shadow-lg text-center">
          Validation System & Pattern Recognizer
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <EmailValidator />
          <PasswordValidator />
        </div>

        <div className="w-full max-w-3xl mt-10">
          <PatternMatcher />
        </div>

      </div>

    </div>
  );
}
