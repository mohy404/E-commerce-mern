import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../assets/mobile.png';

const AdminAllOrdersItem = () => {
    return (
        <div className="sm:w-full">
            <Link
                to="/admin/orders/23"
                className="flex my-2 px-1 items-center space-x-4 bg-white rounded shadow hover:shadow-md transition-shadow duration-200"
            >
                <img className="w-40 h-48 object-cover" src={mobile} alt="" />
                <div className="flex-grow">
                    <div className="flex justify-between items-center">
                        <div className="pt-2 text-base font-medium">طلب رقم #2321</div>
                        <div className="pt-2 text-base font-medium text-red-600 cursor-pointer">ازاله</div>
                    </div>
                    <div className="flex justify-start items-center mt-2">
                        <div className="pt-2 text-base font-medium">
                            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر
                        </div>
                        <div className="pt-2 text-base font-medium text-yellow-500 ml-2">4.5</div>
                    </div>
                    <div className="flex mt-2 items-center">
                        <div className="text-base font-medium">الماركة:</div>
                        <div className="text-base font-medium mx-1">ابل</div>
                        <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: "#E52C2C" }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <div className="text-base font-medium">الكميه:</div>
                            <input
                                className="form-input mx-2 text-center w-10 h-6"
                                type="number"
                                min="1"
                            />
                        </div>
                        <div className="text-base font-medium">٣٠٠٠ جنية</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdminAllOrdersItem;
