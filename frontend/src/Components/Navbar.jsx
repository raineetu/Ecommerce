import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, list: "Home", link: "/" },
  { id: 2, list: "Shop", link: "/shop" },
  { id: 3, list: "About", link: "/about" },
  { id: 4, list: "Contact", link: "/contact" },
];

function Navbar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 relative z-40 font-serif">
        {/* Upper navbar */}
        <div className="bg-primary/40">
          <div className="container flex justify-between items-center py-4">
            <div>
              <a href="#" className="font-bold text-xl sm:text-2xl flex gap-2">
                <img src="rn.jpg" alt="logo" className="w-12" />
                Shopifity
              </a>
            </div>
            {/* Search bar and order button */}
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
            {/* Order button */}
            <button
              onClick={() => alert("Ordering not available yet...")}
              className="w-[7vh] hover:w-[15vh] sm:w-[10vh] sm:hover:w-[20vh] bg-gradient-to-r from-primary to-secondary transition-all duration-300 p-2 rounded-full flex items-center justify-center text-white group overflow-hidden"
            >
              <FaCartArrowDown className="text-xl" />
              <span className="group-hover:block hidden ml-2 transition-all duration-300">
                Order
              </span>
            </button>

            {/* Dark and light theme toggle */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>

        {/* Lower navbar */}
        <div>
          <ul className="flex justify-center space-x-20 py-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-lg hover:text-primary transition-all duration-200"
                >
                  {data.list}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
