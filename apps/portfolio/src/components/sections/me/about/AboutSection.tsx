import AboutContent from '@/components/sections/me/about/AboutContent.tsx';
import Title from '@/components/title/Title.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { lazy } from 'react';

const FadeContent = lazy(() => import('@/animations/FadeContent/FadeContent'));

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 gap-8 md:gap-13">
      <Title title="About Me">
        <div className="text-xs md:text-sm lg:text-base font-normal flex flex-col gap-3 md:gap-6 leading-7">
          <p>
            Originally trained in accounting and management, I discovered my true passion lies in programming and
            technology. I started with low-level languages to understand the fundamentals, then moved into modern web
            development with React, TypeScript and React Native.
            <br />I enjoy building things that solve real problems and am always excited to learn new technologies.
          </p>
          <p>
            Alongside my technical journey, I’ve also embraced entrepreneurship—having launched both a sole
            proprietorship and a company—where I enjoy experimenting, building, and bringing ideas to life through
            real-world applications.
          </p>
          <p>
            I love exploring the world. I recently spent a year studying in Chandigarh, India, which was an incredible
            It was a life-changing experience that broadened my perspective both personally and professionally. I was
            fortunate enough to discover Rajasthan and participate in almost all of the major events, including the
            Kumbh Mela.
          </p>
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
