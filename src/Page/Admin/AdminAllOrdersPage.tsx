import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllOrders from '../../Components/Admin/AdminAllOrders';
import Pagination from '../../Components/utility/Pagination';


const AdminAllOrdersPage = () => {
    return (
        <div className="min-h-screen mx-auto px-4">
            <div className='py-3 flex flex-wrap -mx-4'>
                <div className="w-full sm:w-1/4 px-4">
                    <AdminSideBar />
                </div>

                <div className="w-full sm:w-3/4 px-4">
                    <AdminAllOrders />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default AdminAllOrdersPage;
