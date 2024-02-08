// hooks/useCategories.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

interface Category {
  id: string; // Assuming each category has a unique ID
  name: string;
  image: string;
}

interface AppState {
  allCategory: {
    category: { data: Category[] };
    loading: boolean;
  };
}

export const useCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const { category, loading } = useSelector(
    (state: AppState) => state.allCategory
  );

  return { category, loading };
};

export default useCategories;
