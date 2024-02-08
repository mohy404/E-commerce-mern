import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        <div className="w-64 bg-white shadow-lg rounded-lg mt-36 ml-4 p-4">
            <div className="flex flex-col">
                <Link to="/user/allorders" className="no-underline">
                    <div className="py-3 w-full text-center border-b border-gray-300 hover:bg-gray-100">
                        اداره الطلبات
                    </div>
                </Link>
                <Link to="/user/favoriteproducts" className="no-underline">
                    <div className="py-3 w-full text-center border-b border-gray-300 hover:bg-gray-100">
                        المنتجات المفضلة
                    </div>
                </Link>
                <Link to="/user/addresses" className="no-underline">
                    <div className="py-3 w-full text-center border-b border-gray-300 hover:bg-gray-100">
                        العنوانين الشخصية
                    </div>
                </Link>
                <Link to="/user/profile" className="no-underline">
                    <div className="py-3 w-full text-center border-b border-gray-300 hover:bg-gray-100">
                        الملف الشخصي
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserSideBar;
