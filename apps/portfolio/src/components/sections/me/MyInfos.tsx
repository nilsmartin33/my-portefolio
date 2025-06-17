import AboutSection from '@/components/sections/me/about/AboutSection.tsx';
import SkillsSection from '@/components/sections/me/skills/SkillsSection.tsx';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

const MyInfos = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col px-4 py-8 md:p-16 gap-12 items-center justify-center min-h-screen"
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="h-12 h-12 md:h-20 md:w-20 animate-spin text-accent-foreground" />
          </div>
        }
      >
        <AboutSection />
      </Suspense>
      <SkillsSection />
    </section>
  );
};

export default MyInfos;
