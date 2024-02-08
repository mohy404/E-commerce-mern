import React from "react";
import SubTitle from "../utility/SubTitle";
import CategoryCard from "../Category/categoryCard";
import useCategories from "../../Hook/category/useCategories";

export const HomeCategory: React.FC = () => {
  const { category, loading } = useCategories();
  const colors = ["#AED6F1", "#FFD3E8", "#55CFDF", "#FF6262", "#F4DBA5"];

  return (
    <div className="bg-white rounded-br-md rounded-bl-md">
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <div className="my-2 flex justify-between flex-wrap">
        {loading ? (
          <LoadingIndicator />
        ) : category.data && category.data.length > 0 ? (
          category.data
            .slice(0, 5)
            .map((item , index) => (
              <CategoryCard
                key={index}
                title={item.name}
                img={item.image}
                background={colors[Math.floor(Math.random() * colors.length)]}
              />
            ))
        ) : (
          <h4> لا يوجد تصنيفات </h4>
        )}
      </div>
    </div>
  );
};

const LoadingIndicator = () => (
  <button
    type="button"
    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    disabled
  >
    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
      <path d="..." />
    </svg>
    جاري التحميل ...
  </button>
);

export default HomeCategory;
