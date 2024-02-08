import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAddProducts from '../../Components/Admin/AdminAddProducts';


const AdminAddProductsPage = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto py-3">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/4 px-3">
                    <AdminSideBar />
                </div>

                <div className="w-full md:w-3/4 px-3">
                    <AdminAddProducts />
                </div>
            </div>
        </div>
    );
}

export default AdminAddProductsPage;
