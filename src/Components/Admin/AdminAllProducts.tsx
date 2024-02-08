import React from 'react';
import AdminAllProductsCard from './AdminAllProductsCard';


const AdminAllProducts = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-semibold my-4">ادارة جميع المنتجات</h2>
            <div className="flex flex-wrap justify-start -mx-2">
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </div>
        </div>
    );
};

export default AdminAllProducts;
