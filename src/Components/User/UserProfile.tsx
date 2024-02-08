import deleteicon from '../../assets/delete.png';

const UserProfile = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-xl font-semibold my-3">الصفحه الشخصية</h2>
            <div className="bg-white shadow rounded p-4">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                        <div className="font-medium p-2">الاسم:</div>
                        <div className="p-1 text-gray-600">احمد عبداللة</div>
                    </div>
                    <div className="flex items-center">
                        <img
                            alt=""
                            src={deleteicon}
                            className="h-4 w-4 ml-2"
                        />
                        <p className="text-blue-600 cursor-pointer">تعديل</p>
                    </div>
                </div>

                <div className="flex py-2">
                    <div className="font-medium p-2">رقم الهاتف:</div>
                    <div className="p-1 text-gray-600">0122314324</div>
                </div>
                <div className="flex py-2">
                    <div className="font-medium p-2">الايميل:</div>
                    <div className="p-1 text-gray-600">ahmed@gmail.com</div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">تغير كلمة المرور</h3>
                    <input
                        type="password"
                        className="form-input w-full mt-1 px-4 py-2"
                        placeholder="ادخل كلمة المرور القديمة"
                    />
                    <input
                        type="password"
                        className="form-input w-full mt-3 px-4 py-2"
                        placeholder="ادخل كلمة المرور الجديدة"
                    />
                    <div className="flex justify-end mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            حفظ كلمة السر
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
