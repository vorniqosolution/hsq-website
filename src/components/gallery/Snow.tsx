export default function Snow() {
  // const images = [
  //   "/public/Gallery/Snow/snow1.svg",
  //   "/public/Gallery/Snow/snow2.svg",
  //   "/public/Gallery/Snow/snow3.svg",
  //   "/public/Gallery/Snow/snow4.svg",
  //   "/public/Gallery/Snow/snow5.svg",
  //   "/public/Gallery/Snow/snow6.svg",
  // ];

  const images = [
    "/Gallery/Snow/snow1.svg",
    "/Gallery/Snow/snow2.svg",
    "/Gallery/Snow/snow3.svg",
    "/Gallery/Snow/snow4.svg",
    "/Gallery/Snow/snow5.svg",
    "/Gallery/Snow/snow6.svg",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
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
