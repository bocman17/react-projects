import React from 'react'

import { FaQuoteRight } from 'react-icons/fa'
import Buttons from './Buttons'

const Slider = ({ people, index, setIndex }) => {
  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        const { id, name, title, image, quote } = person
        let position = 'nextSlide'
        if (personIndex === index) {
          position = 'activeSlide'
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <article className={position} key={id}>
            <img src={image} alt={title} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}
      <Buttons people={people} index={index} setIndex={setIndex} />
    </div>
  )
}

export default Slider
