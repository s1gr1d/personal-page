import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import { AnimatedArrowSVG, Variant } from "./buttons/animatedArrowSVG";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledBack = styled(ButtonBack)`
  background: none;
  border: none;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const StyledNext = styled(ButtonNext)`
  background: none;
  border: none;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const StyledDotGroup = styled(DotGroup)`
  text-align: center;

  & .carousel__dot {
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0.5rem;
  }

  & .carousel__dot--selected {
    background: ${({ theme }) => theme.colors.accent};
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0.5rem;
  }
`;

type CarouselProps = {
  children: JSX.Element[];
  heightRatio?: number;
  isIntrinsicHeight?: boolean;
  infinite?: boolean;
};

export const Carousel = ({
  children: carouselItems,
  heightRatio = 1,
  isIntrinsicHeight = false,
  infinite = false,
}: CarouselProps) => {
  const totalSlides = carouselItems.length;

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={heightRatio}
      totalSlides={totalSlides}
      isIntrinsicHeight={isIntrinsicHeight}
      infinite={infinite}
    >
      <StyledContainer>
        <Slider>
          {carouselItems.map((itemComponent, idx) => (
            <Slide index={idx} key={"slider-" + idx}>
              {itemComponent}
            </Slide>
          ))}
        </Slider>
        <StyledBack>
          <AnimatedArrowSVG variant={Variant.LEFT} />
        </StyledBack>
        <StyledNext>
          <AnimatedArrowSVG variant={Variant.RIGHT} />
        </StyledNext>
      </StyledContainer>
      <StyledDotGroup />
    </CarouselProvider>
  );
};
