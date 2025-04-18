import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '',
  width = 200,
  height = 60,
  priority = false,
  variant = 'dark'
}) => {
  const imagePath = variant === 'light' 
    ? '/images/logo-light.png'
    : '/images/logo-dark.png';

  return (
    <div className={className}>
      <Image
        src={imagePath}
        alt="Clicar Logo"
        width={width}
        height={height}
        priority={priority}
        className="w-auto h-auto"
      />
    </div>
  );
}; 