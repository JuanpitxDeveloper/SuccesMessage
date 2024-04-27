// Button.tsx
interface ButtonProps {
  onClick: () => void;
  className?:string;
  text: string
}

const Button: React.FC<ButtonProps> = ({ onClick,className, text }) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 lg:px-1 rounded text-[14px] hover:bg-[#FF6257] hover:bg-gradient-to-br from-[#FF6257] to-[#FFB6B9] transition duration-300 ${className}`}>
    <p>
      {text}
      </p>
    </button>
  );
}

export default Button;
