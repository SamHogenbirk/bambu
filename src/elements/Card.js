import React, { useState, useEffect } from 'react'

// Define a Card component using forwardRef to get a reference to the DOM node.
const Card = React.forwardRef(({ title, content, image }, ref) => {
  // Initialize state variables for content index, enlargement, content visibility, and visibility delay.
  const [state, setState] = useState({
    contentIndex: 0,
    enlarged: false,
    showContent: false,
    visible: false
  })

  // Destructure state variables for easier access.
  const { contentIndex, enlarged, showContent, visible } = state

  // Use an effect hook to handle the delay in visibility.
  useEffect(() => {
    if (showContent) {
      // If content is to be shown, set a timeout to change visibility after 300ms.
      const timeout = setTimeout(() => setState(prev => ({ ...prev, visible: true })), 300)
      // Clear the timeout when the component unmounts or updates.
      return () => clearTimeout(timeout)
    } else {
      // If content is not to be shown, set visibility to false immediately.
      setState(prev => ({ ...prev, visible: false }))
    }
  }, [showContent])

  // Define a function to toggle enlargement of the card.
  const toggleEnlarge = () => {
    setState(prev => ({
      ...prev,
      enlarged: !prev.enlarged,
      showContent: !prev.enlarged
    }))

    // If the card is not already enlarged and the ref is defined,
    // scroll to the top of the card smoothly.
    if (!enlarged && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      window.scrollTo({ top: window.scrollY + rect.top - 115, behavior: 'smooth' })
    }
  }

  // Define a function to change the content index, wrapping around to the start or end as needed.
  const changeContentIndex = (change) => {
    setState(prev => ({
      ...prev,
      contentIndex: (prev.contentIndex + change + content.length) % content.length
    }))
  }

  // Render the card.
  return (

    <div
      ref={ref}
      className={`card ${enlarged ? "enlarged" : ""}`}
      onClick={(e) => e.target.getAttribute('data-card') && toggleEnlarge()}
      data-card="true"
    >

      <div className="background" style={{ backgroundImage: `url(${image})` }}>
        <div className={`center-circle ${enlarged ? "visible" : ""}`}></div>
      </div>

      <div className={`overlay ${enlarged ? "visible" : ""}`}></div>
      <h1 onClick={toggleEnlarge} className={`card-title ${enlarged ? "move" : ""}`}>{title}</h1>

      {showContent && (

        <div className='content-wrapper'>
          <div className="close-button" onClick={toggleEnlarge}>
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

          <div className='content-container'>
            <div className={`scrollable-content ${visible ? "visible" : ""}`}>
              <p className={`card-content ${enlarged ? "move" : ""}`}>{content[contentIndex]}</p>
            </div>

            {content.length > 1 && (

              <div className="indicator">
                {content.map((_, i) => (
                  <span key={i} className={`dot ${i === contentIndex ? "active" : ""}`}
                    onClick={() => changeContentIndex(i === content.length - 1 ? -1 : 1)}
                  />
                ))}
              </div>
            )}
          </div>

          {content.length > 1 && (

            <div className={`controls ${visible ? "visible" : ""}`}>

              <button className="arrow-button" onClick={() => changeContentIndex(-1)}>
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button className="arrow-button" onClick={() => changeContentIndex(1)}>
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
})

export default Card
