import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ModalMenu from '../../../ModalMenu';
import { Link } from 'react-router-dom';

import Logo from '../../../images/logo_digital-REV.png';

const Headline = () => {
  const [open, openModal] = useState(false);

  const fadeIn = useSpring({
    config: { mass: 1, tension: 280, friction: 120 },
    opacity: 1,
    delay: 500,
    from: { opacity: 0 }
  });

  const fadeInNext = useSpring({
    config: { mass: 3, tension: 120, friction: 14 },
    opacity: 1,
    delay: 1400,
    from: { opacity: 0 }
  });

  const fadeInLast = useSpring({
    config: { mass: 3, tension: 120, friction: 14 },
    opacity: 1,
    delay: 2000,
    from: { opacity: 0 }
  });

  const closeModal = childData => openModal(childData);

  return (
    <>
      {open && <ModalMenu closeModal={closeModal} />}
      <div className="flex flex-col justify-between lg:h-screen">
        <div className="flex items-center justify-between md:mr-8 md:ml-4 md:mt-8 mr-6 mt-6 ml-6 block lg:hidden">
          <div>
            <img src={Logo} alt="Logo" width="100" />
          </div>
          <div>
            <button onClick={() => openModal(true)}>
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:justify-center lg:h-screen">
          <div className="text-center">
            <animated.div
              style={fadeInLast}
              className="text-lowlight font-black text-center text-xl md:text-3xl tracking-wider"
            >
              Process-Driven Digital Design
            </animated.div>
          </div>
          <div className="font-black headline-text text-white text-center my-8">
            <animated.span style={fadeIn} className="text-lowlight block">
              Tell Your
            </animated.span>
            <animated.span style={fadeInNext} className="text-white">
              Company Story.
            </animated.span>
          </div>
        </div>
        <animated.div
          style={fadeInLast}
          className="flex items-center flex-col mb-6 block lg:hidden"
        >
          <div className="text-white font-bold text-3xl">Our Work.</div>
          <Link to="/projects">
            <FontAwesomeIcon
              icon={faChevronDown}
              size="2x"
              className="text-secondary"
            />
          </Link>
        </animated.div>
      </div>
    </>
  );
};

export default Headline;
