import React from 'react';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';


const ProductDetalis = () => {
    return (
        <div>
            <div className="flex flex-wrap py-3">
                <div className="w-full lg:w-4/12">
                    <ProductGallery />
                </div>

                <div className="w-full lg:w-8/12">
                    <ProductText />
                </div>
            </div>
        </div>
    );
}

export default ProductDetalis;
