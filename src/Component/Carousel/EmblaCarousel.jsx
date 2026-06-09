import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { FaLink } from "react-icons/fa";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section 
      className="embla" 
      id="Project" 
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">

          {slides.map((ProjectData, index) => (
              <div
                className="embla__slide flex-[0_0_100%] min-w-0 flex justify-center bg-[#09082d] select-none cursor-grab active:cursor-grabbing"
                key={ProjectData.Id || index}
              >
                <div className=" flex flex-col justify-start h-auto w-full">
                  <h1 className="text-3xl max-w-7xl w-full h-auto mx-auto my-5 text-center ">
                    Project {index + 1}
                  </h1>
                  <a 
                    href={ProjectData.Link || ProjectData.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" relative isolate h-[350px] sm:h-[400px] md:h-[500px] w-[92%] sm:w-[85%] md:w-[75%] max-w-6xl flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 sm:px-8 sm:pb-8 pt-40 mx-auto mt-1 cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-lg block no-underline"
                    onClick={(e) => {
                      if (emblaApi && !emblaApi.clickAllowed()) {
                        e.preventDefault();
                      }
                    }}
                  >
                      <img
                        src={ProjectData.Img}
                        alt={ProjectData.Name || "Project photo"}
                        draggable="false"
                        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                      />
                      <div className=" absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 pointer-events-none"></div>
                      <h3 className="z-10 mt-3 text-xl sm:text-3xl font-bold text-white w-full pointer-events-none">
                        {ProjectData.Name}
                      </h3>
                      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 pointer-events-none">
                        <FaLink size={18} className="inline ml-2 text-white" />
                      </div>
                    </a>
                </div>
              </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center items-center  bg-[#09082d] py-5">
        <div className="embla__dots  flex justify-center items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
