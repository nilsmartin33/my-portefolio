import SkillsContent from '@/components/sections/me/skills/SkillsContent.tsx';
import Title from '@/components/title/Title.tsx';
import { Separator } from '@/components/ui/separator.tsx';

const SkillsSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 md:p-8 gap-8 md:gap-13">
      <Title title="Skills">
        <p className="text-xs md:text-sm lg:text-base font-light flex items-center justify-center">
          Tools I’m well-versed in and passionate about
        </p>
      </Title>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <Separator />
      </div>
      <SkillsContent />
    </div>
  );
};

export default SkillsSection;
