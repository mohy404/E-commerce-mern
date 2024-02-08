import React from 'react';
import BrandCard from './BrandCard';



interface Brands {
  id: string;
  name: string;
  image: string;
}

interface BrandsContainerProps {
  data: Brands[];
  loading: boolean;
  
}

const BrandContainer: React.FC<BrandsContainerProps> = ({ data, loading }) => {
  return (
    <div className='bg-white rounded-br-md rounded-bl-md'>
      <div className='text-slate-900 text-2xl'>كل الماركات</div>
      <div className="my-2 flex justify-between flex-wrap">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return ( <BrandCard key={index} img={item.image} alt={''}/> )
            })
          ) : <h4>لا توجد ماركات</h4>
        ) : <LoadingIndicator/>
        }
        
      </div>
    </div>
  );
};

const LoadingIndicator = () => (
  <button type="button" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" disabled>
    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
      <path d="..." />
    </svg>
    جاري التحميل ...
  </button>
);



export default BrandContainer;
