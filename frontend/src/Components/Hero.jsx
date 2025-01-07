const items = [
  {
    id: 1,
    img: "https://static-01.daraz.com.np/p/88a9b980aa044a3e22cdb1a0038048b6.jpg",
    title: "One Piece",
    description: "lorem jcbwdcwucvwsc wschj",
  },
  {
    id: 2,
    img: "https://static-01.daraz.com.np/p/88a9b980aa044a3e22cdb1a0038048b6.jpg",
    title: "One Piece",
    description: "lorem jcbwdcwucvwsc wschj",
  },
  {
    id: 3,
    img: "https://static-01.daraz.com.np/p/88a9b980aa044a3e22cdb1a0038048b6.jpg",
    title: "One Piece",
    description: "lorem jcbwdcwucvwsc wschj",
  },
];

function Hero() {
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern */}
        <div className="h-[450px] w-[450px] sm:h-[700px] sm:w-[700px] bg-primary/40 absolute -top-2/4 right-90 rounded-3xl rotate-45 z-[9]"></div>

        {/* Hero section */}
        <div className="container xs:mt-[6vh]">
          <div className="flex flex-col sm:flex-row  md:space-x-80 items-center sm:items-start">
            {/* Text Content */}
            <div className="w-[500px] md:w-[650px] text-center sm:text-left">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl py-2">
                Welcome to shopping
                <span className="text-green-500"> people</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ullam quasi, odio facilis mdunt dolorum in.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full py-2 px-6 mt-4 text-sm sm:text-base hover:shadow-lg transition duration-300 ease-in-out">
                Order
              </button>
            </div>

            {/* Image */}
            <div className="w-full max-w-[350px] sm:max-w-[250px] md:max-w-[300px] mt-6 sm:mt-0">
              <img
                src="https://w7.pngwing.com/pngs/176/725/png-transparent-shopping-girl-shopping-woman-business-woman-people-coffee-shop.png"
                className="w-full h-auto object-contain"
                alt="Shopping illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loop through items to display additional content */}
      <div className="container mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Image */}
              <div className="w-full max-w-[250px] md:max-w-[300px] mb-4">
                <img
                  src={item.img}
                  className="w-full h-auto object-contain"
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

export default Hero;
