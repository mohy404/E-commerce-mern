import React from 'react';
import { Link } from 'react-router-dom';

const CartCheckout = () => {
    return (
        <div className="flex justify-center my-4 pt-3">
            <div className="flex flex-col w-full max-w-md px-4 bg-white shadow rounded-lg">
                <div className="flex justify-between p-4 border-b">
                    <input
                        className="border-2 border-gray-300 rounded p-2 flex-grow mr-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
                        placeholder="كود الخصم"
                    />
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">تطبيق</button>
                </div>
                <div className="text-center py-3 my-2 text-lg font-semibold">34000 جنية</div>
                <Link to="/order/paymethoud" className="no-underline">
                    <button className="w-full bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 transition-colors">اتمام الشراء</button>
                </Link>
            </div>
        </div>
    );
}

export default CartCheckout;
