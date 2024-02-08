import React from 'react';

const CategoryHeader = () => {
    return (
        <div className="bg-slate-50 text-black p-16 max-h-3.5">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex overflow-x-auto py-4 space-x-8">
                    <div className="cat-text-header text-lg font-medium hover:text-gray-700 cursor-pointer pl-5">جميع الفئات</div>
                    <div className="cat-text-header text-lg font-medium hover:text-gray-500 cursor-pointer">الكترونيات</div>
                    <div className="cat-text-header text-lg font-medium hover:text-gray-500 cursor-pointer">ملابس</div>
                    <div className="cat-text-header text-lg font-medium hover:text-gray-500 cursor-pointer">كهربيه</div>
                    <div className="cat-text-header text-lg font-medium hover:text-gray-500 cursor-pointer">تخفيضات</div>
                    {/* ...more items */}
                    <div className="cat-text-header text-lg font-medium hover:text-gray-500 cursor-pointer">المزيد</div>
                </div>
            </div>
        </div>
    );
}

export default CategoryHeader;
