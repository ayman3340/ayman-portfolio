import React from "react";
import EmblaCarousel from "./Carousel/EmblaCarousel";
import { Project as projectData } from "../Data";

function Project() {
  const OPTIONS = { loop: true };

  return (
    <>
      <EmblaCarousel slides={projectData} options={OPTIONS} />
    </>
  );
}

export default Project;
