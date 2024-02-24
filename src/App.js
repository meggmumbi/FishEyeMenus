import React from 'react';
import Menu from './components/Menu';
import petra from "./images/petra.jpg";
import wall from "./images/wall.jpg";
import pyramid from "./images/pyramid.jpg";
import christ from "./images/christ.jpg";
import taj from "./images/taj.jpg";
import machu from "./images/machu.jpg";
import chichen from "./images/chichen.jpg";
import colosseum from "./images/colosseum.jpg";
import './App.css';

const wondersData = [
  {
    name: 'Pyramid',
    details: 'The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World. It is located in Egypt and is the largest of the three pyramids in the Giza Pyramid Complex.',
    image: pyramid,
  },
  {
    name: 'Wall',
    details: 'The Great Wall of China is a series of fortifications built along the northern borders of China to protect against invasions. It is the world\'s longest wall.',
    image: wall,
  },
  {
    name: 'Petra',
    details: 'Petra, also known as the Rose City, is a historical and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system.',
    image: petra,
  },
  {
    name: 'Christ',
    details: 'Christ the Redeemer is an iconic statue of Jesus Christ in Rio de Janeiro, Brazil. It stands atop the Corcovado mountain and is a symbol of Christianity worldwide.',
    image: christ,
  },
  {
    name: 'Machu',
    details: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. It is renowned for its sophisticated dry-stone walls and stunning panoramic views.',
    image: machu,
  },
  {
    name: 'Chichen',
    details: 'Chichen Itza is a large pre-Columbian archaeological site in Mexico. It was a major city of the Maya civilization and is known for the El Castillo pyramid.',
    image: chichen,
  },
  {
    name: 'Colosseum',
    details: 'The Colosseum is an ancient amphitheater located in the center of Rome, Italy. It is considered one of the greatest works of Roman engineering and architecture.',
    image: colosseum,
  },
  {
    name: 'Taj',
    details: 'The Taj Mahal is a white marble mausoleum in Agra, India. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal and is a UNESCO World Heritage Site.',
    image: taj,
  },
  
];

function App() {
  return (
    <div className="app">
      <Menu wonders={wondersData} />
    </div>
    
  );
}

export default App;
