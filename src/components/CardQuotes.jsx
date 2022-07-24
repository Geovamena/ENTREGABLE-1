import React from 'react'

const CardQuotes = ({ randomQuote, randomColors, getRandomAll }) => {

  console.log(randomQuote, randomColors)

  const objStyle = {
    color: randomColors
  }

  const objBgStyle = {
    backgroundColor: randomColors
  }

  return (

    <article className='card' style={objStyle}>

      <div className='card_container'>
        <i className="fa-solid fa-quote-left"></i>
        <p className='card_item'>{randomQuote.quote}</p>
        <p className='card_item'><b>{randomQuote.author}</b></p>
        <button onClick={getRandomAll} className='card_btn' style={objBgStyle}>&#62;</button>

      </div>

    </article>

  )
}

export default CardQuotes