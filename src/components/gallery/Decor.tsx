export default function Decor() {
  const images = [
    "/public/Gallery/Decor/decor1.svg",
    "/public/Gallery/Decor/decor2.svg",
    "/public/Gallery/Decor/decor3.svg",
    "/public/Gallery/Decor/decor4.svg",
    "/public/Gallery/Decor/decor5.svg",
    "/public/Gallery/Decor/decor6.svg",
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
