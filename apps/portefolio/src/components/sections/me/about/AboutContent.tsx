import { Activity, Code, Palette, Wrench } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutContent = () => {
  const { t } = useTranslation();
  const services = useMemo(
    () => [
      {
        key: 'design',
        icon: Palette,
        title: t('services.design.title'),
        description: t('services.design.description'),
      },
      {
        key: 'development',
        icon: Code,
        title: t('services.development.title'),
        description: t('services.development.description'),
      },
      {
        key: 'maintenance',
        icon: Wrench,
        title: t('services.maintenance.title'),
        description: t('services.maintenance.description'),
      },
      {
        key: 'monitoring',
        icon: Activity,
        title: t('services.monitoring.title'),
        description: t('services.monitoring.description'),
      },
    ],
    [t]
  );
  return (
    <div className="flex flex-col items-center justify-center px-2 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 w-full">
        {services.map((service) => {
          return (
            <div key={service.key} className="flex flex-col gap-1 px-4 pb-4">
              <div className="flex flex-row gap-2 py-2">
                <div>
                  <service.icon size={24} />
                </div>
                <p className="font-semibold text-sm sm:text-base md:text-lg underline-offset-4 hover:underline">
                  {service.title}
                </p>
              </div>
              <p className="pl-8 font-extralight text-xs sm:text-sm md:text-base leading-7">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
