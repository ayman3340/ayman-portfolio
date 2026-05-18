import React, { useRef } from "react";
import useEmblaCarousel  from "embla-carousel-react";
import EmblaCarousel from "./Carousel/EmblaCarousel";

function Project() {
  const [emblaRef] = useEmblaCarousel();
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    < >
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default Project;
