import React, { useState, useRef } from 'react';
import { CardData, CardLayout } from '../types';
import { FONTS, DEFAULT_CARD_DATA } from '../constants';
import CardPreview from './CardPreview';
import { exportSvgToPng } from '../services/DesignExporter';
import TemplateGallery from './TemplateGallery';

const CardDesignTool: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>(DEFAULT_CARD_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLayoutChange = (layout: CardLayout) => {
    setCardData(prev => ({ ...prev, layout }));
  };

  const handleExport = async () => {
    if (!svgRef.current) return;
    setIsLoading(true);
    try {
      await exportSvgToPng(svgRef.current, 'business-card.png', 1);
    } catch (error) {
      console.error('Export failed:', error);
      alert('There was an error exporting your card. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectTemplate = (templateData: Partial<CardData>) => {
    setCardData(prev => ({
      ...prev,
      ...templateData,
    }));
  };

  const inputFields = [
    { id: 'name', label: 'Name', placeholder: 'e.g., Jane Doe' },
    { id: 'title', label: 'Title', placeholder: 'e.g., CEO / Founder' },
    { id: 'company', label: 'Company', placeholder: 'e.g., Innovate Inc.' },
    { id: 'phone', label: 'Phone', placeholder: 'e.g., (123) 456-7890' },
    { id: 'email', label: 'Email', placeholder: 'e.g., jane.doe@innovate.com' },
    { id: 'website', label: 'Website', placeholder: 'e.g., www.innovate.com' },
    { id: 'address', label: 'Address', placeholder: 'e.g., 123 Innovation Dr.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-4 drop-shadow-sm">
          Design Your Legacy
        </h1>
        <p className="mt-2 text-xl text-gray-300 max-w-2xl mx-auto">
          Create a professional, print-ready business card in seconds. <span className="text-indigo-400 font-semibold">Free. Fast. Private.</span>
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Panel: Form Inputs */}
        <div className="lg:col-span-2 bg-slate-900/60 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4 text-indigo-300 flex items-center gap-2">
                <span>👤</span> Personal Info
              </h3>
              <div className="grid gap-3">
                {inputFields.map(field => (
                  <div key={field.id} className="relative group">
                    <input
                      type="text"
                      id={field.id}
                      name={field.id}
                      value={cardData[field.id as keyof CardData]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                    />
                    <label htmlFor={field.id} className="absolute -top-2 left-3 bg-slate-900 px-1 text-xs text-indigo-300 font-medium opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-lg font-bold mb-4 text-indigo-300 flex items-center gap-2">
                <span>🎨</span> Style Controls
              </h3>
              <div className="mb-4">
                <label htmlFor="fontFamily" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">Font Family</label>
                <select name="fontFamily" id="fontFamily" value={cardData.fontFamily} onChange={handleInputChange} className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer">
                  {FONTS.map(font => <option key={font.name} value={font.name}>{font.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="textColor" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">Text Color</label>
                  <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-gray-600">
                    <input type="color" id="textColor" name="textColor" value={cardData.textColor} onChange={handleInputChange} className="w-8 h-8 rounded cursor-pointer border-none bg-transparent" />
                    <span className="text-xs font-mono text-gray-300">{cardData.textColor}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="backgroundColor" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">Background</label>
                  <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-gray-600">
                    <input type="color" id="backgroundColor" name="backgroundColor" value={cardData.backgroundColor} onChange={handleInputChange} className="w-8 h-8 rounded cursor-pointer border-none bg-transparent" />
                    <span className="text-xs font-mono text-gray-300">{cardData.backgroundColor}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-lg font-bold mb-4 text-indigo-300 flex items-center gap-2">
                <span>📐</span> Layout
              </h3>
              <div className="flex bg-slate-800/50 border border-gray-600 rounded-lg p-1">
                <button onClick={() => handleLayoutChange('left')} className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${cardData.layout === 'left' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-slate-700'}`}>Left Align</button>
                <button onClick={() => handleLayoutChange('center')} className={`w-1/2 py-2 text-sm font-medium rounded-md transition-all ${cardData.layout === 'center' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-slate-700'}`}>Center Align</button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Panel: Preview */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex-grow flex items-center justify-center sticky top-24 z-30">
            <div className="w-full max-w-xl aspect-[3.5/2] relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <CardPreview data={cardData} ref={svgRef} />
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Templates and Export */}
       <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <div className="lg:col-span-2 hidden lg:block">
            {/* Spacer */}
          </div>
          <div className="lg:col-span-3 bg-slate-900/60 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-2xl">
             <div className="h-96">
                <TemplateGallery onSelectTemplate={handleSelectTemplate} />
             </div>
             <div className="mt-6 text-center">
                 <button onClick={handleExport} disabled={isLoading} className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                     {isLoading ? (
                       <span className="flex items-center justify-center gap-2">
                         <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                         Generating High-Res PNG...
                       </span>
                     ) : 'Download Print-Ready PNG (300 DPI)'}
                 </button>
                 <p className="mt-2 text-xs text-gray-500">Free download • No watermark • Secure local processing</p>
             </div>
          </div>
       </div>

    </div>
  );
};

export default CardDesignTool;