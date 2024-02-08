import UserAddAddress from "../../Components/User/UserAddAddress";
import UserSideBar from "../../Components/User/UserSideBar";


const UserAddAddressPage = () => {
    return (
        <div className="min-h-screen mx-auto py-3"> {/* Replaced Container with a div and mx-auto for centering */}
            <div className="flex flex-wrap -mx-2"> {/* Replaced Row with a div and added flex-wrap and negative margin */}
                <div className="w-full md:w-1/4 px-2 pr-40"> {/* Replaced Col with a div and added width classes */}
                    <UserSideBar />
                </div>

                <div className="w-full md:w-3/4 px-2"> {/* Replaced Col with a div and added width classes */}
                    <UserAddAddress />
                </div>
            </div>
        </div>
    );
}

export default UserAddAddressPage;
