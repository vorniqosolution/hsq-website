import decorbg from "../assets/Decor/decorBg.png";
import Tick from "../components/LottieFiles/Review";
import fower_01 from "../assets/BG/fower_01.svg";
function Review() {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative flex flex-col  items-center justify-center"
        style={{ backgroundImage: `url(${decorbg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <Tick />
          <h1 className="z-50 absolute text-primary text-3xl md:text-3xl lg:text-5xl text-center">
            Stories of Satisfaction
          </h1>
        </div>
        <p className="text-white text-md lg:text-lg  pt-72">
          Discover what makes every stay at HSQ Towers truly unforgettable
        </p>
      </div>
      {/* Second section */}
      <div className="relative bg-primary/50 w-full min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Left Flower*/}
        <img
          src={fower_01}
          alt="flower"
          className="absolute bottom-0  left-0 w-28 sm:w-44 md:w-56  scale-x-[-1] rotate-180"
        />

        {/* Right Flower*/}
        <img
          src={fower_01}
          alt="flower"
          className="absolute top-0 right-0 w-28 sm:w-44 md:w-56 scale-x-[-1] pointer-events-none select-none"
        />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-12">
          Stories Shared by Our Visitors
        </h2>

        {/* Cards Wrapper */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl justify-center relative z-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex-1 text-center">
            <p className="text-xs font-semibold text-primary mb-2">
              AT THE HEART OF COMMUNITIES
            </p>
            <p className="text-sm text-gray-700 mb-4">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-800 mb-4">
              Prime living concept in Murree, accompanied with quality finishing
              and furnishing.
            </p>
            <p className="font-semibold text-orange-600">
              Haris Ibrar <span className="text-blue-500">ⓖ</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex-1 text-center">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              AT THE HEART OF COMMUNITIES
            </p>
            <p className="text-sm text-gray-700 mb-4">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-800 mb-4">
              First time seen professionalism in Murree hoteling
            </p>
            <p className="font-semibold text-orange-600">
              Sharjeel Satti <span className="text-blue-500">ⓖ</span>
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-10 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition relative z-10">
          Add a review ✨
        </button>
      </div>
    </>
  );
}

export default Review;
