import { FaCheckCircle } from "react-icons/fa";

function Banner() {
  return (
    <>
      <div className="container">
        <div className="min-h-[550px] flex justify-center items-center py-6 sm:py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="">
              <img
                src="/bags.jpg"
                className="rounded-md drop-shadow-[-7px_10px_12px_black]"
              />
            </div>
            {/* Content Section */}
            <div className="md:pl-16">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                Winter Sales Up to 50% Off
              </h1>
              <p className="py-4 md:py-8 text-gray-600 dark:text-gray-400">
                Discover the best deals on premium products this winter! Shop
                now and save big on quality items with unbeatable discounts.
              </p>
              {/* Feature Highlights */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <p>High-quality products</p>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <p>Exclusive winter discounts</p>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <p>Fast & reliable shipping</p>
                </div>
              </div>
              {/* Call-to-Action Button */}
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
