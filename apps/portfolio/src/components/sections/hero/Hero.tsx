import HeroContent from '@/components/sections/hero/HeroContent.tsx';
import { useTheme } from '@/context/useTheme.tsx';
import { Loader2 } from 'lucide-react';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';

const MetaBalls = lazy(() => import('@/animations/MetaBalls/MetaBalls.tsx'));

const Hero = () => {
  const { theme } = useTheme();
  const [shouldLoadAnimation, setShouldLoadAnimation] = useState(false);
  const visibleRef = useRef<HTMLDivElement>(null);

  const colorBalls = theme === 'light' ? '#101828FF' : '#F9FAFBFF';
  const colorCursorBall = theme === 'light' ? '#6A7282FF' : '#1E2939FF';

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setShouldLoadAnimation(true);
          observer.disconnect();
          return;
        }
      }
    };
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    if (visibleRef.current) {
      observer.observe(visibleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={visibleRef}
      className="px-2 sm:px-4 py-6 sm:py-8 items-center justify-center mt-14 sm:mt-14 md:mt-18 md:mt-16 lg:mt-18 flex flex-col"
    >
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 md:px-6 md:py-6 lg:px-9 lg:py-12">
        <div className="flex-1">
          <HeroContent />
        </div>
        <div className="flex-1 max-w-2xl">
          <div className="w-full h-full relative">
            {shouldLoadAnimation ? (
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <Loader2 className="h-12 w-12 md:h-20 md:w-20 animate-spin text-accent-foreground" />
                  </div>
                }
              >
                <MetaBalls
                  color={colorBalls}
                  cursorBallColor={colorCursorBall}
                  cursorBallSize={2}
                  ballCount={20}
                  animationSize={35}
                  enableMouseInteraction={true}
                  enableTransparency={true}
                  hoverSmoothness={0.05}
                  clumpFactor={1.35}
                  speed={0.3}
                />
              </Suspense>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
