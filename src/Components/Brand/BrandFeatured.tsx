// BrandFeatured.tsx
import React from 'react';
import SubTitle from '../utility/SubTitle';
import BrandCard from './BrandCard';
import useBrands from '../../Hook/brand/useBrands';

const BrandFeatured: React.FC = () => {
  const { brands, loading } = useBrands(); // Assuming useBrands returns an array of brands and loading state

  return (
    <div className="mx-auto px-4 py-8 bg-white"> 
      <SubTitle title="ماركات هتحبها" btntitle="المزيد" pathText='/allbrand' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pr-60 pt-4'>
        {loading ? (
          <LoadingIndicator />
        ) : brands.data && brands.data.length > 0 ? (
          brands.data
          .slice(0 , 5)
          .map((item , index) => (
            <BrandCard key={index} img={item.image} alt={item.name} />
          ))
        ) : (
          <h4> لا توجد ماركات </h4>
        )}
      </div>
    </div>
  );
};

const LoadingIndicator = () => (
  <button
    type="button"
    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    disabled
  >
    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
      <path d="..." />
    </svg>
    جاري التحميل ...
  </button>
);

export default BrandFeatured;
