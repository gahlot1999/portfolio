import { useEffect, useState } from 'react';

function BgGradient() {
  const [mousePosition, setMousePosition] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition([e.clientX, e.clientY]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='pointer-events-none fixed inset-0 z-999 transition duration-300 hidden lg:block'
      style={{
        background: `radial-gradient(600px at ${mousePosition[0]}px ${mousePosition[1]}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
}

export default BgGradient;
