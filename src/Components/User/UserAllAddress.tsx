
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';


const UserAllAddress = () => {
    return (
        <div className='mt-20'>
            <div className="text-xl font-semibold pb-4">دفتر العنوانين</div>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <div className="flex justify-center mt-4"> {/* Replaces Row with justify-content-center */}
                <div className="w-1/2 flex justify-center"> {/* Replaces Col sm="5" and its justify-content-center */}
                    <Link to="/user/add-address" className="no-underline">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">اضافه عنوان جديد</button> {/* Replaces btn-add-address */}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserAllAddress;
