import React, { useState } from 'react';
import Modal from './Modal';
import SeoArticle from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return {
          title: 'About Us',
          content: (
             <div className="space-y-4">
               <p>Welcome to the Doodax AI Business Card Maker. This project demonstrates the power of modern web technologies like React, TypeScript, and HTML5 Canvas to deliver real-time design capabilities directly in the browser.</p>
               <p>Our mission is to democratize professional design, allowing anyone to create a brand identity without expensive software or designers.</p>
             </div>
          )
        };
      case 'contact':
        return {
          title: 'Contact Us',
          content: (
            <div className="space-y-4">
              <p>We value your feedback and inquiries. Please reach out to us at:</p>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-indigo-400">Email:</span> 
                  <a href="mailto:hsini.web@gmail.com" className="hover:text-white underline">hsini.web@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-indigo-400">Website:</span> 
                  <a href="http://www.doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">doodax.com</a>
                </p>
              </div>
            </div>
          )
        };
      case 'guide':
        return {
          title: 'Design Guide',
          content: <SeoArticle />
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="space-y-4 text-sm">
              <p><strong>Last Updated: October 27, 2023</strong></p>
              <p>At Doodax, we prioritize your privacy. This policy outlines how we handle your data.</p>
              <h4 className="font-bold text-white">1. Data Collection</h4>
              <p>We do not collect personal data on our servers. All input data (names, emails, phones) entered into the Business Card Maker is processed locally within your browser's memory using JavaScript.</p>
              <h4 className="font-bold text-white">2. Cookies</h4>
              <p>We use standard local storage to enhance your experience, but no tracking cookies are employed for advertising purposes.</p>
              <h4 className="font-bold text-white">3. Third-Party Links</h4>
              <p>This site may contain links to external sites (e.g., GitHub). We are not responsible for the privacy practices of those sites.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div className="space-y-4 text-sm">
               <p><strong>Acceptance of Terms</strong></p>
               <p>By accessing Doodax.com, you agree to be bound by these terms.</p>
               <p><strong>Use License</strong></p>
               <p>Permission is granted to use this software for personal or commercial business card generation. You may not reverse engineer the source code without permission.</p>
               <p><strong>Disclaimer</strong></p>
               <p>The materials on Doodax.com are provided "as is". We make no warranties, expressed or implied.</p>
            </div>
          )
        };
      case 'dmca':
        return {
          title: 'DMCA Policy',
          content: (
            <div className="space-y-4 text-sm">
              <p>We respect the intellectual property rights of others. If you believe that any material available on this website infringes upon any copyright you own or control, please immediately notify us at <a href="mailto:hsini.web@gmail.com" className="text-blue-400">hsini.web@gmail.com</a>.</p>
              <p>Please provide:</p>
              <ul className="list-disc pl-5">
                <li>A description of the copyrighted work.</li>
                <li>The URL where the infringing material is located.</li>
                <li>Your contact information.</li>
              </ul>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const modalData = renderModalContent();
  const navLinks: { label: string, modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Cosmic Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <img src="/favicon.svg" alt="Doodax Logo" className="w-8 h-8" />
               <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">DOODAX</span>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm font-medium">
              {navLinks.map(link => (
                <li key={link.modal}>
                  <button 
                    onClick={() => setActiveModal(link.modal)} 
                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center">
          {children}
          
          {/* Render SEO Article on the page for crawlers, visually handled by component */}
          <div className="w-full mt-12">
            <SeoArticle />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-slate-900/60 backdrop-blur-xl border-t border-white/10 py-8 text-center text-gray-400 mt-auto">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-4">
                <a href="http://www.doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
                <span className="hidden md:inline text-gray-600">•</span>
                <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
             </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} AI Business Card Maker. All rights reserved.
            </p>
            <p className="mt-4 pt-4 border-t border-white/5 text-xs uppercase tracking-widest text-indigo-400">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-indigo-300 transition-colors ml-1">HSINI MOHAMED</a>
            </p>
          </div>
        </footer>
      </div>

      {/* Modal Overlay */}
      <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)} title={modalData.title}>
        <div className="text-gray-200">
           {modalData.content}
        </div>
      </Modal>
    </div>
  );
};

export default Layout;