// AdminAddBrand.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/actions/brandAction';
import useBrandForm from '../../Hook/brand/useBrandForm';
import avatar from '../../assets/avatar.png'; // Ensure this path is correct

const AdminAddBrand = () => {
    const dispatch = useDispatch();
    const {
        img,
        text,
        selectedFile,
        isLoading,
        error,
        onImageChange,
        handleTextChange,
        setIsLoading,
        setError,
        setSelectedFile,
        setImg,
    } = useBrandForm();

    const handleFormSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!text.trim() || !selectedFile) {
            alert("يرجى إدخال اسم الماركه واختيار صورة.");
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", text);
        formData.append("image", selectedFile);

        await dispatch(createBrand(formData));

        setImg(avatar);
        handleTextChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>); // Reset text
        setSelectedFile(null);
        setIsLoading(false);
        setError(''); // Clear error message on successful submission
    };

    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-semibold py-4">اضافه ماركه جديد</h2>
            <div className="mb-8">
                <label className="block text-lg mb-2">صوره الماركه</label>
                <div>
                    <label htmlFor="upload-photo">
                        <img src={img} alt="category" height="100px" width="120px" style={{cursor: "pointer"}}/>
                    </label>
                    <input type="file" name='photo' onChange={onImageChange} id='upload-photo' aria-label="Upload category image"/>
                </div>
                <input value={text} onChange={handleTextChange} placeholder="اكتب اسم الماركه" type="text" className="mt-3 px-3 py-2 block w-full border border-gray-300 rounded" aria-label="Category name"/>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>} {/* Display error message */}
            </div>
            <div className="flex justify-end">
                <button onClick={handleFormSubmit} disabled={isLoading} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    {isLoading ? 'جاري التحميل...' : 'حفظ التعديلات'}
                </button>
            </div>
            {isLoading && <h4>جاري التحميل...</h4>}
        </div>
    );
};

export default AdminAddBrand;

