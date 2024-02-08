// useSubCategoryForm.ts
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from "../../redux/actions/categoryAction";
import { createSubCategory } from "../../redux/actions/subCategoryAction";

// Optionally, define TypeScript interfaces for your state and actions
// interface Category {
//   _id: string;
//   name: string;
// }
// interface SubCategory {
//   status?: number;
// }

export function useSubCategoryForm() {
  const dispatch = useDispatch();
  const [id, setID] = useState<string>('0');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const category = useSelector((state: any) => state.allCategory.category);
  const subcategory = useSelector((state: any) => state.allSubCategory.subcategory);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && subcategory) {
      setName('');
      setID('0');
      if (subcategory.status === 201) {
        alert("تم إضافة التصنيف الفرعي بنجاح");
      }
    }
  }, [loading, subcategory]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setID(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id === '0' || name === '') {
      alert("من فضلك اختر تصنيف رئيسي وادخل اسم التصنيف");
      return;
    }

    setLoading(true);
    try {
      await dispatch(createSubCategory({ name, category: id }));
    } catch (error) {
      // Handle any errors here
    } finally {
      setLoading(false);
    }
  };

  return { id, setId: setID, name, setName, loading, category, handleChange, handleSubmit };
}
