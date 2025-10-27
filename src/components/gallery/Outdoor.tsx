export default function Outdoor() {
  // const images = [
  //   "/public/Gallery/Outdoor/outdoor1.svg",
  //   "/public/Gallery/Outdoor/outdoor2.svg",
  //   "/public/Gallery/Outdoor/outdoor3.svg",
  //   "/public/Gallery/Outdoor/outdoor4.svg",
  //   "/public/Gallery/Outdoor/outdoor5.svg",
  //   "/public/Gallery/Outdoor/outdoor6.svg",
  // ];

  const images = [
    "/Gallery/Outdoor/outdoor1.svg",
    "/Gallery/Outdoor/outdoor2.svg",
    "/Gallery/Outdoor/outdoor3.svg",
    "/Gallery/Outdoor/outdoor4.svg",
    "/Gallery/Outdoor/outdoor5.svg",
    "/Gallery/Outdoor/outdoor6.svg",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className=" overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
        >
          <img
            src={src}
            alt={`Restaurant ${i + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
