import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-36 ml-4">
            <div className="flex flex-col">
                <Link to="/admin/allorders" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50 rounded-t-lg">
                        اداره الطلبات
                    </div>
                </Link>
                <Link to="/admin/allproducts" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50">
                        اداره المنتجات
                    </div>
                </Link>
                <Link to="/admin/addbrand" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50">
                        اضف ماركه
                    </div>
                </Link>
                <Link to="/admin/addcategory" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50">
                        اضف تصنيف
                    </div>
                </Link>
                <Link to="/admin/addsubcategory" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50">
                        اضف تصنيف فرعي
                    </div>
                </Link>
                <Link to="/admin/addproduct" className="no-underline">
                    <div className="p-4 text-center text-gray-700 text-lg hover:bg-gray-50 rounded-b-lg">
                        اضف منتج
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminSideBar;
