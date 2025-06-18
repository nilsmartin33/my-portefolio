import GradientText from '@/animations/GradientText/GradientText.tsx';
import HeroButton from '@/components/sections/hero/HeroButton.tsx';
import { lazy, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const SplitText = lazy(() => import('@/animations/SplitText/SplitText.tsx'));

const HeroContent = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadFonts = async () => {
      await document.fonts.ready;
      setFontsLoaded(true);
    };
    loadFonts();

    const onScroll = () => {
      if (window.scrollY === 0) {
        setAnimationKey((prev) => prev + 1);
      }
    };
    window.addEventListener('scroll', onScroll);

    const handleLanguageChange = () => setAnimationKey((prev) => prev + 1);
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="h-full flex flex-col justify-center items-start p-4 gap-6 xl:gap-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {fontsLoaded && (
            <SplitText
              key={animationKey}
              text={t('hero.intro')}
              className="text-lg sm:text-xl lg:text-2xl font-medium"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
              onLetterAnimationComplete={() => console.log('finished')}
            />
          )}
        </div>
        <GradientText
          colors={['#6366F1', '#7C3AED', '#8B5CF6', '#4F46E5']}
          animationSpeed={3}
          showBorder={false}
          className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-12"
        >
          <Trans i18nKey="hero.role" components={{ primary: <span className="text-primary" /> }} />
        </GradientText>
      </div>
      <HeroButton />
    </div>
  );
};

export default HeroContent;
