import AboutContent from '@/components/sections/me/about/AboutContent.tsx';
import Title from '@/components/title/Title.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

const FadeContent = lazy(() => import('@/animations/FadeContent/FadeContent'));

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 gap-8 md:gap-13">
      <Title title={t('title.about')}>
        <div className="text-xs md:text-sm lg:text-base font-normal flex flex-col gap-3 md:gap-6 leading-7">
          <p>
            {t('about.part1')}
            <br />
            {t('about.part2')}
          </p>
          <p>{t('about.part3')}</p>
          <p>{t('about.part4')}</p>
        </div>
      </Title>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <Separator />
      </div>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <AboutContent />
      </FadeContent>
    </div>
  );
};

export default AboutSection;
