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
    <section className="bg-white w-[375px] flex flex-col h-[740px] lg:h-[100vh] lg:w-[100vw]  lg:flex lg:justify-center lg:items-center ">
      
      <div className='lg:block'> <img className='hidden lg:block lg:w-[300px] ' src="/src/assets/illustration-sign-up-desktop.svg" alt="" />
      <img className='lg:hidden' src="/src/assets/illustration-sign-up-mobile.svg" alt=""/>
      </div>
      <div className='mx-6 flex flex-col mt-4  '>
          <h1 className='.roboto-bold text-[26px] lg:text-[30px]'>Stay updated!</h1>
      <p className='my-4 text-sm lg:text-base'>Join 60,000+ product managers receiving monthly uptades on:</p>

      <ul className='  my-2 text-sm lg:text-[16px] '>
  <li className="flex items-center mb-5  ">
    <Icon/> Product discovery and building what matters
  </li>
  <li className="flex items-center mb-5">
    <Icon /> Measuring to ensure updates are a success
  </li>
  <li className="flex items-center mb-5">
    <Icon /> And much more!
  </li>
</ul>


      <Input className='rounded-lg mb-4'/>
      
      <Button className=' rounded-lg bg-blue-950 h-[50px]' onClick={handleClick} text='Subscribe to monthly newsletter'/>
      </div>

    
    </section>
  );
}

export default Card;
