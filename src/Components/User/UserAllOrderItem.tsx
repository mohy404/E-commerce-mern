import UserAllOrderCard from './UserAllOrderCard';


const UserAllOrderItem = () => {
    return (
        <div className="mt-2">
            <div className="py-2 font-medium text-lg">طلب رقم #234556</div>
            <UserAllOrderCard />
            <UserAllOrderCard />
            <div className="flex justify-between items-center mt-2">
                <div className="w-1/2">
                    <div className="inline">الحالة:</div>
                    <div className="inline mx-2 text-blue-600">قيد التنفيذ</div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="text-gray-700 font-medium">4000 جنيه</div>
                </div>
            </div>
        </div>
    );
};

export default UserAllOrderItem;
