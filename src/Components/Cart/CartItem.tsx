import React from 'react';
import mobile from '../../assets/mobile.png';
import deleteicon from '../../assets/delete.png';

const CartItem = () => {
    return (
        <div className="flex my-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img className="w-40 h-auto object-cover rounded" src={mobile} alt="Product" />
            <div className="flex-grow ml-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-gray-800">الالكترونيات</div>
                    <button className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                        <img src={deleteicon} alt="Delete" className="w-5 h-5" />
                        <span className="ml-2 text-sm">ازاله</span>
                    </button>
                </div>
                <div className="mt-2">
                    <div className="text-lg font-medium text-gray-700">
                        آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر
                    </div>
                    <div className="text-red-500 font-bold mt-1">4.5</div>
                </div>
                <div className="mt-2">
                    <div className="font-medium">الماركة: <span className="font-normal ml-1">ابل</span></div>
                </div>
                <div className="flex mt-2">
                    <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: "#E52C2C" }}></div>
                </div>
                <div className="flex justify-between items-center mt-4">
                <div className="flex items-center mt-3">
    <label htmlFor="quantity" className="text-lg font-medium mr-2">الكمية:</label>
    <input
        id="quantity"
        className="form-input text-center w-16 h-10 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
        type="number"
        min="1"
        defaultValue="1" // Set the default quantity value
    
    />
</div>


                    <div className="text-2xl font-bold text-green-600">٣٠٠٠ جنية</div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
