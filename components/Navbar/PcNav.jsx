

const PcNav = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex items-center justify-center  ">
        <ul
          className={`$  hidden justify-center gap-4  p-5 font-semibold text-blue-600 xl:flex font-poppins `}
        >
          <a 
            href="/"
            className="  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Home
          </a >
          <a 
            href="/about"
            className="  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            About Us
          </a >
          <a 
            href="/#advantages"
            className="-  block - - rounded-xl hover:text-black   text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Advantage
          </a >
          <a 
            href="/#partner"
            className="-  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Partner
          </a >
          <a 
            href="/#location"
            className="-  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            {" "}
            Charging Station
          </a >
          <a 
            href="/#technology"
            className="-  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Technology
          </a >

          <a 
            href="/media"
            className="-  block - - rounded-md hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Media
          </a >
          <a 
            href="/faq"
            className="-  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            FAQs
          </a >
          <a 
            href="/contact"
            className="-  block - - rounded-xl hover:text-black  text-md transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
          >
            Contact
          </a >
        </ul>
        <a href="/charge">
          <div className="btn bg-blue-600 text-white text-md px-10 rounded-full animate-pulse hidden xl:flex">
            How to charge?
          </div>
        </a>
      </div>
    </div>
  );
};

export default PcNav;
