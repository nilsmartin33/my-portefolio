import { servicesConfig, servicesContent } from '@/constants/about/services.ts';

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full">
        {servicesConfig.map((service) => {
          const content = servicesContent[service.key];
          return (
            <div key={service.key} className="flex flex-col gap-1 px-4 pb-4">
              <div className="flex flex-row gap-2 py-2">
                <div>
                  <service.icon size={24} />
                </div>
                <p className="font-semibold text-sm sm:text-base md:text-lg underline-offset-4 hover:underline">
                  {content.title}
                </p>
              </div>
              <p className="pl-8 font-light text-xs sm:text-sm md:text-base leading-7">{content.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
