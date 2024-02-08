import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions/productAction';


const useViewHomeProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

 
  const allProducts = useSelector((state) => state.allProducts.allProducts)

  
  let items = []
  if (allProducts.data)
  items = allProducts.data.slice(0 , 4)
else
items = []
  

  return { items };
};

export default useViewHomeProducts;
