import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

const Headline = () => {
  const fadeIn = useSpring({
    config: { mass: 1, tension: 280, friction: 120 },
    opacity: 1,
    delay: 900,
    from: { opacity: 0 }
  });

  const fadeInNext = useSpring({
    config: { mass: 1, tension: 120, friction: 14 },
    opacity: 1,
    delay: 2000,
    from: { opacity: 0 }
  });

  return (
    <div className="flex flex-col self-center">
      <div className="font-black headline-text text-white text-center my-8">
        <animated.span style={fadeIn} className="text-blue-300 block">
          Process Driven
        </animated.span>
        <animated.span style={fadeInNext}>Digital Design</animated.span>
      </div>
      <div className="text-center mt-10">
        <div className="text-white font-bold text-3xl">The Work</div>
        <div>
          <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Headline;
