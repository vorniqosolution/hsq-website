import roomimage from "@/assets/BG/Decorbg.png";
import DecorCard from "@/components/cards/DecorCard";
import Footer from "@/components/layout/Footer";
function Decor() {
  return (
    <>
      <div>
        {/* Upper section */}
        <section
          className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[90vh]"
          style={{ backgroundImage: `url(${roomimage})` }}
        >
          <div className="inset-0 bg-black/50" />
          <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-36">
            <h1 className="Tuesdaynight text-[30px] sm:text-[50px] text-center">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-2xl md:text-5xl lg:text-6xl">
              STYLING & DECOR DEALS
            </h1>
            <p className="text-center w-96 sm:w-1/2">
              Discover refined comfort in our elegantly designed rooms spread
              across six floors, each crafted with style and sophistication in
              mind.
            </p>
          </div>
        </section>
        {/* body section with cards */}
        <section className="backgroundcolor space-y-6 pt-10 pb-10">
          <DecorCard image="/Gallery/Decor/decor1.svg" />
          <DecorCard image="/Gallery/Decor/decor2.svg" />
          <DecorCard image="/Gallery/Decor/decor3.svg" />
          <DecorCard image="/Gallery/Decor/decor4.svg" />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Decor;
