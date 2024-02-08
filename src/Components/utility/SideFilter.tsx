import React from 'react';

const SideFilter = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-col mt-2">
                <div className="text-xl font-bold mb-2">الفئة</div>
                <label className="flex items-center mt-3">
                    <input type="checkbox" value="" className="form-checkbox h-5 w-5 text-gray-600" />
                    <span className="ml-2 text-sm">الكل</span>
                </label>
                {/* Repeat for each category */}
                <label className="flex items-center mt-2">
                    <input type="checkbox" value="" className="form-checkbox h-5 w-5 text-gray-600" />
                    <span className="ml-2 text-sm">اجهزة منزلية</span>
                </label>
                {/* ... */}
            </div>
  
            <div className="flex flex-col mt-4">
                <div className="text-xl font-bold mb-2">الماركة</div>
                <label className="flex items-center mt-3">
                    <input type="checkbox" value="" className="form-checkbox h-5 w-5 text-gray-600" />
                    <span className="ml-2 text-sm">الكل</span>
                </label>
                {/* Repeat for each brand */}
                <label className="flex items-center mt-2">
                    <input type="checkbox" value="" className="form-checkbox h-5 w-5 text-gray-600" />
                    <span className="ml-2 text-sm">ابل</span>
                </label>
                {/* ... */}
            </div>
  
            <div className="text-xl font-bold my-4">السعر</div>
            <div className="flex items-center">
                <span className="text-sm my-2">من:</span>
                <input
                    className="mx-2 text-center form-input border border-gray-300 rounded-md h-6 w-14"
                    type="number"
                />
            </div>
            <div className="flex items-center">
                <span className="text-sm my-2">الي:</span>
                <input
                    className="mx-2 text-center form-input border border-gray-300 rounded-md h-6 w-14"
                    type="number"
                />
            </div>
        </div>
    )
}

export default SideFilter;
