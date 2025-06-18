import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';

const HeroButton = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-5">
      <Button
        variant="secondary"
        className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 md:py-4 h-12 hover:bg-primary/10"
        asChild
      >
        <a href="/my.pdf" download="CV_Nils_MARTIN.pdf">
          {t('hero.download')}
        </a>
      </Button>
      <Button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 md:py-4 h-12" asChild>
        <a href="mailto:nmco.contact@gmail.com"> {t('hero.contact')}</a>
      </Button>
    </div>
  );
};

export default HeroButton;
