import React from 'react';
import rate from '../../assets/rate.png';

const RateItem = () => {
    return (
        <div className="flex flex-col p-4 border border-gray-200 rounded shadow-sm mb-4">
            <div className="flex items-center mb-2">
                <div className="font-medium text-lg mr-2">احمد محمود</div>
                <img src={rate} alt="Rating" className="h-5 w-5" />
                <div className="text-sm font-semibold text-yellow-500 ml-2">4.3</div>
            </div>
            <div className="text-gray-600">
                منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
            </div>
            <div className="mt-3 border-t pt-2">
                <div className="text-sm text-gray-500">12 يناير 2024</div>
            </div>
        </div>
    );
}

export default RateItem;
