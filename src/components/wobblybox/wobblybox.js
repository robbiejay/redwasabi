/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TweenMax, TimelineMax } from "gsap/TweenMax";

const {
    useState,
    useRef,
    useEffect
  } = React
  

export const WobblyBox = ({
    content
  }) => {
    // state, setters and getters
    const [ contentIndex, setContentIndex ] = useState(0)
    const setNextContentIndex = () => setContentIndex((contentIndex + 1) % content.length)
    const getContent = () => content[contentIndex]
    
    // refs for use with gsap
    const wobblyBoxElement = useRef(null)
    const titleElement = useRef(null)
    const textElement = useRef(null)
    const nextBorderElement = useRef(null)
    const stepperElement = useRef(null)
    const faceElements = [ titleElement, textElement, nextBorderElement, stepperElement ]
    const rotationMaxDegrees = 10
    const animationTimeout = 0.25
    const animationPopBackTimeout = 1.25
    
    // componentDidMount() hook
    useEffect(() => {
      TweenMax.to(wobblyBoxElement.current, 1, {
        rotationX: +rotationMaxDegrees,
        rotationY: -rotationMaxDegrees
      })
    }, [])
  
    // wobble and zoom contents on mouseover
    const onMouseMove = event => {
      const bounds = wobblyBoxElement.current.getBoundingClientRect()
      const x = event.clientX - bounds.left
      const y = event.clientY - bounds.top
      const percentX = x / bounds.width
      const percentY = y / bounds.height
      const scaleSize = 1.025
      
      TweenMax.killTweensOf(wobblyBoxElement.current)
      TweenMax.to(wobblyBoxElement.current, animationTimeout, {
        rotationY: +rotationMaxDegrees * percentX,
        rotationX: -rotationMaxDegrees * percentY,
      })
      faceElements.forEach(faceElement => {
        TweenMax.to(faceElement.current, animationTimeout, { scale: scaleSize })
      })
    }
    
    // stop wobbling and unzoom contents on mouseout
    const onMouseOut = event => {
      TweenMax.to(wobblyBoxElement.current, animationTimeout, {
        rotationY: 0,
        rotationX: 0
      })
      faceElements.forEach(faceElement => {
        TweenMax.to(faceElement.current, animationTimeout, { scale: 1 })
      })
    }
    
    // jerk backwards and go to the next content set
    const popBack = () => {    
      const wobblyBoxTimeline = new TimelineMax()
      wobblyBoxTimeline.to(wobblyBoxElement.current, animationTimeout, {
        rotationY: -rotationMaxDegrees,
        rotationX: +rotationMaxDegrees,
      })
      wobblyBoxTimeline.to(wobblyBoxElement.current, animationTimeout, {
        rotationY: 0,
        rotationX: 0,
      })
      const nextBorderTimeline = new TimelineMax()
      nextBorderTimeline.to(nextBorderElement.current, animationTimeout, {
        width: '200%',
        height: '200%',
        opacity: 0
      })
      nextBorderTimeline.to(nextBorderElement.current, animationTimeout, {
        width: '100%',
        height: '100%',
        opacity: 1
      })
      setNextContentIndex()
    }
    
    const { title, text } = getContent()
    return (
      <div
        className="wobbly-box landing-page-header"
        ref={wobblyBoxElement}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      >
        <div className="wobbly-box__top">
          <h1 
            className="wobbly-box__title"
            ref={titleElement}
          >
            {title}
          </h1>
          <p
            className="wobbly-box__text"
            ref={textElement}
          >
            {text}
          </p>
        </div>
        <div
          className="wobbly-box__bottom"
          ref={stepperElement}
        >
          <Stepper
            steps={content.length}
            currentStep={contentIndex}
          />
          <div
            className="wobbly-box__next"
            onClick={popBack}
          >
            <div
              className="wobbly-box__next-border"
              ref={nextBorderElement}
            />
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    )
  }
  
export const Stepper = ({
    steps,
    currentStep
  }) => (
    <div className="stepper">
      {Array.from({ length: steps }).map((step, index) =>
        <div className={classNames('stepper__step', {
          'stepper__step--active': index === currentStep
        })} />
      )}
    </div>
  )
    
  
  Stepper.propTypes = {
    steps: PropTypes.number.isRequired,
    currentStep: PropTypes.number.isRequired
  }
  