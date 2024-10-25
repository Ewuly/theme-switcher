import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Theme Switcher Demo</h1>
          <ThemeSwitcher />
        </header>
        <main>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            This is a sample paragraph to demonstrate the theme switching functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Card 1</h2>
              <p className="text-gray-700 dark:text-gray-300">This is some sample content for card 1.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Card 2</h2>
              <p className="text-gray-700 dark:text-gray-300">This is some sample content for card 2.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;