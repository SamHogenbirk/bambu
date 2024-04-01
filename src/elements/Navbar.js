import React from 'react';

const Navbar = ({ cards }) => {

  const scrollToCard = (ref) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    const navbarHeight = 115; // Replace this with the actual height of your navbar
    window.scrollTo({ 
      top: window.scrollY + rect.top - navbarHeight, 
      behavior: 'smooth' 
    })

  } else {
    const interval = setInterval(() => {
      if (ref.current) {
        clearInterval(interval);
        const rect = ref.current.getBoundingClientRect();
        const navbarHeight = 50; // Replace this with the actual height of your navbar
        window.scrollTo({ 
          top: window.scrollY + rect.top - navbarHeight, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  }
}

  return (
    <nav className="navbar">
      <ul className="menu">
        {cards.map((card, index) => (
          <li key={index} className="menu-item" onClick={() => scrollToCard(card.ref)}>
            {card.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar
