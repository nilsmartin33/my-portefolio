import type { TitleProps } from '@/components/title/types';

const Title = ({ title, children }: TitleProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 gap-8 md:gap-10">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default Title;
