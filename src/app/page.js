"use client"
import { useState, useEffect } from 'react';
import MotivationalSloth from 'motivational-sloth';
import QuoteCard from '../components/QuoteCard';
import ThemeSelector from '../components/ThemeSelector';

export default function Home() {
  const sloth = new MotivationalSloth();
  const [selectedTheme, setSelectedTheme] = useState("");
  const [quote, setQuote] = useState("")
  
  const handleClick = (e) => {
    setSelectedTheme(e);
    setQuote(sloth.getQuote(selectedTheme))
  }
  
  useEffect(()=>{
    const themes = sloth.getThemes();
    setSelectedTheme(themes[0])
    setQuote(sloth.getQuote(selectedTheme))
  },[])
  
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition duration-300 overflow-hidden">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Motivational Sloth</h1>
      <QuoteCard quote={quote} />
      <div className="grid grid-flow-row auto-rows-max mt-4">
      {themes.map((theme) => (
        <button
          key={theme}
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
          onClick={() => handleClick(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
    </div>
  );
}
