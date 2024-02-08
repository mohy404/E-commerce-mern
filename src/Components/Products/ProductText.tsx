import { useParams } from "react-router-dom";
import useViewDetalisProduct from "../../Hook/prodcuts/useViewDetalisProduct";

const ProductText = () => {
  const { id } = useParams();
  const { item, images, cat } = useViewDetalisProduct(id);
    if (cat.name)
  console.log(cat.name);

  return (
    <div className="px-8">
      {" "}
      {/* Assuming you need padding on both sides */}
      <h2 className="text-2xl font-bold mt-16 mb-4">الالكترونيات</h2>
      <div className="flex items-start mb-4">
        <h3 className="text-xl font-semibold mr-2 flex-grow">
          آيفون XR بذاكرة سعة 128 جيجابايت
        </h3>
        <div className="text-red-500 font-semibold text-lg">4.5</div>
      </div>
      <div className="mb-4">
        <span className="font-medium">الماركة:</span> سامسنوج
      </div>
      <div className="flex items-center mb-4">
        {/* Color circles */}
        <span className="w-6 h-6 rounded-full bg-red-600 border border-gray-300 mx-1"></span>
        <span className="w-6 h-6 rounded-full bg-white border border-gray-300 mx-1"></span>
        <span className="w-6 h-6 rounded-full bg-black border border-gray-300 mx-1"></span>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-bold mb-2">المواصفات:</h4>
        <p className="text-gray-700 text-justify">
          {/* Product description */}
          يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
          هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة...
        </p>
      </div>
      <div className="mt-4 flex items-center ">
        <span className="font-bold text-lg mr-2">34000 جنية</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          اضف للعربة
        </button>
      </div>
    </div>
  );
};

export default ProductText;
