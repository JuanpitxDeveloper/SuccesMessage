// Card.tsx
import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon'

const Card: React.FC = () => {
  const handleClick = () => {
    // Handle button click
    console.log('Button clicked!');
  };

  return (
    <section className="bg-white w-[375px] flex flex-col h-[100vh]">
      
      <div>
        <img src="/src/assets/illustration-sign-up-mobile.svg" alt="" className='w-[375px] '/>
      </div>
      <div className='mx-6 flex flex-col '>
          <h1 className='.roboto-bold'>Stay updated!</h1>
      <p className='mb-4'>Join 60,000+ product managers receiving monthly uptades on:</p>

      <ul className=' mb-4'>
  <li className="flex items-center mb-4">
    <Icon className="mr-2" /> Product discovery and building what matters
  </li>
  <li className="flex items-center mb-4">
    <Icon className="mr-2" /> Measuring to ensure updates are a success
  </li>
  <li className="flex items-center">
    <Icon className="mr-2" /> And much more!
  </li>
</ul>


      <Input/>
      
      <Button className=' bg-blue-950' onClick={handleClick} text='Subscribe to monthly newsletter'/>
      </div>

    
    </section>
  );
}

export default Card;
