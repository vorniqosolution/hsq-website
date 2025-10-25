export default function Rooms() {
  const images = [
    "/public/Gallery/Rooms/room1.svg",
    "/public/Gallery/Rooms/room2.svg",
    "/public/Gallery/Rooms/room3.svg",
    "/public/Gallery/Rooms/room4.svg",
    "/public/Gallery/Rooms/room5.svg",
    "/public/Gallery/Rooms/room6.svg",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="rounded-m overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
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
