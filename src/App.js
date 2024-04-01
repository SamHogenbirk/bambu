import React, { useRef } from 'react'
import Navbar from './elements/Navbar'
import Card from './elements/Card'
import Footer from './elements/Footer'
import cardData from './cardData'
import './styles/App.css'

function App() {

  const cardRefs = useRef(cardData.map(() => React.createRef()))


  return (
    <div className="main">
      <Navbar cards={cardData.map((card, index) => ({ ...card, ref: cardRefs.current[index] }))} />
      {cardData.map((card, index) => (
        <Card key={index}
          ref={cardRefs.current[index]}
          title={card.title}
          description={card.description}
          content={card.content}
          image={card.image} />
      ))}
      <Footer />
    </div>
  )

}

export default App
