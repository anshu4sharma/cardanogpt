import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Presale from "./Presale";
import Purchase from "./Purchase";
const Hero = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      cgi: "",
      ada: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      cgi: Yup.string().required("Required"),
      ada: Yup.string().required("Required"),
    }),
  });
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid mt-8 grid-cols-1 items-center md:flex md:flex-col  justify-center p-4  gap-4">
      <Presale />
      <div className="flex gap-4 flex-col md:flex-row w-full max-w-3xl justify-center md:justify-around">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full justify-between text-sm items-center text-left rounded-lg shadow-orange-50 bg-opacity-20 backdrop-blur-sm green_gradientP border border-[#01CC9C] p-4  gap-2">
            <p className="text-white  text-left  font-semibold break-all">
              Your allocation
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-white">20000.00</span>{" "}
              <img src="/assets/logo.svg" width={25} height={10} />
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-orange-50  bg-[#1C2129] bg-opacity-20 backdrop-blur-sm border border-[#01CC9C]  items-start justify-center text-center  p-6  md:p-8 gap-2">
            <div className="flex items-center gap-4 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.2 8.4H10.8V6H13.2M13.2 18H10.8V10.8H13.2M12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0Z"
                  fill="#CBCE22"
                />
              </svg>{" "}
              <h1 className="text-xl font-medium tracking-wider text-[#01CC9C]">
                Sale information
              </h1>{" "}
            </div>
            <div className="flex flex-col text-left gap-4 my-4">
              <p className="text-white  font-medium text-sm">
                Token Total Supply: 100,000,000
              </p>
              <p className="text-white  font-medium text-sm">
                Presale Allocation: 10,000,000 (10%)
              </p>
              <p className="text-white  font-medium text-sm">
                Presale Hardcap: 1000 ADA{" "}
              </p>
              <p className="text-white  font-medium text-sm">
                Token Price: 1 CGI = 1 ADA{" "}
              </p>
              <p className="text-white  font-medium text-sm">
                Minumum Buy: 100 CGI{" "}
              </p>
              <p className="text-white  font-medium text-sm">
                Maximum Buy: 2000 CGI
              </p>
            </div>
          </div>
        </div>
        {/* transaction hash */}
        <div className="flex flex-col items-center w-full gap-4 justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col rounded-lg shadow-orange-50  items-start text-center bg-[#1C2129] bg-opacity-20 backdrop-blur-sm border border-[#01CC9C] p-6  md:p-8 gap-2"
          >
            <h1 className="text-xl font-black tracking-wider my-2 text-[#01CC9C]">
              Buy CGI tokens{" "}
            </h1>
            <h1 className="text-white text-sm my-2">
              Available ADA Balance : 100.00 ADA
            </h1>
            {show ? (
              <div className="flex w-full green_gradient bg-opacity-20 backdrop-blur-sm rounded-md border border-[#01CC9C]">
                <input
                  type="number"
                  name="cgi"
                  autoComplete="off"
                  value={values.cgi}
                  onChange={handleChange}
                  placeholder="You will get"
                  className="green_gradient outline-none  placeholder:text-white no-spinners placeholder-shown:text-white text-white p-3 w-full"
                />
                <div className="flex green_gradient px-4 items-center gap-4">
                  <img
                    src={"/assets/logo.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                  <span className="text-white text-sm">ADA</span>
                </div>
              </div>
            ) : (
              <div className="flex w-full green_gradientP bg-opacity-20 backdrop-blur-sm rounded-md border border-[#01CC9C]">
                <input
                  type="number"
                  name="ada"
                  value={values.ada}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter amount in ADA here"
                  className={
                    "green_gradient outline-none  no-spinners placeholder:text-white placeholder-shown:text-white text-white p-3 w-full "
                  }
                />
                <div className="flex green_gradient px-4">
                  <img
                    src={"/assets/cardano.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            )}

            <div
              className="w-full justify-center flex my-2 cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                src={"/assets/below.svg"}
                width={20}
                height={10}
                alt="below"
              />
            </div>
            {!show ? (
              <div className="flex w-full green_gradient rounded-md border border-[#01CC9C]">
                <input
                  type="number"
                  name="cgi"
                  autoComplete="off"
                  value={values.cgi}
                  onChange={handleChange}
                  placeholder="You will get"
                  className="green_gradient outline-none placeholder:text-sm placeholder:text-white no-spinners placeholder-shown:text-white text-white p-3 w-full"
                />
                <div className="flex green_gradient px-4">
                  <img
                    src={"/assets/logo.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="flex w-full green_gradientP rounded-md border border-[#01CC9C]">
                <input
                  type="number"
                  name="ada"
                  value={values.ada}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter amount in ADA here"
                  className={
                    "green_gradient outline-none  no-spinners placeholder:text-white placeholder-shown:text-white text-white p-3 w-full "
                  }
                />
                <div className="flex green_gradient px-4">
                  <img
                    src={"/assets/cardano.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              placeholder="Timer"
              className="green_gradient flex items-center gap-4 justify-center my-4 buy p-2.5 w-full text-white rounded-md text-sm border border-[#01CC9C]"
              onClick={openModal}
            >
              Click to purchase
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M19.9926 18.7833L18.9933 8.75C18.9553 8.26013 18.7581 7.80586 18.4422 7.48042C18.1263 7.15499 17.7156 6.98308 17.2946 7H13.997V2.33333L11.9985 0H8.00148L6.00296 2.33333V7H2.7054C2.28435 6.98308 1.87373 7.15499 1.55783 7.48042C1.24192 7.80586 1.04471 8.26013 1.00666 8.75L0.00739484 18.7833C-0.0146326 19.0613 0.0126782 19.3416 0.0876208 19.6067C0.162563 19.8717 0.283527 20.1159 0.442952 20.3239C0.602378 20.532 0.796839 20.6994 1.01418 20.8157C1.23153 20.932 1.46709 20.9948 1.70614 21H18.2939C18.5329 20.9948 18.7685 20.932 18.9858 20.8157C19.2032 20.6994 19.3976 20.532 19.557 20.3239C19.7165 20.1159 19.8374 19.8717 19.9124 19.6067C19.9873 19.3416 20.0146 19.0613 19.9926 18.7833ZM8.00148 2.33333H11.9985V7H8.00148"
                  fill="#CBCE22"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Purchase isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Hero;
