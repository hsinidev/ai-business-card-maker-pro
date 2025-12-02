
import React, { forwardRef } from 'react';
import { CardData } from '../types';
import { FONTS } from '../constants';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX } from '../utils/DesignMath';

interface CardPreviewProps {
  data: CardData;
}

const CardPreview = forwardRef<SVGSVGElement, CardPreviewProps>(({ data }, ref) => {
  const {
    name,
    title,
    company,
    phone,
    email,
    website,
    address,
    fontFamily,
    textColor,
    backgroundColor,
    layout,
  } = data;

  const selectedFont = FONTS.find(f => f.name === fontFamily) || FONTS[0];

  const isCenter = layout === 'center';
  const xPos = isCenter ? '50%' : '50';
  const textAnchor = isCenter ? 'middle' : 'start';

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${CARD_WIDTH_PX} ${CARD_HEIGHT_PX}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-lg shadow-lg"
      style={{ fontFamily: selectedFont.value }}
    >
      <rect width="100%" height="100%" fill={backgroundColor} />
      
      {/* Main Info */}
      <text x={xPos} y="150" textAnchor={textAnchor} fill={textColor} fontSize="52" fontWeight="bold">
        {name}
      </text>
      <text x={xPos} y="210" textAnchor={textAnchor} fill={textColor} fontSize="32" opacity="0.9">
        {title}
      </text>
      {company && (
         <text x={xPos} y="260" textAnchor={textAnchor} fill={textColor} fontSize="30" opacity="0.8">
            {company}
         </text>
      )}

      {/* Contact Info */}
      <g transform="translate(0, 350)" fontSize="24" fill={textColor} opacity="0.85">
        <text x={xPos} y="0" textAnchor={textAnchor}>{phone}</text>
        <text x={xPos} y="40" textAnchor={textAnchor}>{email}</text>
        <text x={xPos} y="80" textAnchor={textAnchor}>{website}</text>
        <text x={xPos} y="120" textAnchor={textAnchor}>{address}</text>
      </g>
    </svg>
  );
});

CardPreview.displayName = 'CardPreview';

export default CardPreview;
