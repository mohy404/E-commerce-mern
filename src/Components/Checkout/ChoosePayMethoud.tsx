import React from 'react';

const ChoosePayMethoud = () => {
    return (
        <div className="bg-white shadow rounded-lg p-8 mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">اختر طريقة الدفع</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        name="paymentMethod"
                        id="creditCard"
                        type="radio"
                        value="الدفع عن طريق الفيزا"
                        className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="creditCard" className="ml-2 text-lg text-gray-700">
                        الدفع عن طريق البطاقه الائتمانية
                    </label>
                </div>

                <div className="flex items-center">
                    <input
                        name="paymentMethod"
                        id="cashOnDelivery"
                        type="radio"
                        value="الدفع عند الاستلام"
                        className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="cashOnDelivery" className="ml-2 text-lg text-gray-700">
                        الدفع عند الاستلام
                    </label>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="text-xl font-semibold">المجموع: 34000 جنية</div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all">
                    اتمام الشراء
                </button>
            </div>
        </div>
    );
}

export default ChoosePayMethoud;
