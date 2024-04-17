import React from 'react';

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = () => {
  return (
<img src="/src/assets/icon-list.svg" alt="" />
  );
};

export default Icon;
