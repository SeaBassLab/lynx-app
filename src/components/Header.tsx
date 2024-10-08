import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Cat className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-2" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Lynx UI</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Pricing</Link></li>
            <li><Link to="/docs" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Docs</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/pricing" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;