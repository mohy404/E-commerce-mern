import mobile from '../../assets/mobile.png';

const UserAllOrderCard = () => {
    return (
        <div className="flex mb-2">
            <div className="w-1/4 flex justify-start">
                <img src={mobile} alt="" className="w-24 h-30" />
            </div>
            <div className="w-3/4">
                <div className="inline-block pt-2 font-medium">
                    آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر
                </div>
                <div className="inline-block pt-2 text-yellow-500 ml-2">4.5</div>
                <div className="inline-block p-1 pt-2">(160 تقييم)</div>
                <div className="mt-3">
                    <div className="inline-block">الكميه:</div>
                    <input
                        className="form-input mx-2 text-center w-10 h-6"
                        type="number"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserAllOrderCard;
