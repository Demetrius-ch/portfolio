const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-10 mt-15">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Contecter vous librement</h2>
        <p className=" text-2xl mt-2">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="mt-5 flex justify-center space-x-3 ">
          <input
            type="email"
            placeholder="Enter Votre mail"
            className="px-4 py-2 rounded-l-lg focus:outline-none text-white bg-blue-500 "
          />
          <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 mr-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;