import { Link } from "react-router-dom";
import { cardProps } from "../types/type";

function Card({ label }: cardProps) {
  return (
    <ul className="w-full sm:w-[75%] md:w-[50%] lg:w-[55%] lg:h-[43vw] flex flex-wrap gap-3 justify-center mx-auto">
      {label?.map((item) => (
        <li
          key={item.imdbID}
          className="h-[25vw] w-[20vw] sm:h-[20vw] sm:w-[15vw] md:h-[18vw] md:w-[12vw] lg:h-25vw lg:w-[10vw] cursor-pointer"
        >
          <Link to={`/detail/${item.imdbID}`} className="block h-full">
            <div className="relative w-full h-[80%] overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.Poster}
                alt={item.Title}
                className="object-fit w-full h-full"
              />
            </div>
            <div className="w-full mt-2">
              <h2 className="text-center text-sm md:text-base font-semibold">
                {item.Title}
              </h2>
              <p className="text-center text-xs md:text-sm mt-1">{item.Year}</p>
              <p className="text-center text-xs md:text-sm italic text-gray-500">
                {item.Type.charAt(0).toUpperCase() + item.Type.slice(1)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Card;
