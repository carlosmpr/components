import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import Chip from "../Chip/Chip";
type TextSliderProps = {
  elements: string[];
  active: string;
};
export default function TextSlider({ elements = [], active }: TextSliderProps) {
  return (
    <HorizontalScroll>
      {elements.map((item) => (
        <Chip active={active} text={item} key={item} />
      ))}
    </HorizontalScroll>
  );
}
