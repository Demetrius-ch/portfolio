const Newsletter = () => {
    return (
      <div className="bg-gray-800 text-white p-6 mt-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="text-gray-400 mt-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;