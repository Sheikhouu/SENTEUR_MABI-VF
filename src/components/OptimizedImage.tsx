import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  onError?: () => void;
  priority?: boolean;
  onClick?: () => void;
  whatsappLink?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  onError,
  priority = false,
  onClick,
  whatsappLink,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  if (!src || error) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-400">Image non disponible</span>
      </div>
    );
  }
  
  const isCloudinaryUrl = src.includes('cloudinary.com');
  
  const optimizedSrc = isCloudinaryUrl 
    ? src.replace('/upload/', '/upload/q_auto,f_auto,w_auto,dpr_auto,c_scale/') 
    : src;
  
  const placeholderSrc = isCloudinaryUrl
    ? src.replace('/upload/', '/upload/w_50,q_10,f_auto,e_blur:1000/')
    : src;

  const handleError = () => {
    setError(true);
    if (onError) onError();
  };

  const ImageWrapper = whatsappLink ? 'a' : 'div';
  const wrapperProps = whatsappLink ? {
    href: whatsappLink,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': `Commander ${alt}`
  } : {};

  return (
    <ImageWrapper 
      className="relative overflow-hidden w-full h-full cursor-pointer"
      onClick={onClick}
      {...wrapperProps}
    >
      {/* Placeholder image */}
      <img
        src={placeholderSrc}
        alt=""
        aria-hidden="true"
        className={`${className} absolute inset-0 blur-lg scale-105 transition-opacity duration-300`}
        style={{ opacity: isLoaded ? 0 : 1 }}
      />
      
      {/* Main image */}
      <motion.img
        src={optimizedSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        loading={priority ? "eager" : loading}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </ImageWrapper>
  );
};

export default OptimizedImage;