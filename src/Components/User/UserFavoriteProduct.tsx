import ProductCard from "../Products/productCard";
import Pagination from "../utility/Pagination";

const UserFavoriteProduct = () => {
    return (
        <div className='mt-20 pl-60'>
            <h2 className="text-2xl font-semibold my-4">قائمة المفضلة</h2>
            <div className="flex flex-wrap justify-start -mx-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct;
