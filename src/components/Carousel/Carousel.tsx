'use client';

import { Ref, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ClientErrorBoundary } from '../ErrorBoundaries/ClientErrorBoundary';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  settings: object;
  style?: string;
  carouselRef?: Ref<Slider>;
}

function Carousel({ children, className = '', settings, style = '', carouselRef = null }: CarouselProps) {
  // Prevent SSR Hydration Mismatch & Leaks
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a stable placeholder during SSR to prevent layout shift/hydration error
    return <div className={`animate-pulse bg-gray-100 min-h-[300px] rounded-lg ${className}`} />;
  }

  return (
    <ClientErrorBoundary>
      <Slider ref={carouselRef} {...settings} className={`z-[1] ${className} ${style}`}>
        {children}
      </Slider>
    </ClientErrorBoundary>
  );
}

export default Carousel;
