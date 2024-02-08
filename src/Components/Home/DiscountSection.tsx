import React from 'react';
import laptop from '../../assets/labtop.png'; // Make sure the path to your image is correct

const DiscountSection = () => {
  return (
    <div className="container mx-auto my-3 p-4 bg-gradient-to-r from-pink-300 via-yellow-300 to-blue-300 rounded-lg overflow-hidden">
      <div className="flex items-center justify-center">
        {/* Product Image */}
        <div className="w-1/2 flex justify-center">
          <img src={laptop} alt="Laptop" className="max-w-xs" /> {/* Adjust max-w-xs based on your design */}
        </div>
        
        {/* Discount Information */}
        <div className="w-1/2 text-right pr-8"> {/* pr-8 is padding right, adjust as needed */}
          <p className="text-lg font-bold uppercase">Fossil | Casio | Boss</p>
          <p className="text-4xl font-bold mt-2">خصم يصل</p>
          <p className="text-4xl font-bold mb-2">٣٠%</p>
          <p className="font-semibold">على اللابتوبات</p>
          <button className="mt-4 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            تفاصيل
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
