import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 min-h-screen text-center text-white bg-gray-900">
      <div className="flex justify-center items-center gap-10 flex-row mb-20">
      <img
        src="./logowhite.png"
        alt="Logo of Zaytuna Bosnia"
        className="w-40"
      />
      </div>
      <div className="bg-green-500 text-white rounded-lg px-6 py-4 font-semibold">
      <h1 className="text-[20px] sm:text-[30px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px]"> Coming Soon!</h1>
      </div>
      <p className="text-gray-300 text-md max-w-md font-semibold mb-10 text-[12px] md:text-[16px]">
        Our website is currently under maintenance and down for renovation. 
        We’ll be back soon with a new experience!
      </p>
    </div>
  );
}

export default App;
