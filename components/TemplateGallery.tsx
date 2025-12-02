import React from 'react';
import { SVG_TEMPLATES } from '../constants';
import { CardData } from '../types';

interface TemplateGalleryProps {
  onSelectTemplate: (templateData: Partial<CardData>) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectTemplate }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-center text-white flex-shrink-0">Choose a Template</h3>
      <div className="flex-grow overflow-y-auto pr-2 -mr-2 template-gallery-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
          {SVG_TEMPLATES.map((template) => (
            <div
              key={template.name}
              className="group cursor-pointer"
              onClick={() => onSelectTemplate(template.data)}
              title={`Apply ${template.name} template`}
            >
              <div className="aspect-[3.5/2] w-full border-2 border-gray-600 group-hover:border-indigo-400 rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={`/templates/${template.file}`}
                  alt={template.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm mt-2 text-gray-300 group-hover:text-white truncate">{template.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;
