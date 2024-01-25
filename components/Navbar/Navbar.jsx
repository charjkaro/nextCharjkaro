import Nav from "./MobNav";




const Navbar = () => {
  return (
    <div className="font-poppins   ">
      <div className="md:flex items-center justify-evenly bg-blue-600 p-1 text-white hidden">
        <div className="gap-10 md:flex">
          <h1 className="font-">1103, WTT, Noida-16, UP</h1>
          <h1 className="font-">
            <a href="mailto:info@charjkaro.com">
              <p>info@charjkaro.com</p>
            </a>
          </h1>
        </div>
        <div className="flex gap-2 invert">
          <a
            href=" https://www.facebook.com/profile.php?id=100093408431168"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href=" https://www.instagram.com/_charjkaro_/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href=" https://www.linkedin.com/company/96009890/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href="https://twitter.com/charjkaro"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUDXyzulIrLaMbV6v9_iJyA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
              className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="lg:flex items-center justify-between md:px-10 - border-b-2 border-gray-300 hidden ">
        <div className="">
          <a href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/no-bg-logo.png?alt=media&token=afcc0834-b6e6-4545-9d3b-26f993572e5e"
              alt=""
              className="w-36"
            />
          </a>
        </div>
        <div className="p-2 text-right ">
          <span className="text-lg font-bold text-green-600">
            Customer Support
          </span>{" "}
          <br />
          <span className="text-xl font-bold text-blue-600">
            {" "}
            <a href="tel:18002034044">1800 203 4044</a>
          </span>
        </div>
      </div>
      <div className=" ">
        <div className="navbar bg-base-100  xl:hidden ">
          <Nav/>
          <div className="navbar-center">
            <a href="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/no-bg-logo.png?alt=media&token=afcc0834-b6e6-4545-9d3b-26f993572e5e"
                alt=""
                className="w-36"
              />
            </a>
          </div>
          <div className="navbar-end"></div>
        </div>
       
        </div>
      </div>
    
  );
};

export default Navbar;
