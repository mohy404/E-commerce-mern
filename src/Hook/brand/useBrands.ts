import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction.js";


interface Brands {
    id: string; // Assuming each Brands has a unique ID
    name: string;
    image: string;
  }
  
  interface AppState {
    allBrand: {
        brands: { data: Brands[] };
      loading: boolean;
    };
  }
  
  export const useBrands = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllBrand());
    }, [dispatch]);
  
    const { brands, loading } = useSelector(
      (state: AppState) => state.allBrand
    );
  
    return { brands, loading };
  };
  
  export default useBrands;