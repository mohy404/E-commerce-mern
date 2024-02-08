import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryContainer from '../../Components/Category/CategoryContainer';
import Pagination from '../../Components/utility/Pagination';
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface PaginationResult {
  numberOfPages: number;
  // Include other pagination fields here
}

interface CategoryState {
  category: {
    data: Category[];
    paginationResult?: PaginationResult;
  };
  loading: boolean;
}

const AllCategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(5)); // Assuming the first page is 1
  }, [dispatch]);

  const { category, loading } = useSelector((state: { allCategory: CategoryState }) => state.allCategory);

  const pageCount = category.paginationResult?.numberOfPages ?? 0;

  const getPage = (page: number) => {
    // console.log('Page clicked:', page); // Check if this logs
    dispatch(getAllCategoryPage(page));
  };

  return (
    <div className='min-h-screen p-60'>
      <CategoryContainer data={category.data} loading={loading} />

      {
        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage}/>) : null
      }
      
    </div>
  );
};

export default AllCategoryPage;
