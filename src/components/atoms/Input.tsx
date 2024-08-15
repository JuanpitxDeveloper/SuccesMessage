import React from 'react';

interface InputProps {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className }) => {
  return (
    <form action="input" className='text-[14px]  mb-4'>
      <label htmlFor="email" className={className}>
        Email addresss
        <input
          type="email"
          id="email"
          placeholder='example@gmail.com'
          className='w-[325px] h-[45px] px-2.5 py-2 text-[14px]   font-bold rounded-lg border focus:outline-[#aaaaaa] border-[#cccccc] mt-2 lg:h-[50px] lg:w-[100%]'
          required // Añadir el atributo required aquí
        />
      </label>
    </form>
  );
};

export default Input;
