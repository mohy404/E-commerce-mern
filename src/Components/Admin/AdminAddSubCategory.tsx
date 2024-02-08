import React from 'react';
import { useSubCategoryForm } from '../../Hook/subCategory/useSubCategoryForm'; // Update the import path based on where you place your hook

const AdminAddSubCategory: React.FC = () => {
  const { name, setName, category, handleChange, handleSubmit } = useSubCategoryForm();

  return (
    <div className='mt-20'>
        <h2 className="text-2xl font-semibold py-4">اضافه تصنيف فرعي جديد</h2>
        <div className="flex flex-col md:w-2/3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input mt-3 px-3 py-2 block w-full border border-gray-300 rounded"
              placeholder="اسم التصنيف الفرعي"
            />
            <select
              name="category"
              id="cat"
              className="form-select mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            >
              <option value="0">اختر تصنيف رئيسي</option>
              {category.data && category.data.map((item) => (
                <option key={item._id} value={item._id}>{item.name}</option>
              ))}
            </select>
        </div>
        <div className="flex justify-end md:w-2/3">
            <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none mt-2">
                حفظ التعديلات
            </button>
        </div>
    </div>
  );
};

export default AdminAddSubCategory;
