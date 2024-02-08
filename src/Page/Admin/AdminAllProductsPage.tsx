import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllProducts from '../../Components/Admin/AdminAllProducts';
import Pagination from '../../Components/utility/Pagination';


const AdminAllProductsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap py-3">
                <div className="w-full sm:w-3/12 md:w-2/12">
                    <AdminSideBar />
                </div>

                <div className="w-full sm:w-9/12 md:w-10/12">
                    <AdminAllProducts />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default AdminAllProductsPage;
