import React from 'react';
import type { FooterProps } from '../interface/Footer'; 

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    // Usa el color de fondo específico del tema si lo tienes mapeado en tailwind.config.js
    // Si no, #3C3A4D es un valor hardcodeado que funciona directamente con Tailwind.
    <footer className={`bg-[#3C3A4D] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between ${className}`}>
      <div className="mb-4 md:mb-0 text-center md:text-left text-sm md:text-base">
        <span>Copyright &copy; Búho Eat's</span>
      </div>
      <div className="flex flex-col space-y-2 text-center md:text-right">
        <a
          href="https://www.facebook.com/buhoeats"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-end text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
        >
          {/* SVG para Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-2 7h-2v3h2v2h-2v7h-3v-7H9v-2h3V7.5C12 4.75 13.75 3 16.5 3h.5V7z" />
          </svg>
          Facebook
        </a>
        <a
          href="https://www.instagram.com/buhoeats"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-end text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
        >
          {/* SVG para Instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-.058.028-1.265.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.771 4.919-4.919.058-.028 1.265-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98.028.006 1.265.072 4.948.072s3.666-.014 4.946-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-.028-.006-1.265-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
          </svg>
          Instagram
        </a>
        <a
          href="https://twitter.com/buhoeats"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-end text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
        >
          {/* SVG para Twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.216 7.404c-.679.293-1.492.513-2.348.607.785-.47 1.477-1.206 1.776-2.096-.748.441-1.564.764-2.433.938-.705-.751-1.716-1.222-2.83-1.222-2.144 0-3.908 1.83-3.908 4.093 0 .322.03.633.084.932-3.242-.164-6.155-1.737-8.092-4.133-.334.577-.525 1.246-.525 1.96 0 1.428.71 2.686 1.785 3.428-.653-.021-1.267-.202-1.807-.497v.05c0 1.986 1.444 3.647 3.348 4.025-.353.097-.73.15-1.118.15-.274 0-.54-.027-.799-.077.531 1.666 2.072 2.875 3.931 2.915-1.436 1.151-3.235 1.839-5.197 1.839-.339 0-.672-.021-1.002-.059 1.859 1.201 4.07 1.905 6.452 1.905 7.747 0 11.961-6.402 11.961-11.96 0-.182-.004-.362-.012-.541.828-.598 1.545-1.344 2.115-2.193z" />
          </svg>
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;