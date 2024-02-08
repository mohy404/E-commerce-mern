import React from 'react';
import { Link } from 'react-router-dom';

type SubTitleProps = {
  title: string;
  btntitle?: string;
  pathText: string;
};

export const SubTitle: React.FC<SubTitleProps> = ({ title, btntitle, pathText }) => {
  return (
    <div className="">
      {/* Title and Button Section */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {btntitle && (
          <Link to={`${pathText}`}>
            <button  className="border border-blue-500 text-blue-500 rounded px-4 py-1 hover:bg-blue-500 hover:text-white transition-colors duration-300">
              {btntitle}
            </button>
          </Link>
        )}
      </div>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        </div>
      </div>
    </div>
  );
};

export default SubTitle;
