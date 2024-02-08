import UserAllAddress from "../../Components/User/UserAllAddress";
import UserSideBar from "../../Components/User/UserSideBar";
import Pagination from "../../Components/utility/Pagination";

const UserAllAddresPage = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto py-3'> 
            <div className='flex flex-wrap'> 
                <div className='w-full sm:w-1/4 md:w-1/6 px-2 py-3 pl-16'> 
                    <UserSideBar />
                </div>

                <div className='w-full sm:w-3/4 md:w-5/6 px-2 py-3 pr-16'> 
                    <UserAllAddress />
                </div>
            </div>
           <Pagination/>
        </div>
    )
}

export default UserAllAddresPage;
