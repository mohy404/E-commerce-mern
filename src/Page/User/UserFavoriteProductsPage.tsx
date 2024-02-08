

import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct';
import UserSideBar from '../../Components/User/UserSideBar';

const UserFavoriteProductsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex py-3">
         
                <div className="w-1/4 pr-40">
                    <UserSideBar />
                </div>
      
                <div className="w-3/4 p-4">
                    <UserFavoriteProduct />
    
                </div>
            </div>
        </div>
    );
}

export default UserFavoriteProductsPage;
