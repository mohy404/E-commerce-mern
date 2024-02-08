import UserSideBar from '../../Components/User/UserSideBar';
import UserAllOrder from '../../Components/User/UserAllOrder';

const UserAllOrdersPage = () => {
    return (
        <div className="max-w-7xl mx-auto py-3">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/4 px-3 ">
                    <UserSideBar />
                </div>

                <div className="w-full md:w-3/4 px-3">
                    <UserAllOrder />
                </div>
            </div>
        </div>
    );
}

export default UserAllOrdersPage;
