import React from 'react';

const UserEditAddress = () => {
    return (
        <div className="mt-20 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تعديل العنوان</h2>
            <div className="max-w-lg mx-auto"> {/* Centered with mx-auto */}
                <input
                    type="text"
                    className="form-input w-full mt-3 px-4 py-2 border border-gray-300 rounded"
                    value="المنزل"
                    placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                />
                <textarea
                    className="form-textarea w-full p-4 mt-4 border border-gray-300 rounded"
                    rows="4"
                    defaultValue="القاهرة ٦ اكتوبر"
                    placeholder="العنوان بالتفصيل"
                />
                <input
                    type="text"
                    className="form-input w-full mt-4 px-4 py-2 border border-gray-300 rounded"
                    value="01213621735"
                    placeholder="رقم الهاتف"
                />
                <div className="flex justify-end mt-6"> {/* Adjusted margin */}
                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out">
                        حفظ تعديل العنوان
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserEditAddress;
