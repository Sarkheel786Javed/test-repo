import { useEffect, useState } from 'react'


interface TypewriterProps {
  text: string;
  delay: number;
  infinite: boolean;
  size:string
  clasName:string
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, infinite ,size,clasName}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span className={`${clasName}`} style={{fontSize:`${size}`}}>{currentText}</span>;
};

export default Typewriter