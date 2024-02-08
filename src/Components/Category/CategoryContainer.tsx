import React from 'react';
import CategoryCard from './categoryCard';

interface Category {
  id: string; // Assuming each category has a unique ID
  name: string;
  image: string;
}

interface CategoryContainerProps {
  data: Category[];
  loading: boolean;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ data, loading }) => {
  const colors = ["#AED6F1", "#FFD3E8", "#55CFDF", "#FF6262", "#F4DBA5"];

  return (
    <div className='bg-white rounded-br-md rounded-bl-md'>
      <div className='text-slate-900 text-2xl'>كل التصنيفات</div>
      <div className="my-2 flex justify-between flex-wrap">
        {loading ? (
          <LoadingIndicator />
        ) : data && data.length > 0 ? (
          data.map((item) => (
            <CategoryCard 
              key={item.id} 
              title={item.name} 
              img={item.image} 
              background={colors[Math.floor(Math.random() * colors.length)]} 
            />
          ))
        ) : (
          <NoCategoriesMessage />
        )}
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

const NoCategoriesMessage = () => <h4>لا يوجد تصنيفات</h4>;

export default CategoryContainer;
