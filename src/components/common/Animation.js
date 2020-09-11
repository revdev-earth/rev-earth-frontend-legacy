import React, { useState, useRef, useLayoutEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ComponentRef } from "./Animations.style";

const Animation = (props) => {
  const { children, animation = "fade", positionStart: ps } = props;
  const [ref, dimensions] = useDimensions();

  const [animade, setAnimade] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      if (
        Object.keys(dimensions).length === 0 &&
        dimensions.constructor === Object
      ) {
        if (Math.abs(currPos.y) + vh > vh) {
          return setAnimade(true);
        }
      }

      const psn = ps === "top" ? 3.5 : ps === "bottom" ? 1 : 2.2;

      const positionScrollDown = Math.abs(currPos.y) + vh;
      const limit = dimensions.offsetTop + dimensions.offsetHeight / psn;
      const passLimit = positionScrollDown > limit;

      if (animade !== passLimit) setAnimade(passLimit);
    },
    [animade, dimensions],
    false,
    false,
    300
  );

  return (
    <ComponentRef
      ref={ref}
      animation={animation}
      className={`${!animade ? "init" : "init animate"} ${animation}`}
    >
      {children}
    </ComponentRef>
  );
};

const useDimensions = () => {
  const ref = useRef(null);

  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    function updatePosition() {
      const refPosition = {
        offsetHeight: ref.current.offsetHeight,
        offsetLeft: ref.current.offsetLeft,
        offsetTop: ref.current.offsetTop,
        offsetWidth: ref.current.offsetWidth,
      };
      setDimensions(refPosition);
    }
    setTimeout(updatePosition, 100);
  }, [ref]);

  return [ref, dimensions];
};

export default Animation;
