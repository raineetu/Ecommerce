function Subscribe() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center text-white "
      style={{
        backgroundImage: "url('/orange-pattern.jpg')",
      }}
    >
      <div className="text-center p-6 max-w-[600px]">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">
          Subscribe to our newsletter to get the latest updates, special offers,
          and more delivered straight to your inbox!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md text-black w-full sm:w-auto flex-1 outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
