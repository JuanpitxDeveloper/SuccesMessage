import React from 'react';

interface InputProps {
  className?: string;
  
}

const Input: React.FC<InputProps> = ({ className }) => {
  return (
    <label htmlFor="email" className={className}>
      <input type="email" id="email" placeholder='example@gmail.com' className=' w-[200px] px-2.5 py-2 text-lg font-bold rounded-lg border focus:outline-[#aaaaaa] border-[#cccccc]' />
    </label>
  );
};

export default Input;
