// HomePage.tsx
import React from 'react';
import Card from '../molecules/Card';

const HomePage: React.FC = () => {
  return (
    <body className='bg-[#36384e] w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className=" flex justify-center">
        <Card />
      </div>
    </body>
  );
}

export default HomePage;
