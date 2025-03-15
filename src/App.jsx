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
      <a 
        href="https://www.instagram.com/zaytuna_bosnia/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative inline-flex items-center mt-10 justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <div className="flex justify-center items-center gap-4 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Instagram
          <img src="./instagram.png" alt="" className="w-10"/>
        </div>
        <div className="hidden group-hover:block">
          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            <div className="rounded-sm bg-black py-1 px-2">
              <p className="whitespace-nowrap">zaytuna_bosnia</p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;
