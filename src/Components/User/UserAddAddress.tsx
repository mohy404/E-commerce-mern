const UserAddAddress = () => {
    return (
        <div className="mt-20 ">
            <h2 className="text-2xl font-bold mb-5">اضافة عنوان جديد</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="تسمية العنوان مثلا (المنزل - العمل)"
                />
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    placeholder="العنوان بالتفصيل"
                />
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="رقم الهاتف"
                />
            </div>
            <div className="mt-6 flex justify-end">
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    اضافة عنوان
                </button>
            </div>
        </div>
    );
}

export default UserAddAddress;
