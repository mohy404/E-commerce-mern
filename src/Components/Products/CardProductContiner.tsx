import React from 'react';
import ProductCard from './productCard';
import SubTitle from '../utility/SubTitle';

type CardProductContainerProps = {
  title: string;
  btntitle: string;
  pathText: string
  products: []
};

const CardProductContainer: React.FC<CardProductContainerProps> = ({ title, btntitle, pathText, products }) => {
  return (
    <div className='bg-white rounded-br-md rounded-bl-md'>
      { products ? (<SubTitle title={title} btntitle={btntitle} pathText={pathText} />) : null}  
      
      <div className="my-2 flex justify-between flex-wrap">

        {
            products ? (
                products.map((item , index) => <ProductCard key={index}  item={item}/> )
            ) : null
        }
        
        
      </div>
    </div>
  );
};

export default CardProductContainer;
