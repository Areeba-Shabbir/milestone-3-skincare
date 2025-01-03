// components/Footer.tsx
"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Healthy Glow. All rights reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ to promote healthy and glowing skincare habbits.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
