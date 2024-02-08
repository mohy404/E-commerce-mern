import React from 'react';

// BrandCard component
type BrandCardProps = {
    img: string;
    alt: string;
  };
  
  const BrandCard: React.FC<BrandCardProps> = ({ img, alt }) => {
    return (
      <div className="flex justify-center items-center p-4 border-2 border-gray-300 rounded">
        <img className="object-contain h-20" src={img} alt={alt} /> {/* Adjust height as necessary */}
      </div>
    );
  };
  
  export default BrandCard;