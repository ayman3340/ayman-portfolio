import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { Project } from "../../Data";
import { FaLink } from "react-icons/fa";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla" id="Project">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => (
            <div
              className="embla__slide flex justify-center  bg-[#09082d]"
              key={index}
            >
              <div
                className=" flex flex-col justify-start h-auto w-full"
                key={index}
              >
                {Project.map((ProjectData) => (
                  <React.Fragment key={ProjectData.Id}>
                    {ProjectData.Id == index && (
                      <React.Fragment>
                        <h1 className="text-3xl max-w-7xl w-full h-auto mx-auto my-5 text-center ">
                          Project {index + 1}
                        </h1>
                        <article className=" relative isolate h-130  w-auto md:h-170  sm:w-120 md:w-166 xl:w-300 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-7xl mx-auto mt-1">
                          <img
                            src={ProjectData.Img}
                            alt="Project photo"
                            className="absolute inset-0 h-full w-full object-cover "
                          />
                          <div className=" absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                          <h3 className="z-10 mt-3 text-1xl sm:text-3xl  font-bold text-white sm:w-full w-36">
                            {" "}
                            {ProjectData.Name}{" "}
                          </h3>
                          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                            Link <FaLink size={15} className="inline ml-3" />
                          </div>
                        </article>

                      </React.Fragment>
                    )}
                  </React.Fragment>
                ))}
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
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

{
  /* <p class="text-1xl font-extrabold text-heading my-6 w-120">
                              Description: {ProjectData.Desorption}
                            </p> */
}

{
  /* bg-[#424242] */
}

{
  /* <img
                              class="h-auto max-w-full  object-contain rounded overflow-hidden shadow-lg"
                              src={ProjectData.Img2}
                              alt="product image"
                            /> */
}
{
  /* <img
                            class="h-auto max-w-full w-120"
                            src={ProjectData.Img3}
                            alt="product image"
                          /> */
}
