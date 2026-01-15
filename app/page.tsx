"use client"

import { useState } from "react";
import { translateJargon } from "./actions";

export default function Home() {

  const [content, setContent] = useState('');
  const [output, setOutput] = useState('');

  async function generateTranslation() {
    const response = await translateJargon(content);
    setOutput(response);
  };

  return (
    <main className="flex flex-col justify-between items-center mt-20 gap-6">
      <h1 className="text-5xl font-bold mb-20">Grandmother GPT</h1>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border border-gray-400 rounded-lg p-2 w-100 h-32" placeholder="Enter dev jargon..." />
      <button onClick={() => generateTranslation()} className="bg-green-600 rounded-full py-3 px-6 text-white hover:bg-green-400 cursor-pointer">Translate</button>
      <p className="text-center italic">{output}</p>
    </main>
  );
}
