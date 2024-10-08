import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Lynx UI Documentation</h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </form>

        {/* Documentation Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Contents</h2>
            <ul className="space-y-2">
              <li><a href="#getting-started" className="text-blue-500 hover:underline">Getting Started</a></li>
              <li><a href="#components" className="text-blue-500 hover:underline">Components</a></li>
              <li><a href="#theming" className="text-blue-500 hover:underline">Theming</a></li>
              <li><a href="#api-reference" className="text-blue-500 hover:underline">API Reference</a></li>
              <li><a href="#examples" className="text-blue-500 hover:underline">Examples</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <section id="getting-started" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <p className="mb-4">Welcome to Lynx UI! Follow these steps to get started with our component library:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Install Lynx UI using npm or yarn</li>
                <li>Import the necessary components in your React application</li>
                <li>Start building beautiful interfaces with ease!</li>
              </ol>
            </section>

            <section id="components" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Components</h2>
              <p className="mb-4">Lynx UI offers a wide range of customizable components. Here are some of our most popular ones:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Buttons</li>
                <li>Forms</li>
                <li>Modals</li>
                <li>Navigation</li>
                <li>Data Display</li>
              </ul>
            </section>

            <section id="theming" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Theming</h2>
              <p>Learn how to customize the look and feel of Lynx UI components to match your brand identity.</p>
            </section>

            <section id="api-reference" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">API Reference</h2>
              <p>Detailed documentation for all Lynx UI components, including props, methods, and examples.</p>
            </section>

            <section id="examples" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Examples</h2>
              <p>Explore real-world examples and code snippets to see Lynx UI in action.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;