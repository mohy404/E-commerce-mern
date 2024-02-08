import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../redux/actions/productAction';
import { getOneCategory } from '../../redux/actions/categoryAction';
import mobile from '../../assets/mobile.png';

// Define TypeScript interfaces for your state and props as needed
interface ProductState {
  allProducts: {
    oneProduct: {
      data?: {
        category?: string;
        images?: string[];
      }
    }
  };
  allCategory: {
    oneCategory: {
      data?: any; // Replace 'any' with a more specific type based on your data structure
    }
  };
}

const useViewDetailsProduct = (prodID: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, [prodID, dispatch]);

  const { oneProduct, oneCategory } = useSelector((state: ProductState) => ({
    oneProduct: state.allProducts.oneProduct,
    oneCategory: state.allCategory.oneCategory,
  }));

  useEffect(() => {
    if (oneProduct.data?.category) {
      dispatch(getOneCategory(oneProduct.data.category));
    }
  }, [dispatch, oneProduct.data?.category]);

  const images = oneProduct.data?.images?.map((img) => ({ original: img })) ?? [{ original: mobile }];
  const cat = oneCategory.data ?? [];

  // Optionally, remove console.log before production deployment
  // if (cat) console.log(cat);

  return { item: oneProduct.data ?? [], images, cat };
};

export default useViewDetailsProduct;
