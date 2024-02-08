import UserProfile from "../../Components/User/UserProfile";
import UserSideBar from "../../Components/User/UserSideBar";


const UserProfilePage = () => {
    return (
        <div className="min-h-screen mx-auto px-4 py-3"> 
            <div className="flex flex-wrap -mx-3"> 
                <div className="w-full sm:w-1/4 px-3 pr-40"> 
                    <UserSideBar />
                </div>

                <div className="w-full sm:w-3/4 px-3"> 
                    <UserProfile />
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
