import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Armin Boleń. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & developed with ❤️ in Poland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
