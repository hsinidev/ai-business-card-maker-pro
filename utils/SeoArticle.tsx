import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Business Card Design: From Concept to Print-Ready Masterpiece",
    "author": {
      "@type": "Person",
      "name": "HSINI MOHAMED"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Doodax AI Business Card Maker",
      "url": "https://doodax.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://doodax.com/favicon.svg"
      }
    },
    "datePublished": "2023-10-27",
    "dateModified": "2023-10-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://doodax.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard business card size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard business card size in the United States and Canada is 3.5 x 2 inches (88.9 x 50.8 mm). In Europe, the standard size is typically 85 x 55 mm."
        }
      },
      {
        "@type": "Question",
        "name": "How do I export my design for printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply click the 'Export Print-Ready PNG' button. This tool generates a high-resolution 300 DPI PNG file that includes the necessary bleed area, suitable for professional printing services like Vistaprint or Moo."
        }
      },
      {
        "@type": "Question",
        "name": "Is this tool free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the AI Business Card Maker on Doodax.com is completely free. You can design and export as many cards as you like without any hidden fees or watermarks."
        }
      }
    ]
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-4 mb-20">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-white/10 p-6 md:p-10 shadow-2xl relative">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
          Mastering Professional Identity: The Comprehensive Guide to Business Card Design
        </h2>

        <div 
          className={`prose prose-invert prose-lg max-w-none text-gray-300 transition-all duration-700 ease-in-out overflow-hidden relative ${isExpanded ? 'max-h-full opacity-100' : 'max-h-32 opacity-80'}`}
        >
          <p className="lead">
            In the digital age, where LinkedIn connections and email signatures dominate, the physical business card remains an irreplaceable currency of networking. It is the handshake that lasts, the tangible reminder of a meeting, and often, the first impression of your brand's professionalism. Welcome to the ultimate guide on leveraging the <strong>Doodax AI Business Card Maker</strong> to create a stunning, print-ready identity.
          </p>

          <h3 className="text-2xl text-white mt-8 mb-4">Table of Contents</h3>
          <ul className="list-disc pl-5 space-y-1 mb-8">
             <li><a href="#why-cards-matter" className="text-indigo-400 hover:text-indigo-300">The Enduring Relevance of Business Cards</a></li>
             <li><a href="#design-principles" className="text-indigo-400 hover:text-indigo-300">Core Design Principles: Less is More</a></li>
             <li><a href="#typography-guide" className="text-indigo-400 hover:text-indigo-300">Typography: Choosing the Right Voice</a></li>
             <li><a href="#color-psychology" className="text-indigo-400 hover:text-indigo-300">Color Psychology in Branding</a></li>
             <li><a href="#print-specs" className="text-indigo-400 hover:text-indigo-300">Technical Specifications: Bleed, Trim, and Safe Zones</a></li>
             <li><a href="#export-process" className="text-indigo-400 hover:text-indigo-300">The High-Resolution Export Process</a></li>
             <li><a href="#faq-section" className="text-indigo-400 hover:text-indigo-300">Frequently Asked Questions</a></li>
          </ul>

          <h3 id="why-cards-matter" className="text-2xl text-white mt-8 mb-4">The Enduring Relevance of Business Cards</h3>
          <p>
            Despite the ubiquity of smartphones, swapping digital details often feels impersonal and clumsy. A business card exchange is a ritual. It signals preparedness and intent. A high-quality card, like those designed on Doodax.com, conveys that you value the connection enough to invest in a physical token of it. It separates professionals from amateurs.
          </p>

          <h3 id="design-principles" className="text-2xl text-white mt-8 mb-4">Core Design Principles: Less is More</h3>
          <p>
            The most common mistake in DIY business card design is overcrowding. A business card is not a brochure. Its primary purpose is to provide contact information and reinforce brand identity. 
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>White Space:</strong> Allow your design to breathe. Negative space draws the eye to the important details.</li>
            <li><strong>Hierarchy:</strong> Your name should generally be the largest element, followed by your title, and then your contact info. This guides the reader's eye naturally.</li>
            <li><strong>Alignment:</strong> Our tool offers 'Left' and 'Center' layouts. Choose one and stick to it. Consistency creates a polished look.</li>
          </ul>

          <h3 id="typography-guide" className="text-2xl text-white mt-8 mb-4">Typography: Choosing the Right Voice</h3>
          <p>
            Fonts are the clothes your words wear. We have curated a selection of professional Google Fonts to match various industries:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Inter / Roboto / Open Sans:</strong> Clean, modern sans-serifs ideal for tech, startups, and minimalists.</li>
            <li><strong>Merriweather / Playfair Display:</strong> Elegant serifs perfect for legal, finance, and luxury brands.</li>
            <li><strong>Inconsolata:</strong> A monospaced font that screams 'developer' or 'engineer'.</li>
          </ul>

          <h3 id="color-psychology" className="text-2xl text-white mt-8 mb-4">Color Psychology in Branding</h3>
          <p>
            Colors evoke emotion. When using the Doodax color picker, consider what you want to convey:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
             <div className="bg-gray-800 p-4 rounded-lg"><strong className="text-blue-400">Blue:</strong> Trust, stability, corporate (Great for Banks, Tech).</div>
             <div className="bg-gray-800 p-4 rounded-lg"><strong className="text-red-400">Red:</strong> Passion, energy, urgency (Great for Food, Fitness).</div>
             <div className="bg-gray-800 p-4 rounded-lg"><strong className="text-green-400">Green:</strong> Growth, money, nature (Great for Finance, Eco).</div>
             <div className="bg-gray-800 p-4 rounded-lg"><strong className="text-yellow-400">Yellow:</strong> Optimism, creativity, caution (Great for Design, Construction).</div>
             <div className="bg-gray-800 p-4 rounded-lg"><strong className="text-gray-200">Black/White:</strong> Luxury, simplicity, exclusivity.</div>
          </div>

          <h3 id="print-specs" className="text-2xl text-white mt-8 mb-4">Technical Specifications: Bleed, Trim, and Safe Zones</h3>
          <p>
            To ensure your card looks as good on paper as it does on screen, you must understand printing mechanics.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Trim Line:</strong> The edge where the card is cut (3.5" x 2").</li>
            <li><strong>Bleed Area:</strong> The 1/8" extra space around the design. Background colors must extend here to avoid white borders after cutting.</li>
            <li><strong>Safe Zone:</strong> Keep all text at least 1/8" inside the trim line to prevent it from being chopped off.</li>
          </ul>
          <p>
            <em>The Doodax exporter automatically handles the aspect ratio and resolution to ensure these standards are met when you print at 100% scale.</em>
          </p>

          <h3 id="export-process" className="text-2xl text-white mt-8 mb-4">The High-Resolution Export Process</h3>
          <p>
            Most web images are 72 DPI (dots per inch), which looks pixelated when printed. Our tool uses HTML5 Canvas technology to upscale your vector design (SVG) to <strong>300 DPI</strong> (1050x600 pixels) instantly in your browser. This guarantees crisp text and sharp lines without sending your data to a server.
          </p>

          <h3 id="faq-section" className="text-2xl text-white mt-8 mb-4">Frequently Asked Questions (FAQ)</h3>
          <div className="space-y-4">
            <div>
               <h4 className="font-bold text-white">Q: Can I use these designs commercially?</h4>
               <p>A: Absolutely. You have full rights to the designs you create here for both personal and commercial use.</p>
            </div>
            <div>
               <h4 className="font-bold text-white">Q: What paper should I print on?</h4>
               <p>A: We recommend 14pt or 16pt cardstock. Matte finishes are modern and writable; gloss finishes make colors pop.</p>
            </div>
            <div>
               <h4 className="font-bold text-white">Q: Do you store my data?</h4>
               <p>A: No. Your privacy is paramount. All processing happens locally in your browser. We do not save or see your contact information.</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400 italic">
            This tool is designed and maintained by HSINI MOHAMED. Connect on LinkedIn or GitHub for more web development projects.
          </p>
        </div>

        {/* Gradient Overlay when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent rounded-b-xl z-10 flex items-end justify-center pb-8">
            {/* Button sits here */}
          </div>
        )}

        <div className="text-center relative z-20 mt-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-indigo-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
              </>
            ) : (
              <>
                <span>Read Full Guide</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoArticle;