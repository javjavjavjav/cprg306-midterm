"use client";
import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState("");

  const fetchSecretCode = async () => {
    const passcode = "ehen2rfow";
    const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
    const data = await response.json();
    setSecretCode(data.secretCode);
  };

  return (
    <div>
      {secretCode && (
        <div className="m-2 p-2 rounded bg-blue-300 justify-center text-center">
          Secret Code: {secretCode}
        </div>
      )}
      <div className="flex items-center justify-center">
        <button
          onClick={fetchSecretCode}
          className="bg-red-100 p-2 rounded-md border border-red-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
