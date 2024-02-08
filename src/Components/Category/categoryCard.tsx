import React from "react";

type CategoryCardProps = {
  img: string;
  background: string;
  title: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ img, background, title }) => {
  return (
    <div className="flex flex-col items-center  justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/6 my-4">
      <div className="relative p-4 rounded-full shadow-lg" style={{ backgroundColor: background }}>
        <img src={img} alt={title} className="w-32 h-32 object-cover rounded-full border-4 border-white" />
        <p className="absolute bottom-0 w-full text-center text-white font-semibold bg-red-600 py-1 rounded-b-full">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
