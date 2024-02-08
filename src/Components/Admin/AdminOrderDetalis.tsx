import CartItem from '../Cart/CartItem';


const AdminOrderDetails = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-xl font-bold text-gray-800">تفاصيل الطلب رقم#55</h1>
            <CartItem />
            <CartItem />
            <CartItem />

            <div className="mt-4 bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل العميل</h2>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <span className="text-gray-700 font-medium">الاسم:</span>
                        <span className="text-gray-500 ml-2">احمد عبداللة</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700 font-medium">رقم الهاتف:</span>
                        <span className="text-gray-500 ml-2">0021313432423</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-700 font-medium">الايميل:</span>
                        <span className="text-gray-500 ml-2">ahmed@gmail.com</span>
                    </div>
                </div>

                <div className="text-center py-2 border-t mt-4">المجموع ٤٠٠٠ جنيه</div>
                
                <div className="mt-2 flex justify-center">
                    <select
                        name="status"
                        id="status"
                        className="form-select mt-1 block w-1/2 text-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="processing">قيد التنفيذ</option>
                        <option value="completed">تم الانتهاء</option>
                        <option value="cancelled">الغاء</option>
                    </select>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none ml-2">حفظ</button>
                </div>
            </div>
        </div>
    );
}

export default AdminOrderDetails;
