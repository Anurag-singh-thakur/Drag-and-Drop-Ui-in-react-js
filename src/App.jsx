// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: `card-${cards.length + 1}`,
      text: 'This is some dummy text for the card. Show more to see full text.',
      x: Math.random() * 400,
      y: Math.random() * 400,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="app">
      <button onClick={addCard}>Add Card</button>
      <div className="canvas">
        {cards.map((card) => (
          <Draggable key={card.id} defaultPosition={{ x: card.x, y: card.y }}>
            <div>
              <ResizableBox width={200} height={100} minConstraints={[150, 50]} maxConstraints={[400, 300]}>
                <Card text={card.text} />
              </ResizableBox>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default App;
