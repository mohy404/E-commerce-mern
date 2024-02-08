// AllBrandPage.tsx
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Components/utility/Pagination';
import BrandContainer from '../../Components/Brand/BrandContainer';
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';

interface Brands {
  id: string;
  name: string;
  image: string;
}

interface PaginationResult {
  numberOfPages: number;
  // Include other pagination fields here
}

interface BrandState {
  brands: {
    data: Brands[];
    paginationResult?: PaginationResult;
  };
  loading: boolean;
}

const AllBrandPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand(5)); // Assuming 5 is the correct parameter
  }, [dispatch]);
  
  const { brands, loading } = useSelector((state: { allBrand: BrandState }) => state.allBrand);

  // Use optional chaining to safely access paginationResult
  const pageCount = brands?.paginationResult?.numberOfPages ?? 0;

  const getPage = (page: number) => {
    dispatch(getAllBrandPage(page));
  };

  return (
    <div className='min-h-screen p-60 '>
        <BrandContainer data={brands?.data} loading={loading}/>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} onPress={getPage}/>
        )}
    </div>
  );
};

export default AllBrandPage;
