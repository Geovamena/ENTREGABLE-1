import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import CardQuotes from './components/CardQuotes'
import colors from './utils/colors'


function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setrandomColors] = useState(colorRandom)

  const objectStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
     quoteRandom = getRandomElement(quotes)
     colorRandom = getRandomElement(colors)

    setRandomQuote(quoteRandom)
    setrandomColors(colorRandom)
  }

  return (
    <div className="App" style={objectStyle}  >
      <CardQuotes
       randomQuote={randomQuote}
        randomColors={randomColors}
        getRandomAll={getRandomAll}
        />
    </div>
  )
}

export default App
