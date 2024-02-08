import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetalis';


const AdminOrderDetailsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-3">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full sm:w-1/4 md:w-1/4 px-2 mb-4">
                        <AdminSideBar />
                    </div>
                    <div className="w-full sm:w-3/4 md:w-3/4 px-2">
                        <AdminOrderDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrderDetailsPage;
