import logo from "../assets/logo.svg";
function ConfirmationDialog() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-black ml-2 mr-3 w-full md:w-1/2 lg:w-1/3 h-96 space-y-6 border rounded-md flex flex-col justify-center items-center">
          <img className="w-52" src={logo} alt="hsqlogo" />
          <h1 className="text-white text-center w-1/2">
            Thank you! You will shortly receive a conformation call for our side
          </h1>
          <button className="bg-primary px-5 py-2   text-white items-center font-semibold  rounded-lg  hover:border hover:border-white">
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationDialog;
