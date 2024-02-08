import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/utility/SearchCountResult';
import SideFilter from '../../Components/utility/SideFilter';
import Pagination from '../../Components/utility/Pagination';
import CardProductContainer from '../../Components/Products/cardProductContiner';
import useFilterProducts from '../../Hook/prodcuts/useFilterProducts';

const ShopProductsPage = () => {

    const { items } = useFilterProducts();
    return (
        <div className="min-h-screen"> {/* minHeight: '670px' can be replaced with min-h-screen for full height */}
            <CategoryHeader />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Container */}
                <SearchCountResult title={`${items.length} يوجد نتجية بحث `}/>
                <div className="flex flex-row -mx-4"> {/* Row */}
                    <div className="w-1/6 px-4"> 
                        <SideFilter />
                    </div>
                    <div className="w-5/6 px-4">
                        <CardProductContainer products={items} title={''} btntitle={''} pathText={''}/>
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ShopProductsPage;
