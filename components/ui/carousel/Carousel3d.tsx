"use client"

import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

let dpr = 0.5;

let Carousel3d = ({
  children, style, className, onChange, tilt, duration, ease,
  blurIncrease, opacityDecline, opacityBasics, moveRange, childMaxLength,
  perspective, z, current,
}) => {
  let [rotate, setRotate] = useState(-current * 360 / childMaxLength);
  let [currentState, setCurrentState] = useState<any>(current);
  let [transition, setTransition] = useState('none');
  let carouselRef = useRef(null);
  let wRef = useRef(null);

  let length = React.Children.toArray(children).length;
  let angle = 360 / childMaxLength;

  let startX
  let startRotate
  let onTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 1 || length <= 1 || !startX) {
      return;
    }
    let x = e.pageX || e.changedTouches[0].pageX;
    let differ = x - startX;
    let { current: currentState, rotate } = currentState;
    let n = differ > 0 ? 1 : -1;
    let newRotate = startRotate + n * angle * Math.round(Math.abs((rotate - startRotate) / angle));
    setRotate(newRotate);
    setTransition(`transform ${duration} ${ease}`);
    onChange({
      current: currentState,
      rotate: newRotate,
      eventType: 'end',
    });
  };
  useEffect(() => {
    wRef.current = document.body.clientWidth;
    window.addEventListener('mouseup', onTouchEnd);
  }, []);

  useEffect(() => {
    if (current !== currentState || React.Children.toArray(children).length !== length) {
      setLengthAndAngle();
      setRotate(-current * angle);
      setCurrentState(current);
      setTransition(`transform ${duration} ${ease}`);
    }
  }, [current, children]);

  let setLengthAndAngle = () => {
    length = React.Children.toArray(children).length;
    length = length > childMaxLength ? childMaxLength : length;
    angle = 360 / length;
  };

  let onTouchStart = (e) => {
    if (e.touches && e.touches.length > 1 || length <= 1) {
      return;
    }
     startX = e.pageX || e.touches[0].pageX;
     startRotate = Math.round(rotate / angle) * angle; // 偏移修复;
    let onTouchMove = (e) => {
      if (e.touches && e.touches.length > 1 || length <= 1 || !startX) {
        return;
      }
      let x = e.pageX || e.touches[0].pageX;
      let differ = (x - startX) * moveRange; // 幅度加大；
      let rotate = startRotate + differ / wRef.current * angle;
      let r = (Math.abs(Math.ceil(rotate / 360)) * 360 - rotate) % 360;
      let newCurrent = Math.round(r / angle) % length;
      setRotate(rotate);
      setCurrentState(newCurrent);
      onChange({
        current: newCurrent,
        rotate,
        eventType: 'move',
      });
    };
   
    carouselRef.current.addEventListener('touchmove', onTouchMove);
    carouselRef.current.addEventListener('touchend', onTouchEnd);
    carouselRef.current.addEventListener('mousemove', onTouchMove);
    carouselRef.current.addEventListener('mouseup', onTouchEnd);
  };

  return (
    <div
      ref={carouselRef}
      onTouchStart={onTouchStart}
     onMouseDown={onTouchStart}
      style={{
        ...style,
        perspective: perspective * dpr,
        transform: `translateY(-${tilt}) scale(${(perspective * dpr - z * dpr) / (perspective * dpr)})`,
      }}
    >
      <div
        className="carousel-wrapper"
      >
        <div
          className="carousel"
          style={{
            transform: `translateY(${tilt}) rotateY(${rotate}deg)`,
            transition,
          }}
        >
          {React.Children.toArray(children).map((item, i) => {
            if (i >= childMaxLength) {
              return null;
            }
            let transform = `rotateY(${angle * i}deg) translateZ(${z * dpr}px) rotateY(-${angle * i}deg) `;
            let animStyle = {
              opacity: 1 - ((i - 1) * opacityDecline + opacityBasics * (i ? 1 : 0)),
            };
            if (blurIncrease) {
              animStyle.filter = `blur(${i * blurIncrease}px)`;
            }
            return (
              <div
                className="itemWrapper"
                key={item.key}
                style={{
                  transform,
                  ...animStyle,
                }}
              >
                <div
                  className="rotateLayer"
                >
                  <div
                    className="bgAndBlurLayer"
                    style={animStyle}
                  >
                    {/* transform 与 filter 的距阵冲突，图层分离 */}
                    <div className="contentLayer" style={{ opacity: currentState === i ? 1 : 0 }}>
                      {item}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Carousel3d.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  tilt: PropTypes.string,
  duration: PropTypes.string,
  ease: PropTypes.string,
  blurIncrease: PropTypes.number,
  opacityDecline: PropTypes.number,
  opacityBasics: PropTypes.number,
  moveRange: PropTypes.number,
  childMaxLength: PropTypes.number,
  perspective: PropTypes.number,
  z: PropTypes.number,
  current: PropTypes.number,
};

Carousel3d.defaultProps = {
  onChange: () => { },
  tilt: '5rem',
  duration: '.45s',
  ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  blurIncrease: 8,
  opacityDecline: 0.1,
  opacityBasics: 0.5,
  moveRange: 2,
  childMaxLength: 6,
  perspective: 2800,
  z: 800,
  current: 0,
};

let imgWrapper = [
  'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
  'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png',
  'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png',
  'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png',
  'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png',
  'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png',
  /* 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png',
  'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png', */
];

function Carousel() {
  let children = imgWrapper.map((src, i) => (
    <div
      key={i.toString()}
      className="img-wrapper"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  ));
  return (
    <div className="carousel-demo-wrapper">
      <Carousel3d childMaxLength={6}>
        {children}
      </Carousel3d>
    </div>
  );
}

export default Carousel;