// Card.tsx
import React from 'react';
import Button from '../atoms/Button';

const Card: React.FC = () => {
  const handleClick = () => {
    // Handle button click
    console.log('Button clicked!');
  };

  return (
    <section className="bg-gray-200 p-4 rounded">
      <h2>Card Title</h2>
      <p>This is the content of the card.</p>
      <Button onClick={handleClick} text='Fuck me' />
      <Button className='bg-red-500' onClick={handleClick} text='Click me'/>
    </section>
  );
}

export default Card;
