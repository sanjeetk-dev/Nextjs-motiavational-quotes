"use client"


import { useState } from 'react';
import MotivationalSloth from 'motivational-sloth';
import QuoteCard from '../components/QuoteCard';
import ThemeSelector from '../components/ThemeSelector';

export default function Home() {
  const sloth = new MotivationalSloth();
  const themes = sloth.getThemes();
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const quote = sloth.getQuote(selectedTheme);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition duration-300`}>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Motivational Sloth</h1>
      <QuoteCard quote={quote} />
      <ThemeSelector themes={themes} onSelectTheme={setSelectedTheme} />
    </div>
  );
}
