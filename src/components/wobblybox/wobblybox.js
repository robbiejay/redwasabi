/* eslint-disable */
import React from 'react';

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
    
    const { title } = getContent()
    return (
      <div
        className="wobbly-box landing-page-header"
      >
        <div className="wobbly-box__top">
          <h1 
            className="wobbly-box__title"
          >
            {title}
          </h1>
        </div>
        <div
          className="wobbly-box__bottom"
        >

          <div
            className="wobbly-box__next"
          >
            <div
              className="wobbly-box__next-border"
            />

          </div>
        </div>
      </div>
    )
  }

  