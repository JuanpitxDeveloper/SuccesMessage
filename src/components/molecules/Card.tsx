import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

const Card: React.FC = () => {
  const handleClick = () => {
    // Handle button click
    console.log('Button clicked!');
  };

  return (
    <section className="bg-white w-screen h-screen  flex flex-col justify-center items-center lg:flex-row-reverse lg:h-[28rem] lg:w-[650px] lg:p-6 lg:rounded-xl">
      {/* Div para las imágenes */}
      <div className="w-full lg:w-[50%] h-[18rem] lg:h-[380px]  flex justify-center lg:justify-start lg:pl-[60px]">
        <div>
          <img className="hidden lg:block w-[250px]" src="/src/assets/illustration-sign-up-desktop.svg" alt="" />
        </div>
        <div className="w-auto">
          <img className="lg:hidden object-center" src="/src/assets/illustration-sign-up-mobile.svg" alt="" />
        </div>
      </div>
      {/* Div para el contenido */}
      <div className="mx-6 flex flex-col lg:w-[250px] lg:mt-1 mt-4 justify-center items-center lg:items-start lg:ml-[5px] lg:mx-">
        <h1 className=".roboto-bold text-[26px] ">Stay updated!</h1>
        <p className="lg:my-1 my-4 text-sm ">Join 60,000+ product managers receiving monthly updates on:</p>

        <ul className="my-2 text-sm ">
          <ListItem icon={<Icon />} text="Product discovery and building what matters" />
          <ListItem icon={<Icon />} text="Measuring to ensure updates are a success" />
          <ListItem icon={<Icon />} text="And much more!" />
        </ul>

        <Input className="rounded-lg md:mb-4  " />
        
        <Button className="rounded-lg bg-blue-950 h-[50px] w-[100%] " onClick={handleClick} text="Subscribe to monthly newsletter" />
      </div>
    </section>
  );
}

// Componente ListItem para representar cada elemento de lista
const ListItem: React.FC<{ icon: JSX.Element; text: string }> = ({ icon, text }) => {
  return (
    <li className="flex items-center mb-5">
      {icon}
      <span className="mx-4">{text}</span>
    </li>
  );
};

export default Card;
