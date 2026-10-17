import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="w-16 h-16 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8" />
      </div>
      <h1 className="font-serif text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        The page you are looking for has drifted into the void or does not exist.
      </p>
      <Link
        to="/"
        className="px-8 py-4 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/30 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Portfolio
      </Link>
    </div>
  );
}