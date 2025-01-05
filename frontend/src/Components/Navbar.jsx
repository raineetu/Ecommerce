import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 font-serif">
        {/* upper navbar */}
        <div className="bg-primary/40">
          <div className="container flex justify-between items-center py-4">
            <div>
              <a href="#" className="font-bold text-xl sm:text-2xl flex gap-2">
                <img src="rn.jpg" alt="logo" className="w-12 " />
                Shopifity
              </a>
            </div>
            {/* search bar and order button */}
            <div className="group flex relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[100px] sm:w-[200px] group-hover:w-[150px] sm:group-hover:w-[300px] 
                transition-all duration-300 rounded-full
                 border border-gray-300 px-2 py-1 
                 focus:outline-none focus:border-1
                  focus:border-orange-400 cursor-pointer"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-[2vh]" />
            </div>
            {/* order botton */}
            <button
              onClick={() => alert("Ordering not available yet...")}
              className="w-[7vh] hover:w-[15vh] sm:w-[10vh] sm:hover:w-[20vh] bg-gradient-to-r from-primary to-secondary transition-all duration-300 p-2 rounded-full flex items-center justify-center text-white group overflow-hidden"
            >
              <FaCartArrowDown className="text-xl" />
              <span className="group-hover:block hidden ml-2 transition-all duration-300">
                Order
              </span>
            </button>

            {/* dark and light theme */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
        {/* lower navbar */}
        <div></div>
      </div>
    </>
  );
}

export default Navbar;
