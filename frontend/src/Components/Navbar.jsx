function Navbar() {
  return (
    <>
      {/* upper navbar */}
      <div className="flex">
        <div>
          <img src="" alt="Logo" />
        </div>
        {/* search bar and order button */}
        <div className=" ">
          <input
            type="text"
            placeholder="Seacrh"
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
      {/* lower navbar */}
      <div className="">
        <div className="flex">
          <li>Home </li>
          <li>Top Rated </li>
          <li>Kids Wear </li>
          <li>Mens Wear </li>
          <li>Electronics </li>
          <li>Trending Items </li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
