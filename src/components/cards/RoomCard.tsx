interface RoomCardProps {
  price: number;
  title: string;
  image: string;
}
export default function RoomCard({ price, title, image }: RoomCardProps) {
  return (
    <div className="relative w-80 h-80 transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-105 rounded-xl overflow-hidden shadow-lg bg-white group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent group-hover:from-[#D7AB4E]/80 group-hover:to-transparent transition-all duration-1000"></div>

      <div className="absolute top-3 left-3 bg-white px-3 w-24 rounded-full shadow-md">
        <span className="text-black font-bold text-sm">Rs{price}/-</span>
      </div>
      <div className="absolute bottom-3 w-full text-center">
        <p className="text-white text-sm poppins-bold drop-shadow-md">
          {title}
        </p>
      </div>
    </div>
  );
}
