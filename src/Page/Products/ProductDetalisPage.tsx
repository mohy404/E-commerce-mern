import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductDetalis from '../../Components/Products/ProductDetalis';
import CardProductContainer from '../../Components/Products/cardProductContiner';
import RateContainer from '../../Components/Rate/RateContainer';



const ProductDetalisPage = () => {

   
    return (
        <div className="min-h-screen"> {/* minHeight: '670px' can be replaced with min-h-screen for full screen height */}
            <CategoryHeader />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Tailwind CSS for Container */}
                <ProductDetalis  />
                <RateContainer />
                <CardProductContainer title="منتجات قد تعجبك" btntitle={''} pathText={''} />
            </div>
        </div>
    );
}

export default ProductDetalisPage;
