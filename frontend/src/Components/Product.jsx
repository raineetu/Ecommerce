const items = [
  {
    id: 1,
    img: "/shop.png",
    title: "Welcome to All People",
    description:
      "Explore a wide variety of products curated just for you. Shop now and find everything you need at unbeatable prices.",
  },
  {
    id: 2,
    img: "https://assets.vogue.in/photos/5fc913381872f794424abf77/2:3/w_2560%2Cc_limit/Princess%2520Diana.jpg",
    title: "Grand Sale",
    description:
      "Don’t miss out on our biggest sale of the season! Enjoy massive discounts on top-selling items across all categories.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgQ7nq0i6WTTy9y8dFrVKGDrg44ZtRteIHQ&s",
    title: "Bumper Discount",
    description:
      "Get ready for unbeatable savings! Take advantage of our limited-time bumper discounts on selected products.",
  },
  {
    id: 4,
    img: "/shop.png",
    title: "Welcome to All People",
    description:
      "Explore a wide variety of products curated just for you. Shop now and find everything you need at unbeatable prices.",
  },
  {
    id: 5,
    img: "https://assets.vogue.in/photos/5fc913381872f794424abf77/2:3/w_2560%2Cc_limit/Princess%2520Diana.jpg",
    title: "Grand Sale",
    description:
      "Don’t miss out on our biggest sale of the season! Enjoy massive discounts on top-selling items across all categories.",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgQ7nq0i6WTTy9y8dFrVKGDrg44ZtRteIHQ&s",
    title: "Bumper Discount",
    description:
      "Get ready for unbeatable savings! Take advantage of our limited-time bumper discounts on selected products.",
  },
];
function Product() {
  return (
    <>
      {/* Loop through items to display additional content */}
      <div className="container mt-12 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black   font-bold text-4xl">
            Top Selling Products
          </h1>
          <h2 className="text-primary/40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            aliquam hic{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {items.map((item) => (
            <div
              data-aos="fade-right"
              data-aos-delays={item.aosDelay}
              key={item.id}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full max-w-[250px] md:max-w-[300px] mb-4 h-[300px] flex justify-center items-center bg-gray-100">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>
              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-sm text-center mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
