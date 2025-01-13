const productDta = [
  {
    id: 1,
    img: "/shirt.png",
    title: "Product One",
    description:
      "This is a great product that offers exceptional quality and features.",
    price: "$25.00",
    rating: 4,
  },
  {
    id: 2,
    img: "/shirt.png",
    title: "Product Two",
    description: "Experience the best performance with this top-rated product.",
    price: "$35.00",
    rating: 5,
  },
  {
    id: 3,
    img: "/shirt.png",
    title: "Product Three",
    description:
      "A premium product designed to meet all your needs efficiently.",
    price: "$45.00",
    rating: 3,
  },
];

function StarRating({ rating }) {
  const maxStars = 5;
  return (
    <div className="flex items-center mt-2">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "gold" : "gray"}
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Topproduct() {
  return (
    <>
      {/* Header Section */}
      <div className="container mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black font-bold text-4xl">
            Best Selling Products
          </h1>
          <h2 className="text-primary/40 text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            aliquam hic
          </h2>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {productDta.map((data) => (
            <div
              key={data.id}
              className="group border rounded-lg shadow-md p-4 dark:bg-gray-950 hover:bg-black/80 hover:text-white mt-24 md:mt-28"
            >
              {/* Image Section */}
              <div className="flex items-center justify-center h-[80px] md:h-[120px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[120px] md:max-w-[180px] transform -translate-y-16 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center items-center mt-4">
                <StarRating rating={data.rating} />
              </div>

              {/* Product Details */}
              <h3 className="text-md font-bold text-black dark:text-white group-hover:text-white text-center mt-4">
                {data.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 group-hover:text-gray-200 duration-300 text-center">
                {data.description}
              </p>
              <p className="text-primary font-bold mt-3 text-center group-hover:text-white">
                {data.price}
              </p>

              {/* Order Now Button */}
              <div className="flex items-center justify-center mt-4">
                <button className="bg-yellow-400 text-white rounded-full px-4 py-2">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topproduct;
