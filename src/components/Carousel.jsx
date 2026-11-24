import AliceCarouselModule from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../utils";


const AliceCarousel =
  typeof AliceCarouselModule?.default?.default === "function"
    ? AliceCarouselModule.default.default
    : AliceCarouselModule?.default;

export const Carousel = ({ credits }) => {
  const items = credits.map((obj) => (
    <div key={obj.id} className="px-2 text-center">
      <img
        className="mx-auto h-36 w-28 object-cover"
        src={obj.profile_path ? img_300 + obj.profile_path : "/Noimg.png"}
        alt={obj.name}
      />
      <p className="mt-2 text-xs text-gray-100">{obj.name}</p>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={{
        0: { items: 2 },
        600: { items: 3 },
        1024: { items: 6 },
      }}
      controlsStrategy = "alternate"
    />
  );
};
