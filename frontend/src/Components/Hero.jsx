import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    img: "/sale.png",
    title: "Grand Sale",
    description:
      "Don’t miss out on our biggest sale of the season! Enjoy massive discounts on top-selling items across all categories.",
  },
  {
    id: 3,
    img: "/free.png",
    title: "Bumper Discount",
    description:
      "Get ready for unbeatable savings! Take advantage of our limited-time bumper discounts on selected products.",
  },
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

function Hero() {
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern */}
        <div className="h-[450px] w-[450px] sm:h-[700px] sm:w-[700px] bg-primary/40 absolute -top-2/4 right-90 rounded-3xl rotate-45 z-[0]"></div>

        {/* Hero section */}

        <div className="container xs:mt-[6vh] relative z-[10px]">
          <Slider {...settings}>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row md:space-x-40 items-center sm:items-start"
              >
                {/* Text Content */}
                <div className="w-full max-w-[650px] mx-auto text-center sm:text-left">
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl py-2 text-gray-900 dark:text-white z-[8]">
                    {item.title}
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl mt-4">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full py-2 px-6 xs:mt-8 sm:mt-4 text-sm sm:text-base hover:shadow-lg transition duration-300 ease-in-out">
                    Order
                  </button>
                </div>

                {/* Image */}
                <div className="w-full max-w-[350px] sm:max-w-[250px] md:max-w-[300px] mt-6 sm:mt-0">
                  <img
                    src={item.img} // Using item.img to dynamically set the image for each slide
                    className="w-full h-auto object-contain"
                    alt={item.title} // Using item.title for alt text
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Hero;
