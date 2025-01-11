const productDta = [
  {
    id: 1,
    img: "/shirt.png",
    title: "Product One",
    description:
      "This is a great product that offers exceptional quality and features.",
    price: "$25.00",
  },
  {
    id: 2,
    img: "/shirt.png",
    title: "Product Two",
    description: "Experience the best performance with this top-rated product.",
    price: "$35.00",
  },
  {
    id: 3,
    img: "/shirt.png",
    title: "Product Three",
    description:
      "A premium product designed to meet all your needs efficiently.",
    price: "$45.00",
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 place-items-center">
          {productDta.map((data) => (
            <div key={data.id} className="border rounded-lg shadow-md p-4">
              {/* Image Section */}
              <div className="mb-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="items-center justify-between"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-bold text-black dark:text-white">
                {data.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {data.description}
              </p>
              <p className="text-primary font-bold mt-4">{data.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topproduct;
